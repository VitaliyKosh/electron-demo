import React, {FC, useEffect, useRef, useState} from 'react';
import classes from './MessagesMainToRenderer.module.css'
import CodeBlock from '../../../UI/codeBlock/CodeBlock';
import Text from "../../../UI/text/Text";
import SlideContainer from '../../../UI/slideContainer/SlideContainer';
import { IPage } from '../../../../types/Slide';
import Button from '../../../UI/button/Button';
import Input from '../../../UI/input/Input';
import { IpcRendererEvent, ipcRenderer} from 'electron';

interface MessagesMainToRendererProps extends IPage {
    className?: string,
    children?: React.ReactNode
}

const codeRenderer = [
    {
        text: '// пример реализации с использованием React',
        tab: 0
    }, {
        text: '',
        tab: 0
    }, {
        text: 'const [counter, setCounter] = useState(0)',
        tab: 0
    }, {
        text: 'const counterRef = useRef(counter)',
        tab: 0
    }, {
        text: '',
        tab: 0
    }, {
        text: 'window.electronAPI.handleCounter((event: IpcRendererEvent, value: number) => {',
        tab: 0
    }, {
        text: 'const newValue = counterRef.current + value',
        tab: 1
    }, {
        text: '',
        tab: 0
    }, {
        text: 'counterRef.current = newValue',
        tab: 1
    }, {
        text: 'setCounter(newValue)',
        tab: 1
    }, {
        text: '',
        tab: 0
    }, {
        text: 'event.sender.send(\'counter-value\', newValue)',
        tab: 1
    }, {
        text: '})',
        tab: 0
    }
]

const codePreload = [
    {
        text: '...',
        tab: 0
    }, {
        text: 'handleCounter: (callback) => {',
        tab: 0
    }, {
        text: 'return ipcRenderer.on(\'update-counter\', callback)',
        tab: 1
    }, {
        text: '})',
        tab: 0
    }, {
        text: '...',
        tab: 0
    }
]

const codeMain = [
    {
        text: '...',
        tab: 0
    }, {
        text: 'mainWindow.webContents.send(\'update-counter\', 1)',
        tab: 0
    }, {
        text: '...',
        tab: 0
    }, {
        text: 'ipcMain.on(\'counter-value\', (_event, value) => {console.log(value)})',
        tab: 0
    }, {
        text: '...',
        tab: 0
    }
]

const MessagesMainToRenderer: FC<MessagesMainToRendererProps> = props => {
    const [counter, setCounter] = useState(0)
    const counterRef = useRef(counter)

    useEffect(() => {
        window.electronAPI.handleCounter((event: IpcRendererEvent, value: number) => {
            const newValue = counterRef.current + value

            counterRef.current = newValue
            setCounter(newValue)

            event.sender.send('counter-value', newValue)
        })

        return () => {
            window.electronAPI.removeHandleCounter()
        }
    }, [])

    return (
        <div className={[props.className, classes.messagesMainToRenderer].join(' ')}>
            <SlideContainer>
                <Text>Из Main процесса также возможна отправка сообщений в Renderer процесс.</Text>
                <Text>Счетчик: {counter}</Text>
                <CodeBlock code={codeRenderer} filename={'renderer.js'} lang={'javascript'}/>
                <CodeBlock code={codePreload} filename={'preload.js'} lang={'javascript'}/>
                <CodeBlock code={codeMain} filename={'main.js'} lang={'javascript'}/>
            </SlideContainer>
        </div>
    );
};

export default MessagesMainToRenderer;