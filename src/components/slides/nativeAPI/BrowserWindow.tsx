import React, {FC, useEffect, useRef, useState} from 'react';
import classes from './BrowserWindow.modules.css'
import Text from "../../UI/text/Text";
import SlideContainer from '../../UI/slideContainer/SlideContainer';
import { IPage } from '../../../types/Slide';
import Button from '../../UI/button/Button';
import CodeBlock from '../../UI/codeBlock/CodeBlock';

interface BrowserWindowProps extends IPage {
    className?: string,
    children?: React.ReactNode
}

const BrowserWindow: FC<BrowserWindowProps> = props => {

    const createNewWindow = () => {
        window.electronAPI.openNewWindow()
    }

    const createScreenshot = () => {
        window.electronAPI.createScreenshot()
    }

    const videoRef = useRef<HTMLVideoElement>(null)

    function handleStream (stream: MediaStream) {
        videoRef.current.srcObject = stream
        videoRef.current.classList.add(classes.show)
        videoRef.current.onloadedmetadata = (e) => videoRef.current.play()
    }

    useEffect(() => {
        window.electronAPI.setSource(async (event, sourceId) => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    audio: false,
                    video: {
                        //@ts-ignore
                        mandatory: {
                            chromeMediaSource: 'desktop',
                            chromeMediaSourceId: sourceId,
                            minWidth: 1920,
                            maxWidth: 1920,
                            minHeight: 1080,
                            maxHeight: 1080
                        }
                    },
                })

                handleStream(stream)
            } catch (e) {}
        })

        window.electronAPI.shortcut((event, key) => {
            console.log(key);
            if (key === 'CommandOrControl+G') {
                setColors([
                    Math.random() * 255,
                    Math.random() * 255,
                    Math.random() * 255,
                ])
            }
        })

        return () => {
            window.electronAPI.removeSetSource()
            window.electronAPI.removeShortcut()
        }
    }, [])

    const [file, setFile] = useState('Открыть файл')
    
    const loadFile = async () => {
        const files = await window.electronAPI.loadFiles()
        setFile(files)
    }

    const openMessage = async (title?: string, message?: string) => {
        if (!title) title = 'Заголовок'
        if (!message) message = 'Текст'

        window.electronAPI.openMessageBox({
            title: title,
            message: message
        })
    }

    const [colors, setColors] = useState([0, 0, 0])

    const showNotification = () => {
        window.electronAPI.showNotification()
    }

    const useTouchId = async () => {
        const res = await window.electronAPI.useTouchId()

        if (res) {
            openMessage('Success', 'Success')
        } else {
            openMessage('Error', 'Error')
        }
    }

    const codeMenu = [
        {
            text: '{',
            tab: 0
        }, {
            text: 'label: \'Edit\',',
            tab: 1
        }, {
            text: 'submenu: [',
            tab: 1
        }, {
            text: '{',
            tab: 2
        }, {
            text: 'click: () => mainWindow.webContents.send(\'update-counter\', 1),',
            tab: 3
        }, {
            text: 'label: \'Increment\',',
            tab: 3
        }, {
            text: '}, {',
            tab: 2
        }, {
            text: 'click: () => mainWindow.webContents.send(\'update-counter\', -1),',
            tab: 3
        }, {
            text: 'label: \'Decrement\',',
            tab: 3
        }, {
            text: '},',
            tab: 2
        }, {
            text: '{ type: \'separator\' },',
            tab: 2
        }, {
            text: '{ role: \'undo\' },',
            tab: 2
        }, {
            text: '{ role: \'redo\' },',
            tab: 2
        }, {
            text: '{ type: \'separator\' },',
            tab: 2
        }, {
            text: '{ role: \'cut\' },',
            tab: 2
        }, {
            text: '{ role: \'copy\' },',
            tab: 2
        }, {
            text: '{ role: \'paste\' },',
            tab: 2
        }, {
            text: '...(isMac ? [',
            tab: 2
        }, {
            text: '{ role: \'pasteAndMatchStyle\' },',
            tab: 3
        }, {
            text: '{ role: \'delete\' },',
            tab: 3
        }, {
            text: '{ role: \'selectAll\' },',
            tab: 3
        }, {
            text: '{ type: \'separator\' },',
            tab: 3
        }, {
            text: '{',
            tab: 3
        }, {
            text: 'label: \'Speech\',',
            tab: 4
        }, {
            text: 'submenu: [',
            tab: 4
        }, {
            text: '{ role: \'startSpeaking\' },',
            tab: 5
        }, {
            text: '{ role: \'stopSpeaking\' }',
            tab: 5
        }, {
            text: ']',
            tab: 4
        }, {
            text: '}',
            tab: 3
        }, {
            text: '] : [',
            tab: 2
        }, {
            text: '{ role: \'delete\' },',
            tab: 3
        }, {
            text: '{ type: \'separator\' },',
            tab: 3
        }, {
            text: '{ role: \'selectAll\' }',
            tab: 3
        }, {
            text: ']) as MenuItemConstructorOptions[]',
            tab: 2
        }, {
            text: ']',
            tab: 1
        }, {
            text: '}',
            tab: 0
        }
    ]

    return (
        <div className={[props.className].join(' ')}>
            <SlideContainer key={props.id}>
                <Text>Создать новое окно возможно при помощи <code>BrowserWindow</code></Text>
                <Button onClick={createNewWindow}>Создать новое окно</Button>
                <Text>Захват экрана осуществляется при помощи <code>desktopCapturer</code></Text>
                <Button onClick={createScreenshot}>Захват экрана</Button>
                <video className={classes.video} ref={videoRef}/>
                <Text>Модуль <code>dialog</code> позволяет вызывать диалоговые окна</Text>
                <Button onClick={loadFile}>{file || 'undefined'}</Button>
                <Button onClick={() => openMessage()}>Открыть message</Button>
                <Text>С помощью <code>globalShortcut</code> можно настроить кастомные сочетания клавиш</Text>
                <Text style={{color: `rgb(${colors.join(',')})`}}>Нажми (Command || Control) + G</Text>
                <Text>Модуль <code>Notification</code> позволяет отправлять уведомления</Text>
                <Button onClick={showNotification}>Отправить уведомление</Button>
                <Text>Использовать Touch Id возможно при помощи <code>systemPreferences</code></Text>
                <Button onClick={useTouchId}>Использовать Touch Id</Button>
                <Text>Приложение использует системную тему благодаря <code>nativeTheme</code> и следит за ее изменением</Text>
                <Text>При помощи модуля <code>Menu</code> можно редактировать системное меню приложения:</Text>
                <CodeBlock code={codeMenu} filename={'main.js'} lang={'javascript'}/>
                <Text>Модуль <code>Tray</code> позволяет создать иконку приложения в трее</Text>
            </SlideContainer>
        </div>
    );
};

export default BrowserWindow;