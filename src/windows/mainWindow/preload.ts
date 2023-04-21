import { IpcRendererEvent } from "electron"

const { contextBridge, ipcRenderer } = require('electron')

export interface IElectronAPI {
    setTitle: (title: string) => void
    loadFiles: () => Promise<string>
    openMessageBox: (options: {title: string, message: string}) => void
    showNotification: () => void
    openLink: (title: string) => void
    handleCounter: (callback: (event: IpcRendererEvent, value: number) => void) => Electron.IpcRenderer
    removeHandleCounter: () => void
    openNewWindow: () => void
    createScreenshot: () => void
    setSource: (callback: (event: IpcRendererEvent, sourceId: string) => void) => Electron.IpcRenderer
    removeSetSource: () => void
    shortcut: (callback: (event: IpcRendererEvent, key: string) => void) => Electron.IpcRenderer
    removeShortcut: () => void
    theme: (callback: (event: IpcRendererEvent, key: string) => void) => Electron.IpcRenderer
    removeTheme: () => void
    getTheme: () => Promise<string>
    useTouchId: () => Promise<boolean>
}

declare global {
    interface Window {
        electronAPI: IElectronAPI
    }
}
  
contextBridge.exposeInMainWorld('electronAPI', {    
    setTitle: (title: string) => ipcRenderer.send('set-title', title),
    loadFiles: () => ipcRenderer.invoke('dialog:openFile'),
    openMessageBox: (options: {title: string, message: string}) => ipcRenderer.send('open-message-box', options),
    showNotification: () => ipcRenderer.send('notification'),
    openLink: (link: string) => ipcRenderer.send('open-link', link),

    handleCounter: (callback: (event: IpcRendererEvent, value: number) => void) => ipcRenderer.on('update-counter', callback),
    removeHandleCounter: () => ipcRenderer.removeAllListeners('update-counter'),

    openNewWindow: () => ipcRenderer.send('open-window'),
    createScreenshot: () => ipcRenderer.send('screenshot'),

    setSource: (callback: (event: IpcRendererEvent, sourceId: string) => void) => ipcRenderer.on('SET_SOURCE', callback),
    removeSetSource: () => ipcRenderer.removeAllListeners('SET_SOURCE'),

    shortcut: (callback: (event: IpcRendererEvent, key: string) => void) => ipcRenderer.on('shortcut', callback),
    removeShortcut: () => ipcRenderer.removeAllListeners('shortcut'),

    theme: (callback: (event: IpcRendererEvent, key: string) => void) => ipcRenderer.on('theme', callback),
    removeTheme: () => ipcRenderer.removeAllListeners('theme'),
    getTheme: () => ipcRenderer.invoke('get-theme'),

    useTouchId: () => ipcRenderer.invoke('use-touch-id'),
})