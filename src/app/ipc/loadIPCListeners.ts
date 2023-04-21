import { BrowserWindow, ipcMain } from "electron"
import handleSetTitle from "./handlers/handleSetTitle"
import handleOpenFile from "./handlers/handleOpenFile"
import openWindow from "./handlers/openWindow"
import createScreenshot from "./handlers/createScreenshot"
import openMessageBox from "./handlers/openMessageBox"
import showNotification from "./handlers/showNotification"
import getTheme from "./handlers/getTheme"
import useTouchId from "./handlers/useTouchId"

interface ILoadIPCListeners {
    browserWindow: BrowserWindow
}

export const loadIPCListeners = (props: ILoadIPCListeners) => {
    ipcMain.on('set-title', handleSetTitle)
    ipcMain.handle('dialog:openFile', () => handleOpenFile(props.browserWindow))
    ipcMain.on('open-message-box', (event, options: Electron.MessageBoxOptions) => openMessageBox(props.browserWindow, options))
    ipcMain.on('counter-value', (_event, value) => {console.log(value)})
    ipcMain.on('open-window', () => openWindow(props.browserWindow))
    ipcMain.on('screenshot', () => createScreenshot(props.browserWindow))
    ipcMain.on('notification', () => showNotification())
    ipcMain.handle('get-theme', () => getTheme())
    ipcMain.handle('use-touch-id', () => useTouchId())
}

export const removeIPCListeners = () => {    
    ipcMain.removeAllListeners('set-title')
    ipcMain.removeHandler('dialog:openFile')
    ipcMain.removeAllListeners('open-message-box')
    ipcMain.removeAllListeners('counter-value')
    ipcMain.removeAllListeners('open-window')
    ipcMain.removeAllListeners('screenshot')
    ipcMain.removeAllListeners('notification')
    ipcMain.removeHandler('get-theme')
    ipcMain.removeHandler('use-touch-id')
}