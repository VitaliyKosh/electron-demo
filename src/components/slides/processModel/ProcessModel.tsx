import React, {FC} from 'react';
import classes from './ProcessModel.module.css'
import { IPage } from '../../../types/Slide';
import Text from "../../UI/text/Text";
import SlideContainer from '../../UI/slideContainer/SlideContainer';
import Image from "../../UI/image/Image";

import chromeProcess from "./img/chrome-processes.png";

interface ProcessModelProps extends IPage {
    className?: string,
}

const ProcessModel: FC<ProcessModelProps> = props => {
    return (
        <div className={[props.className, classes.processModel].join(' ')}>
            <SlideContainer key={props.id}>
                <Text><b>Electron</b> наследует свою многопроцессорную архитектуру от Chromium, что делает его архитектурно очень похожим на современный веб-браузер.</Text>
                <Text>Создавая Electron разработчики основывались на модели Chrome, где каждая вкладка представляет собой отдельный процесс:</Text>
                <Image src={chromeProcess}/>
                <Text>2 типа процессов в Electron:</Text>
                <Text size='s'>&nbsp;&nbsp;1. Main process;<br/>&nbsp;&nbsp;2. Renderer process.</Text>
            </SlideContainer>
        </div>
    );
};

export default ProcessModel;