module.exports.buildSystemInfo = (sysInfo, baseboardInfo, batteryInfoContent, biosInfo, chassisInfo) => {

    const displayOutput = `
        <div class="row">
            <div class="col l6 m12 s12 animate__animated animate__fadeIn">
                <ul class="collection with-header">
                    <li class="collection-header"><span class="_collection-header-text">System</span><span class="_collection-header-icon"><i class="small material-icons">settings</i></span></li>
                    <li class="collection-item"><div class="_collection-item-text">Manufacturer<a class="secondary-content">${sysInfo.manufacturer ? sysInfo.manufacturer : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Model<a class="secondary-content">${sysInfo.model ? sysInfo.model : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Version<a class="secondary-content">${sysInfo.version ? sysInfo.version : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Serial<a class="secondary-content">${sysInfo.serial ? sysInfo.serial : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">UUID<a class="secondary-content">${sysInfo.uuid ? sysInfo.uuid : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">SKU<a class="secondary-content">${sysInfo.sku ? sysInfo.sku : 'N/A'}</a></div></li>
                </ul>
                <ul class="collection with-header">
                    <li class="collection-header"><span class="_collection-header-text">Baseboard</span><span class="_collection-header-icon"><i class="small material-icons">developer_board</i></span></li>
                    <li class="collection-item"><div class="_collection-item-text">Manufacturer<a class="secondary-content">${baseboardInfo.manufacturer ? baseboardInfo.manufacturer : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Model<a class="secondary-content">${baseboardInfo.model ? baseboardInfo.model : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Version<a class="secondary-content">${baseboardInfo.version ? baseboardInfo.version : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Serial<a class="secondary-content">${baseboardInfo.serial ? baseboardInfo.serial : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Asset Tag<a class="secondary-content">${baseboardInfo.assetTag ? baseboardInfo.assetTag : 'N/A'}</a></div></li>
                </ul>
            </div>
            <div class="col l6 m12 s12 animate__animated animate__fadeIn">
                <div id="battery-content">
                    ${batteryInfoContent}
                </div>
                <ul class="collection with-header">
                    <li class="collection-header"><span class="_collection-header-text">Bios</span><span class="_collection-header-icon"><i class="small material-icons">ac_unit</i></span></li>
                    <li class="collection-item"><div class="_collection-item-text">Vendor<a class="secondary-content">${biosInfo.vendor ? biosInfo.vendor : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Version<a class="secondary-content">${biosInfo.version ? biosInfo.version : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Release Date<a class="secondary-content">${biosInfo.releaseDate ? biosInfo.releaseDate : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Revision<a class="secondary-content">${biosInfo.revision ? biosInfo.revision : 'N/A'}</a></div></li>
                </ul>
                <ul class="collection with-header">
                    <li class="collection-header"><span class="_collection-header-text">Chassis</span><span class="_collection-header-icon"><i class="small material-icons">filter_frames</i></span></li>
                    <li class="collection-item"><div class="_collection-item-text">Manufacturer<a class="secondary-content">${chassisInfo.manufacturer ? chassisInfo.manufacturer : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Model<a class="secondary-content">${chassisInfo.model ? chassisInfo.model : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Type<a class="secondary-content">${chassisInfo.type ? chassisInfo.type : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Version<a class="secondary-content">${chassisInfo.version ? chassisInfo.version : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Serial<a class="secondary-content">${chassisInfo.serial ? chassisInfo.serial : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">Asset Tag<a class="secondary-content">${chassisInfo.assetTag ? chassisInfo.assetTag : 'N/A'}</a></div></li>
                    <li class="collection-item"><div class="_collection-item-text">SKU<a class="secondary-content">${chassisInfo.sku ? chassisInfo.sku : 'N/A'}</a></div></li>
                </ul>
            </div>
        </div>
        `;

    return displayOutput;
}

module.exports.buildCPUInfo = (cpuInfo, speedInfo, speedOutput, cpuFlagsOutput) => {

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

    return displayOutput;
}

module.exports.buildMemoryInfo = (memoryInfo, layoutInfo) => {

    const displayOutput = `
        <div class="row">
            <div class="col l5 m12 s12 animate__animated animate__fadeIn">
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
            <div class="col l7 m12 s12 animate__animated animate__fadeIn">
                <div class="_graph-container">
                    <canvas id="mem-graph">
                    </canvas>
                </div>
            </div>
        </div>
        `;

    return displayOutput;
}

module.exports.buildGraphicsInfo = (displays, screenSize, controllers) => {

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

    return displayOutput;
}

module.exports.buildOSInfo = (osInfo, uuid, userInfo, packagesInfo) => {

    let iconName = '';
    if (osInfo.platform === 'win32')
        iconName = 'logo-windows';
    else if (osInfo.platform === 'darwin')
        iconName = 'logo-apple'
    else
        iconName = 'logo-tux';

    const displayOutput = `
        <div class="row">
            <div class="col l6 m12 s12 animate__animated animate__fadeIn">
                <ul class="collection with-header">
                    <li class="collection-header"><span class="_collection-header-text">OS</span><span class="_collection-header-icon"><ion-icon name="${iconName}"></ion-icon></span></li>
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

    return displayOutput;
}

function buildStorageProgress(drives) {

    let output = '';
    drives.forEach(drive => {
        if (drive.size > 0) {
            output += `
            <div class="container">
                <span class="_total-storage-text">Local Disk (${drive.localDisk}) - ${(drive.size / (Math.pow(2, 30))).toFixed(2)} GB</span>
                <div class="progress _storage-progress">
                    <div class="determinate" style="width: ${drive.use.toFixed(2)}%"></div>
                </div>
                <span class="_storage-text">
                    <span>${(drive.used / (Math.pow(2, 30))).toFixed(2)} GB Used</span>
                    <span class="_free-storage-text">${((drive.size - drive.used) / Math.pow(2, 30)).toFixed(2)} GB Free</span>
                </span>
            </div>
            <br>
            `;
        }
    });

    return output;
}

module.exports.buildDrivesInfo = (drives) => {

    const rows = drives.map(drive => {
        return `
        <tr>
            <td class="_table-td">${drive.localDisk?drive.localDisk:'N/A'}</td>
            <td class="_table-td">${drive.fsType?drive.fsType:'N/A'}</td>
            <td class="_table-td">${drive.location?drive.location:'N/A'}</td>
            <td class="_table-td">${drive.removable?'Yes':'NO'}</td>
            <td class="_table-td">${drive.type?drive.type:'N/A'}</td>
            <td class="_table-td">${drive.serial?drive.serial:'N/A'}</td>
            <td class="_table-td">${drive.uuid?drive.uuid:'N/A'}</td>
            <td class="_table-td">${drive.size?`${(drive.size / (Math.pow(2, 30))).toFixed(2)} GB`:'N/A'}</td>
            <td class="_table-td">${drive.used?`${(drive.used / (Math.pow(2, 30))).toFixed(2)} GB`:'N/A'}</td>
            <td class="_table-td">${drive.use?`${drive.use.toFixed(2)} %`:'N/A'}</td>
        </tr>
        `;
    }).join().replace(/,/g, '');

    const displayOutput = `
    <div class="row">
        <div class="col l7 m12 s12 animate__animated animate__fadeIn">
            <div class="_table-container">
                <table class="table-responsive _drives-table">
                    <div class="_table-header-container"><span class="_collection-header-text">Local Disks</span><span class="_table-header-icon"><i class="small material-icons">album</i></span></div>
                    <thead>
                        <tr>
                            <td class="_collection-item-text">Disk</td>
                            <td class="_collection-item-text">FS Type</td>
                            <td class="_collection-item-text">Location</td>
                            <td class="_collection-item-text">Removable</td>
                            <td class="_collection-item-text">Type</td>
                            <td class="_collection-item-text">Serial</td>
                            <td class="_collection-item-text">UUID</td>
                            <td class="_collection-item-text">Size</td>
                            <td class="_collection-item-text">Used</td>
                            <td class="_collection-item-text">Used %</td>
                        </tr>
                    </thead>
                    <tbod>
                        ${rows}
                    </tbod>
                </table>
            </div>
        </div>
        <div class="col l5 m12 s12 animate__animated animate__fadeIn">
            <div class="_loader-container">
                ${buildStorageProgress(drives)}
            </div>
        </div>
    </div>
    `;

    return displayOutput;
}

module.exports.buildDiskLayoutInfo = (diskLayoutInfo) => {

    const rows = diskLayoutInfo.map(disk => {
        return `
        <tr>
            <td class="_table-td">${disk.type?disk.type:'N/A'}</td>
            <td class="_table-td">${disk.name?disk.name:'N/A'}</td>
            <td class="_table-td">${disk.vendor?disk.vendor:'N/A'}</td>
            <td class="_table-td">${disk.size?`${(disk.size / Math.pow(10, 9)).toFixed(2)} GB`:'N/A'}</td>
            <td class="_table-td">${disk.bytesPerSector?disk.bytesPerSector:'N/A'}</td>
            <td class="_table-td">${disk.totalCylinders?disk.totalCylinders:'N/A'}</td>
            <td class="_table-td">${disk.totalHeads?disk.totalHeads:'N/A'}</td>
            <td class="_table-td">${disk.totalSectors?disk.totalSectors:'N/A'}</td>
            <td class="_table-td">${disk.totalTracks?disk.totalTracks:'N/A'}</td>
            <td class="_table-td">${disk.tracksPerCylinder?disk.tracksPerCylinder:'N/A'}</td>
            <td class="_table-td">${disk.sectorsPerTrack?disk.sectorsPerTrack:'N/A'}</td>
            <td class="_table-td">${disk.firmwareRevision?disk.firmwareRevision:'N/A'}</td>
            <td class="_table-td">${disk.serialNum?disk.serialNum:'N/A'}</td>
            <td class="_table-td">${disk.interfaceType?disk.interfaceType:'N/A'}</td>
            <td class="_table-td">${disk.smartStatus?disk.smartStatus:'N/A'}</td>
        </tr>
        `
    }).join().replace(/,/g, '');

    const displayOutput = `
    <div class="row">
        <div class="col l12 m12 s12 animate__animated animate__fadeIn">
            <div class="_table-container">
                <table class="table-responsive">
                    <div class="_table-header-container"><span class="_collection-header-text">Hard Drive(s)</span><span class="_table-header-icon"><ion-icon src="${'./icons/hard-drive.svg'}"></ion-icon></span></div>
                    <thead>
                        <tr>
                            <td class="_collection-item-text">Type</td>
                            <td class="_collection-item-text">Name</td>
                            <td class="_collection-item-text">Vendor</td>
                            <td class="_collection-item-text">Size</td>
                            <td class="_collection-item-text">Bytes per Sector</td>
                            <td class="_collection-item-text">Cylinders</td>
                            <td class="_collection-item-text">Heads</td>
                            <td class="_collection-item-text">Sectors</td>
                            <td class="_collection-item-text">Tracks</td>
                            <td class="_collection-item-text">Tracks per Cylinder</td>
                            <td class="_collection-item-text">Sectors per Track</td>
                            <td class="_collection-item-text">Firmware Revision</td>
                            <td class="_collection-item-text">Serial No</td>
                            <td class="_collection-item-text">Interface</td>
                            <td class="_collection-item-text">Smart Status</td>
                        </tr>
                    </thead>
                    <tbod>
                        ${rows}
                    </tbod>
                </table>
                <div class="_canvas-container container">
                    <canvas id="chart"></canvas>
                </div>
            </div>
        </div>
    </div>
    `;

    return displayOutput;
}

module.exports.buildNetworkInfo = (interfaces, defaultInterface, defaultGateway, networkStats) => {

    const interface = (interfaces.filter(iface => iface.iface === defaultInterface))[0];

    const displayOutput = `
    <div class="row">
        <div class="col l5 m12 s12 animate__animated animate__fadeIn">
            <ul class="collection with-header">
                <li class="collection-header"><span class="_collection-header-text">${defaultInterface}</span><span class="_collection-header-icon"><i class="small material-icons">${defaultInterface === 'Wi-Fi'?'wifi':'public'}</i></span></li>
                <li class="collection-item"><div class="_collection-item-text">Interface Name<a class="secondary-content">${interface.ifaceName ? interface.ifaceName : 'N/A'}</a></div></li>
                <li class="collection-item"><div class="_collection-item-text">Bytes Transferred<a id="bytes-tr" class="secondary-content">${networkStats.tx_bytes ? `${(networkStats.tx_bytes / (Math.pow(2, 20))).toFixed(2)} MB` : 'N/A'}</a></div></li>
                <li class="collection-item"><div class="_collection-item-text">Bytes Received<a id="bytes-rx" class="secondary-content">${networkStats.rx_bytes ? `${(networkStats.rx_bytes / (Math.pow(2, 20))).toFixed(2)} MB` : 'N/A'}</a></div></li>
                <li class="collection-item"><div class="_collection-item-text">IPv4<a class="secondary-content">${interface.ip4 ? interface.ip4 : 'N/A'}</a></div></li>
                <li class="collection-item"><div class="_collection-item-text">IPv4 Subnet<a class="secondary-content">${interface.ip4subnet ? interface.ip4subnet : 'N/A'}</a></div></li>
                <li class="collection-item"><div class="_collection-item-text">IPv6<a class="secondary-content">${interface.ip6 ? interface.ip6 : 'N/A'}</a></div></li>
                <li class="collection-item"><div class="_collection-item-text">IPv6 Subnet<a class="secondary-content">${interface.ip6subnet ? interface.ip6subnet : 'N/A'}</a></div></li>
                <li class="collection-item"><div class="_collection-item-text">Mac Address<a class="secondary-content">${interface.mac ? interface.mac : 'N/A'}</a></div></li>
                <li class="collection-item"><div class="_collection-item-text">Internal<a class="secondary-content"><i class="material-icons">${interface.internal ? 'check_box' : 'cancel'}</i></a></div></li>
                <li class="collection-item"><div class="_collection-item-text">Virtual<a class="secondary-content"><i class="material-icons">${interface.virtual ? 'check_box' : 'cancel'}</i></a></div></li>
                <li class="collection-item"><div class="_collection-item-text">State<a class="secondary-content">${interface.operstate ? interface.operstate : 'N/A'}</a></div></li>
                <li class="collection-item"><div class="_collection-item-text">Type<a class="secondary-content">${interface.type ? interface.type : 'N/A'}</a></div></li>
                <li class="collection-item"><div class="_collection-item-text">Speed<a class="secondary-content">${interface.speed ? `${interface.speed} Mbit/s` : 'N/A'}</a></div></li>
                <li class="collection-item"><div class="_collection-item-text">DHCP<a class="secondary-content"><i class="material-icons">${interface.dhcp === 'true' ? 'check_box' : 'cancel'}</i></a></div></li>
                <li class="collection-item"><div class="_collection-item-text">Default Gateway<a class="secondary-content">${defaultGateway ? defaultGateway : 'N/A'}</a></div></li>
            </ul>
        </div>
        <div class="col l7 m12 s12 animate__animated animate__fadeIn">
        <div class="_graph-container">
            <canvas id="net-graph">
            </canvas>
        </div>
        </div>
    </div>
    `;

    return displayOutput;
}