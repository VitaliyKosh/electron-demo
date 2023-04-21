import React, {FC} from 'react';
import classes from './IPC.module.css'
import CodeBlock from '../../UI/codeBlock/CodeBlock';
import Text from "../../UI/text/Text";
import SlideContainer from '../../UI/slideContainer/SlideContainer';
import { IPage } from '../../../types/Slide';

interface IPCProps extends IPage {
    className?: string,
}

const IPC: FC<IPCProps> = props => {
    return (
        <div className={[props.className, classes.ipc].join(' ')}>
            <SlideContainer key={props.id}>
                <Text>Межпроцессное взаимодействие (IPC) является ключевой частью создания Electron приложений. Поскольку в модели процессов Electron у основного процесса и процесса визуализации разные обязанности, IPC - это единственный способ выполнять многие общие задачи, такие как вызов Native API из пользовательского интерфейса или запуск изменений в веб-контенте из элементов OS.</Text>
            </SlideContainer>
        </div>
    );
};

export default IPC;