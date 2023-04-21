import { BrowserWindow, Menu, MenuItemConstructorOptions } from "electron"

export default (app: Electron.App, mainWindow: BrowserWindow) => {
    const isMac = process.platform === 'darwin'

    const template: (Electron.MenuItemConstructorOptions | Electron.MenuItem)[] = [
        {
            role: 'appMenu' 
        }, {
            label: 'File',
            submenu: [
                ...(isMac ? [
                    { role: 'close' }
                ] : [
                    { role: 'quit' }
                ]) as MenuItemConstructorOptions[]
            ]
        }, {
            label: 'Edit',
            submenu: [
                {
                    click: () => mainWindow.webContents.send('update-counter', 1),
                    label: 'Increment',
                }, {
                    click: () => mainWindow.webContents.send('update-counter', -1),
                    label: 'Decrement',
                },
                { type: 'separator' },
                { role: 'undo' },
                { role: 'redo' },
                { type: 'separator' },
                { role: 'cut' },
                { role: 'copy' },
                { role: 'paste' },
                ...(isMac ? [
                    { role: 'pasteAndMatchStyle' },
                    { role: 'delete' },
                    { role: 'selectAll' },
                    { type: 'separator' },
                    {
                        label: 'Speech',
                        submenu: [
                            { role: 'startSpeaking' },
                            { role: 'stopSpeaking' }
                        ]
                    }
                ] : [
                    { role: 'delete' },
                    { type: 'separator' },
                    { role: 'selectAll' }
                ]) as MenuItemConstructorOptions[]
            ]
        }, {
            label: 'View',
            submenu: [
                { role: 'reload' },
                { role: 'forceReload' },
                { role: 'toggleDevTools' },
                { type: 'separator' },
                { role: 'resetZoom' },
                { role: 'zoomIn' },
                { role: 'zoomOut' },
                { type: 'separator' },
                { role: 'togglefullscreen' }
            ]
        }, {
            label: 'Window',
            submenu: [
                { role: 'minimize' },
                { role: 'zoom' },
                ...(isMac ? [
                { type: 'separator' },
                { role: 'front' },
                { type: 'separator' },
                { role: 'window' }
                ] : [
                { role: 'close' }
                ]) as MenuItemConstructorOptions[]
            ]
        }, {
            role: 'help',
            submenu: [
                {
                label: 'Learn More',
                click: async () => {
                    const { shell } = require('electron')
                    await shell.openExternal('https://electronjs.org')
                }
                }
            ]
        }
    ]

    return Menu.buildFromTemplate(template)
}