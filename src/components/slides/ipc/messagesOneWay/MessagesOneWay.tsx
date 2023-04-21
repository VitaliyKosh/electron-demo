import React, {FC, useEffect, useState} from 'react';
import classes from './MessagesOneWay.module.css'
import CodeBlock from '../../../UI/codeBlock/CodeBlock';
import Text from "../../../UI/text/Text";
import SlideContainer from '../../../UI/slideContainer/SlideContainer';
import { IPage } from '../../../../types/Slide';
import Button from '../../../UI/button/Button';
import Input from '../../../UI/input/Input';

interface MessagesOneWayProps extends IPage {
    className?: string,
    children?: React.ReactNode
}

const codeRenderer = [
    {
        text: 'const sendMessage = () => {',
        tab: 0
    }, {
        text: 'window.electronAPI.setTitle(titleInput)',
        tab: 1
    }, {
        text: '}',
        tab: 0
    }
]

const codePreload = [
    {
        text: 'const { contextBridge, ipcRenderer } = require(\'electron\')',
        tab: 0
    }, {
        text: '',
        tab: 0
    }, {
        text: 'export interface IElectronAPI {',
        tab: 0
    }, {
        text: 'setTitle: (title: string) => void,',
        tab: 1
    }, {
        text: '}',
        tab: 0
    }, {
        text: '',
        tab: 0
    }, {
        text: 'declare global {',
        tab: 0
    }, {
        text: 'interface Window {',
        tab: 1
    }, {
        text: 'electronAPI: IElectronAPI',
        tab: 2
    }, {
        text: '}',
        tab: 1
    }, {
        text: '}',
        tab: 0
    }, {
        text: '',
        tab: 0
    }, {
        text: 'contextBridge.exposeInMainWorld(\'electronAPI\', {   ',
        tab: 0
    }, {
        text: 'setTitle: (title: string) => ipcRenderer.send(\'set-title\', title)',
        tab: 1
    }, {
        text: '})',
        tab: 0
    }
]

const codeMain = [
    {
        text: 'import { ipcMain } from "electron"',
        tab: 0
    }, {
        text: '',
        tab: 0
    }, {
        text: 'ipcMain.on(\'set-title\', handleSetTitle)',
        tab: 0
    }
]

const MessagesOneWay: FC<MessagesOneWayProps> = props => {
    const [titleInput, setTitleInput] = useState('')

    const sendMessage = () => {
        window.electronAPI.setTitle(titleInput)
    }

    return (
        <div className={[props.className, classes.messagesOneWay].join(' ')}>
            <SlideContainer>
                <Text>Рассмотрим взаимодействие между Main и Renderer процессами на примере установки заголовка окна из значения в <code>input</code>.</Text>
                <Input value={titleInput} onChange={(e) => setTitleInput(e.target.value)} placeholder='Введите значение'/>
                <Button onClick={sendMessage}>Изменить заголовок окна</Button>
                <Text>Такой функционал возможен благодаря рассмотренным ранее <code>ipcMain</code> и <code>ipcRenderer</code>.</Text>
                <Text>В Renderer процессе создаем обработчик события для нажатия на кнопку и в качестве аргумента передаем следующую функцию:</Text>
                <CodeBlock code={codeRenderer} filename={'renderer.js'} lang={'javascript'}/>
                <Text>Функция обращается к свойству <code>electronAPI</code> объекта <code>window</code> и вызываем у него метод <code>setTitle</code>.</Text>
                <Text>Изначально <code>window</code> не содержит свойства <code>electronAPI</code>. Оно объявляется и регистрируется в файле preload.js.</Text>
                <Text>preload.js обеспечивает безопасную связь между <code>BrowserWindow</code> и Main процессом и содержит только список доступных каналов:</Text>
                <CodeBlock code={codePreload} filename={'preload.js'} lang={'javascript'}/>
                <Text>В Main процессе с помощью <code>ipcMain</code> мы подписываемся на событие <code>'set-title'</code></Text>
                <CodeBlock code={codeMain} filename={'main.js'} lang={'javascript'}/>
            </SlideContainer>
        </div>
    );
};

export default MessagesOneWay;