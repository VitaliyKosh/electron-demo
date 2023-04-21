import { app, BrowserWindow, globalShortcut, Menu, nativeTheme, Tray } from 'electron';
import { removeIPCListeners, loadIPCListeners } from './app/ipc/loadIPCListeners';
import buildMenu from './app/menu/buildMenu';
import getTheme from './app/ipc/handlers/getTheme';
import showNotification from './app/ipc/handlers/showNotification';
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

if (require('electron-squirrel-startup')) {
  app.quit();
}

const createMainWindow = () => {
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      contextIsolation: true,
      sandbox: true,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  })

  Menu.setApplicationMenu(buildMenu(app, mainWindow))

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)
  // mainWindow.webContents.openDevTools()

  loadIPCListeners({browserWindow: mainWindow})

  mainWindow.on('close', removeIPCListeners)

  globalShortcut.register('CommandOrControl+G', () => mainWindow.webContents.send('shortcut', 'CommandOrControl+G'))

  return mainWindow
};

nativeTheme.on('updated', () => {
  BrowserWindow.getAllWindows().forEach(win => {
    win.webContents.send('theme', getTheme())
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    globalShortcut.unregisterAll()

    app.quit();
  }
});

app.whenReady().then(() => {
  createMainWindow()

  const nativeImage = require('electron').nativeImage

  const image = nativeImage.createFromPath('./src/123Template.png')

  const tray = new Tray(image)
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Item1', type: 'checkbox', click: showNotification},
    { label: 'Item2', type: 'checkbox', checked: true, click: showNotification},
    { type: 'separator' },
    { label: 'Item3', type: 'submenu', submenu: [
      { label: 'Item3.1', type: 'checkbox', click: showNotification },
      { label: 'Item3.2', type: 'checkbox', click: showNotification },
      { label: 'Item3.3', type: 'checkbox', checked: true, click: showNotification},
    ]}
  ])

  tray.setToolTip('tray icon by electron')
  tray.setContextMenu(contextMenu)

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });
})