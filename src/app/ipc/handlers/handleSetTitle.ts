import { BrowserWindow } from "electron"

export default (event: Electron.IpcMainEvent, title: string) => {
    const webContents = event.sender
    const win = BrowserWindow.fromWebContents(webContents)
    win.setTitle(title)
}