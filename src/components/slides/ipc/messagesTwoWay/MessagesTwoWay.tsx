import React, {FC, useEffect, useState} from 'react';
import classes from './MessagesTwoWay.module.css'
import CodeBlock from '../../../UI/codeBlock/CodeBlock';
import Text from "../../../UI/text/Text";
import SlideContainer from '../../../UI/slideContainer/SlideContainer';
import { IPage } from '../../../../types/Slide';
import Button from '../../../UI/button/Button';
import Input from '../../../UI/input/Input';

interface MessagesTwoWayProps extends IPage {
    className?: string,
    children?: React.ReactNode
}

const codeRenderer = [
    {
        text: 'const sendMessage = async () => {',
        tab: 0
    }, {
        text: 'const files = await window.electronAPI.loadFiles()',
        tab: 1
    }, {
        text: '}',
        tab: 0
    }
]

const codePreload = [
    {
        text: '...',
        tab: 0
    }, {
        text: 'loadFiles: () => ipcRenderer.invoke(\'dialog:openFile\')',
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
        text: 'ipcMain.handle(\'dialog:openFile\', () => handleOpenFile(props.browserWindow))',
        tab: 0
    }, {
        text: '...',
        tab: 0
    }
]

const MessagesTwoWay: FC<MessagesTwoWayProps> = props => {
    const [files, setFiles] = useState('Открыть файл')

    const sendMessage = async () => {
        const files = await window.electronAPI.loadFiles()
        setFiles(files)
    }

    return (
        <div className={[props.className, classes.messagesTwoWay].join(' ')}>
            <SlideContainer>
                <Text>Рассмотрим двустороннее взаимодействие между Main и Renderer процессами.</Text>
                <Button onClick={sendMessage}>{files || 'undefined'}</Button>
                <CodeBlock code={codeRenderer} filename={'renderer.js'} lang={'javascript'}/>
                <CodeBlock code={codePreload} filename={'preload.js'} lang={'javascript'}/>
                <CodeBlock code={codeMain} filename={'main.js'} lang={'javascript'}/>
            </SlideContainer>
        </div>
    );
};

export default MessagesTwoWay;