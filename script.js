
const { app } = require('electron').remote;
const { buildSystemInfo } = require('./builder');
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
                <span class="_batterylevel-text">${batteryInfo.percent}%</span>
                ${batteryChargingIndicator}
                <div class="progress">
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

        const displayOutput = `
        <div class="row">
            <div class="col l6 m12 s12 animate__animated animate__fadeIn">
                <ul class="collection with-header">
                    <li class="collection-header"><span class="_collection-header-text">CPU</span><span class="_collection-header-icon"><i class="small material-icons">memory</i></span></li>
                    <li class="collection-item"><div class="_collection-item-text">Manufacturer<a class="secondary-content">${cpuInfo.manufacturer ? cpuInfo.manufacturer : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Brand<a class="secondary-content">${cpuInfo.brand ? cpuInfo.brand : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Vendor<a class="secondary-content">${cpuInfo.vendor ? cpuInfo.vendor : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Family<a class="secondary-content">${cpuInfo.family ? cpuInfo.family : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Model<a class="secondary-content">${cpuInfo.model ? cpuInfo.model : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Stepping<a class="secondary-content">${cpuInfo.stepping ? cpuInfo.stepping : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Revision<a class="secondary-content">${cpuInfo.revision ? cpuInfo.revision : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Voltage<a class="secondary-content">${cpuInfo.voltage ? `${cpuInfo.voltage}V` : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Speed<a class="secondary-content">${cpuInfo.speed ? `${cpuInfo.speed} GHz` : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Minimum Speed<a class="secondary-content">${cpuInfo.speedmin ? `${cpuInfo.speedmin} GHz` : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Maximum Speed<a class="secondary-content">${cpuInfo.speedmax ? `${cpuInfo.speedmax} GHz` : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Governor<a class="secondary-content">${cpuInfo.governor ? cpuInfo.governor : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text"># Cores<a class="secondary-content">${cpuInfo.cores ? cpuInfo.cores : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text"># Physical Cores<a class="secondary-content">${cpuInfo.physicalCores ? cpuInfo.physicalCores : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text"># Processors<a class="secondary-content">${cpuInfo.processors ? cpuInfo.processors : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Socket<a class="secondary-content">${cpuInfo.socket ? cpuInfo.socket : 'N/A'}</a></div></li>
                </ul>
            </div>
            <div class="col l6 m12 s12 animate__animated animate__fadeIn">
                <ul class="collection with-header">
                    <li class="collection-header"><span class="_collection-header-text">Cache</span><span class="_collection-header-icon"><i class="small material-icons">sd_storage</i></span></li>
                    <li class="collection-item"><div class="_collection-item-text">L1D<a class="secondary-content">${cpuInfo.cache.l1d ? `${cpuInfo.cache.l1d / 1024} KB` : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">L1I<a class="secondary-content">${cpuInfo.cache.l1i ? `${cpuInfo.cache.l1i / 1024} KB` : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">L2<a class="secondary-content">${cpuInfo.cache.l2 ? `${cpuInfo.cache.l2 / 1024} KB` : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">L3<a class="secondary-content">${cpuInfo.cache.l3 ? `${cpuInfo.cache.l3 / 1024} KB` : 'N/A'}</a></div></li>
                </ul>
                <ul class="collection with-header">
                    <li class="collection-header"><span class="_collection-header-text">Speed</span><span class="_collection-header-icon"><i class="small material-icons">access_time</i></span></li>
                    <li class="collection-item"><div class="_collection-item-text">Minimum<a class="secondary-content">${speedInfo.min ? `${speedInfo.min} GHz` : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Maximum<a class="secondary-content">${speedInfo.max ? `${speedInfo.max} GHz` : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Average<a class="secondary-content">${speedInfo.avg ? `${speedInfo.avg} GHz` : 'N/A'}</a></div></li>
                    ${speedOutput}
                </ul>
                <ul class="collection with-header">
                <li class="collection-header"><span class="_collection-header-text">Flags</span><span class="_collection-header-icon"><i class="small material-icons">flag</i></span></li>
                    <li class="collection-item"><div class="_flags-style">${cpuFlagsOutput}</div></li>
                </ul>
            </div>
        </div
        `;

        mainContent.innerHTML = displayOutput;

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

        const displayOutput = `
        <div class="row">
            <div class="col l6 m12 s12 animate__animated animate__fadeIn">
                <ul class="collection with-header">
                    <li class="collection-header"><span class="_collection-header-text">Memory</span><span class="_collection-header-icon"><i class="small material-icons">layers</i></span></li>
                    <li class="collection-item"><div class="_collection-item-text">Total<a class="secondary-content">${memoryInfo.total ? `${(Math.floor(memoryInfo.total / (Math.pow(10, 9)))).toFixed(2)} GB` : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Useable<a class="secondary-content">${memoryInfo.total ? `${(memoryInfo.total / (Math.pow(2, 30))).toFixed(2)} GB` : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Used<a id="used-mem" class="secondary-content">${memoryInfo.used ? `${(memoryInfo.used / (Math.pow(2, 30))).toFixed(2)} GB` : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Available<a id="free-mem" class="secondary-content">${memoryInfo.free ? `${(memoryInfo.free / (Math.pow(2, 30))).toFixed(2)} GB` : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Total Virtual Memory<a class="secondary-content">${memoryInfo.swaptotal ? `${(memoryInfo.swaptotal / (Math.pow(2, 30))).toFixed(2)} GB` : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Used Virtual Memory<a id="used-vm" class="secondary-content">${memoryInfo.swapused ? `${(memoryInfo.swapused / (Math.pow(2, 30))).toFixed(2)} GB` : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Available Virtual Memory<a id="free-vm" class="secondary-content">${memoryInfo.swapfree ? `${(memoryInfo.swapfree / (Math.pow(2, 30))).toFixed(2)} GB` : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Type<a class="secondary-content">${layoutInfo.type ? layoutInfo.type : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Clock Speed<a class="secondary-content">${layoutInfo.clockSpeed ? `${layoutInfo.clockSpeed} MHz` : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Form Factor<a class="secondary-content">${layoutInfo.formFactor ? layoutInfo.formFactor : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Manufacturer<a class="secondary-content">${layoutInfo.manufacturer ? layoutInfo.manufacturer : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Part No<a class="secondary-content">${layoutInfo.partNum ? layoutInfo.partNum : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Serial No<a class="secondary-content">${layoutInfo.serialNum ? layoutInfo.serialNum : 'N/A'}</a></div></li>
                </ul>
            </div>
        </div>
        `;

        mainContent.innerHTML = displayOutput;

        memoryIntervalFlag = setInterval(updatememoryInfo, 1000);

    }, timeoutDelay);
}

async function viewDiskInfo() {

    initializePageView(diskLinks);
}

async function viewGraphicsInfo() {

    initializePageView(graphicsLinks);

    const graphicsInfo = await si.graphics();
    const { displays, controllers } = graphicsInfo;

    const screenSize = `(${displays[0].sizex}cm x ${displays[0].sizey}cm) ${Math.ceil((Math.sqrt((Math.pow(displays[0].sizex, 2)) + (Math.pow(displays[0].sizey, 2))))  / 2.54)}”`;

    setTimeout(() => {

        const displayOutput = `
        <div class="row">
            <div class="col l6 m12 s12 animate__animated animate__fadeIn">
                <ul class="collection with-header">
                    <li class="collection-header"><span class="_collection-header-text">Display</span><span class="_collection-header-icon"><i class="small material-icons">dvr</i></span></li>
                    <li class="collection-item"><div class="_collection-item-text">Vendor<a class="secondary-content">${displays[0].vendor ? displays[0].vendor : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Model<a class="secondary-content">${displays[0].model ? displays[0].model : 'N/A'}</a></div></li>               
                    <li class="collection-item"><div class="_collection-item-text">Primary<a class="secondary-content"><i class="material-icons">${displays[0].main ? 'check_box' : 'cancel'}</i></a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Builtin<a class="secondary-content"><i class="material-icons">${displays[0].builtin ? 'check_box' : 'cancel'}</i></a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Connection<a class="secondary-content">${displays[0].connection ? displays[0].connection : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Pixel Depth<a class="secondary-content">${displays[0].pixeldepth ? `${displays[0].pixeldepth} bits`  : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Refresh Rate<a class="secondary-content">${displays[0].currentRefreshRate ? `${displays[0].currentRefreshRate} Hz`  : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Resolution<a class="secondary-content">${`${displays[0].resolutionx} x ${displays[0].resolutiony}`}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Size<a class="secondary-content">${screenSize}</a></div></li>
                </ul>
            </div>
            <div class="col l6 m12 s12 animate__animated animate__fadeIn">
                <ul class="collection with-header">
                    <li class="collection-header"><span class="_collection-header-text">Controller</span><span class="_collection-header-icon"><i class="small material-icons">pie_chart</i></span></li>
                    <li class="collection-item"><div class="_collection-item-text">Vendor<a class="secondary-content">${controllers[0].vendor ? controllers[0].vendor : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Model<a class="secondary-content">${controllers[0].model ? controllers[0].model : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Bus<a class="secondary-content">${controllers[0].bus ? controllers[0].bus : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">VRAM Dynamic<a class="secondary-content"><i class="material-icons">${controllers[0].vramDynamic ? 'check_box' : 'cancel'}</i></a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">VRAM Size<a class="secondary-content">${controllers[0].vram ? `${controllers[0].vram} MB` : 'N/A'}</a></div></li>
                </ul>
            </div>
        </div>
        `;

        mainContent.innerHTML = displayOutput;

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

        const displayOutput = `
        <div class="row">
            <div class="col l6 m12 s12 animate__animated animate__fadeIn">
                <ul class="collection with-header">
                    <li class="collection-header"><span class="_collection-header-text">OS</span><span class="_collection-header-icon"><i class="small material-icons">data_usage</i></span></li>
                    <li class="collection-item"><div class="_collection-item-text">Platform<a class="secondary-content">${osInfo.platform ? osInfo.platform : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Distribution<a class="secondary-content">${osInfo.distro ? osInfo.distro : 'N/A'}</a></div></li>               
                    <li class="collection-item"><div class="_collection-item-text">Release<a class="secondary-content">${osInfo.release ? osInfo.release : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Code Name<a class="secondary-content">${osInfo.codename ? osInfo.codename : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Kernel<a class="secondary-content">${osInfo.kernel ? osInfo.kernel : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Architecture<a class="secondary-content">${osInfo.arch ? osInfo.arch  : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Host Name<a class="secondary-content">${osInfo.hostname ? osInfo.hostname : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Code Page<a class="secondary-content">${osInfo.codepage ? osInfo.codepage : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Logo File<a class="secondary-content">${osInfo.logofile ? osInfo.logofile : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Serial<a class="secondary-content">${osInfo.serial ? osInfo.serial : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Build<a class="secondary-content">${osInfo.build ? osInfo.build : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Service Pack<a class="secondary-content">${osInfo.servicepack ? osInfo.servicepack : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">UEFI<a class="secondary-content"><i class="material-icons">${osInfo.uefi ? 'check_box' : 'cancel'}</i></a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">UUID<a class="secondary-content">${uuid.os ? uuid.os : 'N/A'}</a></div></li>
                </ul>
            </div>
            <div class="col l6 m12 s12 animate__animated animate__fadeIn">
                <ul class="collection with-header">
                    <li class="collection-header"><span class="_collection-header-text">User</span><span class="_collection-header-icon"><i class="small material-icons">account_circle</i></span></li>
                    <li class="collection-item"><div class="_collection-item-text">User<a class="secondary-content">${userInfo[0].user ? userInfo[0].user : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">TTY<a class="secondary-content">${userInfo[0].tty ? userInfo[0].tty : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Date<a class="secondary-content">${userInfo[0].date ? userInfo[0].date : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Time<a class="secondary-content">${userInfo[0].time ? userInfo[0].time : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">IP<a class="secondary-content">${userInfo[0].ip ? userInfo[0].ip : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Command<a class="secondary-content">${userInfo[0].command ? userInfo[0].command : 'N/A'}</a></div></li>
                    </ul>
                    <ul class="collection with-header">
                    <li class="collection-header"><span class="_collection-header-text">Software Packages</span><span class="_collection-header-icon"><i class="small material-icons">settings_input_component</i></span></li>
                    <li class="collection-item _soft-ver">Version</li>
                    ${packagesInfo}
                </ul>
            </div>
        </div>
        `;

        mainContent.innerHTML = displayOutput;

    }, timeoutDelay);
}

async function viewProcessessInfo() {

    initializePageView(processesLinks);
}

async function viewNetworkInfo() {

    initializePageView();
}

viewSystemInfo();