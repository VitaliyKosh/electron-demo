import { BrowserWindow, desktopCapturer } from "electron"

export default (browserWindow: BrowserWindow) => {
    desktopCapturer.getSources({ types: ['window', 'screen'] }).then(async sources => {
        for (const source of sources) {            
            if (source.id === 'screen:1:0') {
                browserWindow.webContents.send('SET_SOURCE', source.id)
                return
            }
        }
    })
}