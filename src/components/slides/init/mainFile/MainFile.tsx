import React, {FC} from 'react';
import classes from './MainFile.module.css'
import CodeBlock from '../../../UI/codeBlock/CodeBlock';
import Text from "../../../UI/text/Text";
import SlideContainer from '../../../UI/slideContainer/SlideContainer';
import { IPage } from '../../../../types/Slide';

interface MainFileProps extends IPage {
    className?: string,
}

const MainFile: FC<MainFileProps> = props => {
    const code = [
        {
            text: 'const { app, BrowserWindow } = require(\'electron\')',
            tab: 0
        }, {
            text: '',
            tab: 0
        }, {
            text: 'const createWindow = () => {',
            tab: 0
        }, {
            text: 'const win = new BrowserWindow({',
            tab: 1
        }, {
            text: 'width: 800,',
            tab: 2
        }, {
            text: 'height: 600',
            tab: 2
        }, {
            text: '})',
            tab: 1
        }, {
            text: '',
            tab: 0
        }, {
            text: 'win.loadFile(\'index.html\')',
            tab: 1
        }, {
            text: '}',
            tab: 0
        }, {
            text: '',
            tab: 0
        }, {
            text: 'app.on(\'window-all-closed\', () => {',
            tab: 0
        }, {
            text: 'if (process.platform !== \'darwin\') {',
            tab: 1
        }, {
            text: 'app.quit()',
            tab: 2
        }, {
            text: '}',
            tab: 1
        }, {
            text: '})',
            tab: 0
        }, {
            text: '',
            tab: 0
        }, {
            text: 'app.on(\'ready\', createWindow)',
            tab: 0
        }, {
            text: '',
            tab: 0
        }, {
            text: 'app.on(\'activate\', () => {',
            tab: 0
        }, {
            text: 'if (BrowserWindow.getAllWindows().length === 0) createWindow()',
            tab: 1
        }, {
            text: '})',
            tab: 0
        }
    ]

    return (
        <div className={[props.className, classes.mainFile].join(' ')}>
            <SlideContainer key={props.id}>
                <Text>Точка входа Electron приложение:</Text>
                <CodeBlock code={code} filename={'main.js'} lang={'javascript'}/>
            </SlideContainer>
        </div>
    );
};

export default MainFile;