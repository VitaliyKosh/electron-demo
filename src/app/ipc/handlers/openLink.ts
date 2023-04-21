import { shell } from "electron"

export default (event: Electron.IpcMainEvent, link: string) => {
    shell.openExternal(link)
}