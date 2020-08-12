
function buildSystemInfo(sysInfo, baseboardInfo, batteryInfoContent, biosInfo, chassisInfo) {

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

function buildCPUInfo(cpuInfo, speedInfo, speedOutput, cpuFlagsOutput) {

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

function buildMemoryInfo(memoryInfo, layoutInfo) {

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

    return displayOutput;
}

function buildGraphicsInfo(displays, screenSize, controllers) {

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

function buildOSInfo(osInfo, uuid, userInfo, packagesInfo) {

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

    return displayOutput;
}

module.exports.buildSystemInfo = buildSystemInfo;
module.exports.buildCPUInfo = buildCPUInfo;
module.exports.buildMemoryInfo = buildMemoryInfo;
module.exports.buildGraphicsInfo = buildGraphicsInfo;
module.exports.buildOSInfo = buildOSInfo;