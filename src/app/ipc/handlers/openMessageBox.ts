import { BrowserWindow, dialog } from "electron"

export default (browserWindow: BrowserWindow, options: Electron.MessageBoxOptions) => {
    dialog.showMessageBox(browserWindow, options)
}