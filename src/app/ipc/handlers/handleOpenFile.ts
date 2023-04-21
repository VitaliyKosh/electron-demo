import { BrowserWindow, dialog } from "electron"

export default async (browserWindow: BrowserWindow) => {
    const { canceled, filePaths } = await dialog.showOpenDialog(browserWindow)
    
    if (canceled) {
      return
    } else {
      return filePaths[0]
    }
}