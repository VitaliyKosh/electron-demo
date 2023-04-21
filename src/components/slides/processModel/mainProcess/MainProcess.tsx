import React, {FC} from 'react';
import classes from './MainProcess.module.css'
import SlideContainer from '../../../UI/slideContainer/SlideContainer';
import { IPage } from '../../../../types/Slide';
import Text from "../../../UI/text/Text";
import Image from "../../../UI/image/Image";
import CodeBlock, { CodeLine } from '../../../UI/codeBlock/CodeBlock';

interface MainProcessProps extends IPage {
    className?: string,
}

const code: CodeLine[] = [
    {
        text: '// пример обработки события закрытия всех окон',
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
    }
]

const MainProcess: FC<MainProcessProps> = props => {
    return (
        <div className={[props.className, classes.mainProcess].join(' ')}>
            <SlideContainer key={props.id}>
                <Text>Каждое приложение Electron имеет один Main процесс, который действует как точка входа приложение.</Text>
                <Text>Main процесс выполняется в Node.js и имеет возможность использовать все API-интерфейсы Node.js (<code>os</code>, <code>path</code>, <code>fs</code>...).</Text>
                <Text>Основная цель Main процесса — создавать окна приложений и управлять ими с помощью модуля <code>BrowserWindow</code>.</Text>
                <Text>Каждый экземпляр класса <code>BrowserWindow</code> создает окно приложения, которое загружает веб-страницу в отдельном Renderer процессе. Взаимодействовать с веб-контентом из Main процесса возможно с помощью объекта <code>BrowserWindow.webContents</code>.</Text>
                <Text>Поскольку модуль <code>BrowserWindow</code> является отправителем событий, в Main процесс возможно добавить обработчики событий этого окна (например, сворачивание или максимизация вашего окна).</Text>
                <Text>Когда экземпляр <code>BrowserWindow</code> уничтожается, его соответствующий Renderer процесс также завершается.</Text>
                <CodeBlock code={code} filename='main.js' lang={'javascript'}/>
            </SlideContainer>
        </div>
    );
};

export default MainProcess;