import { BrowserWindow, app } from "electron"
declare const SECOND_WINDOW_WEBPACK_ENTRY: string;
declare const SECOND_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

export default (parent: BrowserWindow) => {
  const newWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      contextIsolation: true,
      sandbox: true,
      preload: SECOND_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
    parent
  })

  newWindow.loadURL(SECOND_WINDOW_WEBPACK_ENTRY)

  return newWindow
}