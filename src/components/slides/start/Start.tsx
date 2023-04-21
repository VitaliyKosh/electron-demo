import React, {FC} from 'react';
import classes from './Start.module.css'
import ElectronLogo from '../../UI/electronLogo/ElectronLogo';
import Text from "../../UI/text/Text";
import SlideContainer from '../../UI/slideContainer/SlideContainer';
import { IPage } from '../../../types/Slide';

interface StartProps extends IPage {
    className?: string,
    children?: React.ReactNode
}

const Start: FC<StartProps> = props => {
    return (
        <div className={[props.className, classes.start].join(' ')}>
            <SlideContainer key={props.id}>
                <ElectronLogo className={classes.logo}/>
                <Text><b>Electron</b> — это фреймворк для разработки настольных приложений с использованием HTML, CSS и JavaScript.</Text>
                <Text>Позволяет разрабатывать нативные графические приложения для настольных операционных систем с помощью веб-технологий.</Text>
                <Text>Комбинирует возможности Node.js для работы с back-end и браузера Chromium.</Text>
                <Text>Electron разработан GitHub.</Text>
            </SlideContainer>
        </div>
    );
};

export default Start;