
const { app } = require('electron').remote;
const { 

    buildSystemInfo, buildCPUInfo, buildMemoryInfo, buildGraphicsInfo,
    buildOSInfo,
    buildDiskLayoutInfo,
    buildStorageChart,
    buildDrivesInfo

} = require('./builder');
const si = require('systeminformation');

const versionText = document.querySelector('#version-text')
versionText.textContent = `Version ${app.getVersion()}`;

const sidenavLinks = document.querySelectorAll('.hoverable');

document.querySelector('._sidenav-trigger').addEventListener('click', () => sidenav.open());

const sidenav = M.Sidenav.init(document.querySelector('.sidenav'), {

    onOpenStart: () => {

        sidenavLinks.forEach(link => {

            link.classList.add('animate__animated', 'animate__fadeInLeft');;
        });
    },
    onCloseStart: () => {

        sidenavLinks.forEach(link => {
            
            link.classList.remove('animate__animated', 'animate__fadeInLeft');;
        });
    }
});

const systemLinks = document.querySelectorAll('#system-link');
const cpuLinks = document.querySelectorAll('#cpu-link');
const memoryLinks = document.querySelectorAll('#memory-link');
const diskLinks = document.querySelectorAll('#disk-link');
const graphicsLinks = document.querySelectorAll('#graphics-link');
const osLinks = document.querySelectorAll('#os-link');
const processesLinks = document.querySelectorAll('#processes-link');
const networkLinks = document.querySelectorAll('#network-link');

bindClickEventToLinks(systemLinks, viewSystemInfo);
bindClickEventToLinks(cpuLinks, viewCPUInfo);
bindClickEventToLinks(memoryLinks, viewMemoryInfo);
bindClickEventToLinks(diskLinks, viewDiskInfo);
bindClickEventToLinks(graphicsLinks, viewGraphicsInfo);
bindClickEventToLinks(osLinks, viewOsInfo);
bindClickEventToLinks(processesLinks, viewProcessessInfo);
bindClickEventToLinks(networkLinks, viewNetworkInfo);

const loader = `
    <div class="preloader-wrapper big active _loader">
    <div class="spinner-layer spinner-blue-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>`;

const mainContent = document.querySelector('#main-content');
let currentActivateLink = systemLinks;
let memoryIntervalFlag;
let batteryIntervalFlag;
const timeoutDelay = 100;

function bindClickEventToLinks(links, callback) {

    links.forEach(link => {
        
        link.addEventListener('click', callback);
    });
}

function initializePageView(link) {

    for (let i = 0; i < 2; i++) {

        currentActivateLink[i].classList.remove('active');
        link[i].classList.add('active');
    }

    currentActivateLink = link;

    clearInterval(memoryIntervalFlag);
    clearInterval(batteryIntervalFlag);
    mainContent.innerHTML = loader;

    if(sidenav.isOpen)
        sidenav.close();
}

async function getBatteryInfo() {

    const batteryInfo = await si.battery();

    let batteryInfoContent = '';
    if(batteryInfo.hasbattery) {

        const batteryChargingIndicator = batteryInfo.acconnected ? '<span class="_battery-charging-indicator"><i class="material-icons">power</i></span>' : '';

        let batteryStatus;
        if(batteryInfo.acconnected && batteryInfo.percent === 100)
            batteryStatus = 'Plugged in, Fully Charged';
        else if(batteryInfo.acconnected && !batteryInfo.ischarging)
            batteryStatus = 'Plugged in, Not Charging';
        else if(batteryInfo.ischarging)
            batteryStatus = 'Plugged in, Charging';
        else {

            const batteryManager = await navigator.getBattery();
            const remainingHours = Math.floor(batteryManager.dischargingTime / 3600);
            const remainingMinutes = Math.floor(((batteryManager.dischargingTime / 3600) - Math.floor(remainingHours)) * 60);

            if(remainingHours && remainingMinutes && remainingHours !== Infinity && remainingMinutes !== Infinity)
                batteryStatus = `${remainingHours} hr ${remainingMinutes} min remaining`;
            else if(remainingHours && remainingHours != Infinity)
                batteryStatus = `${remainingHours} hr remaining`;
            else if(remainingMinutes && remainingMinutes != Infinity)
                batteryStatus = `${remainingMinutes} min remaining`;
            else
                batteryStatus = '...';
        }

        batteryInfoContent = `
        <ul class="collection with-header">
            <li class="collection-header"><span class="_collection-header-text">Battery</span><span class="_collection-header-icon"><i class="small material-icons">battery_full</i></span></li>
            <li class="collection-item">
                <span class="_batterylevel-text">${batteryInfo.percent>100?100:batteryInfo.percent}%</span>
                ${batteryChargingIndicator}
                <div class="progress _charging-progress">
                    <div class="determinate" style="width: ${batteryInfo.percent}%"></div>
                </div>
            </li>
            <li class="collection-item"><div class="_collection-item-text">Status<a class="secondary-content">${batteryStatus}</a></div></li>
            <li class="collection-item"><div class="_collection-item-text">Voltage<a class="secondary-content">${batteryInfo.voltage}V</a></div></li>
        </ul>
        `;
    }

    return batteryInfoContent;
}

async function updateBatteryInfo() {

    const batteryInfoContent = await getBatteryInfo();
    document.querySelector('#battery-content').innerHTML = batteryInfoContent;
}

async function viewSystemInfo() {

    initializePageView(systemLinks);

    const sysInfo = await si.system();
    const biosInfo = await si.bios();
    const baseboardInfo = await si.baseboard();
    const chassisInfo = await si.chassis();
    const batteryInfoContent = await getBatteryInfo();
    
    setTimeout(() => {

        mainContent.innerHTML = buildSystemInfo(sysInfo, baseboardInfo, batteryInfoContent, biosInfo, chassisInfo);

        if(batteryInfoContent)
            batteryIntervalFlag = setInterval(updateBatteryInfo, 1000);

    }, timeoutDelay);
}

async function viewCPUInfo() {

    initializePageView(cpuLinks);

    const cpuInfo = await si.cpu();
    const speedInfo = await si.cpuCurrentspeed();
    let cpuFlags = await si.cpuFlags();

    cpuFlags = cpuFlags.split(' ');
    const lineCount = Math.floor(cpuFlags.length / 4);
    let index = 0;
    let cpuFlagsOutput = '';
    for (let i = 0; i < lineCount; i++) {

        const line = cpuFlags.slice(index, index + lineCount).join('  |  ');
        cpuFlagsOutput += `<div>${line}</div>`;
        index += lineCount;
    }

    let speedOutput = speedInfo.cores.map((core, index) => {
        return `<li class="collection-item"><div class="_collection-item-text">${`Core ${index + 1}`}<a class="secondary-content">${core} GHz</a></div></li>`;
    }).join().replace(/,/g, '');

    setTimeout(() => {

        mainContent.innerHTML = buildCPUInfo(cpuInfo, speedInfo, speedOutput, cpuFlagsOutput);

    }, timeoutDelay);
}

async function updatememoryInfo() {

    const { free, used, swapfree, swapused } = await si.mem();

    document.querySelector('#used-mem').textContent = `${used ? `${(used / (Math.pow(2, 30))).toFixed(2)} GB` : 'N/A'}`;
    document.querySelector('#free-mem').textContent = `${free ? `${(free / (Math.pow(2, 30))).toFixed(2)} GB` : 'N/A'}`;
    document.querySelector('#used-vm').textContent = `${swapused ? `${(swapused / (Math.pow(2, 30))).toFixed(2)} GB` : 'N/A'}`;
    document.querySelector('#free-vm').textContent = `${swapfree ? `${(swapfree / (Math.pow(2, 30))).toFixed(2)} GB` : 'N/A'}`;
}

async function viewMemoryInfo() {

    initializePageView(memoryLinks);

    const memoryInfo = await si.mem();
    let layoutInfo = await si.memLayout();
    layoutInfo = layoutInfo[0];

    setTimeout(() => {

        mainContent.innerHTML = buildMemoryInfo(memoryInfo, layoutInfo);

        memoryIntervalFlag = setInterval(updatememoryInfo, 1000);

    }, timeoutDelay);
}

async function viewDiskInfo() {

    initializePageView(diskLinks);

    const diskLayoutInfo = await si.diskLayout();
    const partitionInfo = await si.blockDevices();
    const fsInfo = await si.fsSize();

    const drives = fsInfo.map((key, index) => {
        return {
            localDisk: key.fs,
            fsType: key.type,
            location: partitionInfo[index].physical,
            removable: partitionInfo[index].removable,
            type: partitionInfo[index].type,
            serial: partitionInfo[index].serial,
            uuid: partitionInfo[index].uuid,
            size: key.size,
            used: key.used,
            use: key.use
        }
    });

    setTimeout(() => {

        let resultSet = buildDiskLayoutInfo(diskLayoutInfo);
        resultSet += buildDrivesInfo(drives);
        mainContent.innerHTML = resultSet;
        
        const canvas = document.querySelector('#chart').getContext('2d');
        const total = Number((diskLayoutInfo[0].size / (Math.pow(10, 9))).toFixed(2));
        let used = fsInfo.map(fs => {
            return fs.size?fs.size:0;
        }).reduce((a, b) => a + b, 0);
        used = Number((used / (Math.pow(10, 9))).toFixed(2));
        const free = total - used;

        buildStorageChart(canvas, total, used, free);

    }, timeoutDelay);

}

async function viewGraphicsInfo() {

    initializePageView(graphicsLinks);

    const graphicsInfo = await si.graphics();
    const { displays, controllers } = graphicsInfo;

    const screenSize = `(${displays[0].sizex}cm x ${displays[0].sizey}cm) ${Math.ceil((Math.sqrt((Math.pow(displays[0].sizex, 2)) + (Math.pow(displays[0].sizey, 2))))  / 2.54)}”`;

    setTimeout(() => {

        mainContent.innerHTML = buildGraphicsInfo(displays, screenSize, controllers);

    }, timeoutDelay);

}

async function viewOsInfo() {

    initializePageView(osLinks);

    const osInfo = await si.osInfo();
    const uuid = await si.uuid();
    const userInfo = await si.users();
    const packages = await si.versions();

    let packagesInfo = '';

    for(const package in packages) {

        if(packages[package]) {

            packagesInfo += `
            <li class="collection-item"><div class="_collection-item-text">${package}<a class="secondary-content">${packages[package]}</a></div></li>
            `;
        }
    }
    
    setTimeout(() => {

        mainContent.innerHTML = buildOSInfo(osInfo, uuid, userInfo, packagesInfo);

    }, timeoutDelay);
}

async function viewProcessessInfo() {

    initializePageView(processesLinks);
}

async function viewNetworkInfo() {

    initializePageView(networkLinks);
}

viewSystemInfo();