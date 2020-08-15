const {
    app,
    BrowserWindow,
    Menu,
    screen
} = require('electron');
const url = require('url');
const path = require('path');

function createAppWindow() {

    const window = new BrowserWindow({

        webPreferences: {

            nodeIntegration: true
        },
        show: false,
        width: 1123,
        height: screen.getPrimaryDisplay().size.height
    });

    window.maximize();
    window.loadURL(url.format({

        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    createAppMenu();

    window.once('ready-to-show', () => window.show());
}

function createAppMenu() {

    const isMac = process.platform === 'darwin'

    const template = [

        {
            label: 'File',
            submenu: [
                isMac ? {
                    role: 'close'
                } : {
                    role: 'quit'
                }
            ]
        },
        {
            label: 'View',
            submenu: [{
                    type: 'separator'
                },
                {
                    role: 'resetzoom'
                },
                {
                    role: 'zoomin'
                },
                {
                    role: 'zoomout'
                },
                {
                    type: 'separator'
                },
                {
                    role: 'togglefullscreen'
                }
            ]
        },
        {
            label: 'Window',
            submenu: [{
                    role: 'minimize'
                },
                {
                    role: 'zoom'
                },
                ...(isMac ? [{
                        type: 'separator'
                    },
                    {
                        role: 'front'
                    },
                    {
                        type: 'separator'
                    },
                    {
                        role: 'window'
                    }
                ] : [{
                    role: 'close'
                }])
            ]
        },
        {
            role: 'help',
            submenu: [{
                label: 'Learn More',
                click: async () => {
                    const {
                        shell
                    } = require('electron')
                    await shell.openExternal('https://github.com/Abdul-Moiz-Ali/System-Diagnose')
                }
            }]
        }
    ]

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
}

app.whenReady().then(createAppWindow);

app.on('window-all-closed', () => {

    if (process.platform !== 'darwin')
        app.quit();
});

app.on('activate', () => {

    if (BrowserWindow.getAllWindows().length === 0)
        createWindow();
});