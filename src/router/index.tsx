import { Slide } from "../types/Slide";
import Start from "../components/slides/start/Start";
import Init from "../components/slides/init/Init";
import Support from "../components/slides/start/support/Support";
import Compatibility from "../components/slides/start/compatibility/Compatibility";
import Applications from "../components/slides/start/applications/Applications";
import ProcessModel from "../components/slides/processModel/ProcessModel";
import MainProcess from "../components/slides/processModel/mainProcess/MainProcess";
import RendererProcess from "../components/slides/processModel/rendererProcess/RendererProcess";
import Architecture from "../components/slides/processModel/architecture/Architecture";
import MainFile from "../components/slides/init/mainFile/MainFile";
import IndexFile from "../components/slides/init/indexFile/IndexFile";
import IPC from "../components/slides/ipc/IPC";
import MessagesOneWay from "../components/slides/ipc/messagesOneWay/MessagesOneWay";
import MessagesTwoWay from "../components/slides/ipc/messagesTwoWay/MessagesTwoWay";
import MessagesMainToRenderer from "../components/slides/ipc/messagesMainToRenderer/MessagesMainToRenderer";
import NativeAPI from "../components/slides/nativeAPI/NativeAPI";
import BrowserWindow from "../components/slides/nativeAPI/BrowserWindow";
import Git from "../components/slides/end/Git";


export const slides: Slide[] = [
    new Slide('Electron.js', Start, 0),
    new Slide('С чем совместим Electron', Compatibility, 1),
    new Slide('Что поддерживает Electron', Support, 1),
    new Slide('Популярные приложения на Electron', Applications, 1),

    new Slide('Electron process model', ProcessModel, 0),
    new Slide('Архитектура Electron приложения', Architecture, 1),
    new Slide('Main process', MainProcess, 1),
    new Slide('Renderer process', RendererProcess, 1),

    new Slide('Hello World!', Init, 0),
    new Slide('index.html', IndexFile, 1),
    new Slide('main.js', MainFile, 1),
    
    new Slide('Взаимодействие Renderer и Main', IPC, 0),
    new Slide('Renderer to main (one-way)', MessagesOneWay, 1),
    new Slide('Renderer to main (two-way)', MessagesTwoWay, 1),
    new Slide('Main to Renderer', MessagesMainToRenderer, 1),

    new Slide('Main Process Modules (Native API)', NativeAPI, 0),
    new Slide('Демонстрация Native API', BrowserWindow, 1),

    new Slide('Git', Git, 0)
]