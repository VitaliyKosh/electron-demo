import { BrowserWindow, nativeTheme } from "electron"

export default () => {
  if (nativeTheme.shouldUseDarkColors) {
    return 'dark'
  } else {
    return 'light'
  }
}