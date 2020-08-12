
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

module.exports.buildSystemInfo = buildSystemInfo;