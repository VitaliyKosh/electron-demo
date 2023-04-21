import React, {FC} from 'react';
import classes from './Git.module.css'
import qr from '../../../img/pictures/qr.png'
import Text from "../../UI/text/Text";
import SlideContainer from '../../../components/UI/slideContainer/SlideContainer';
import { IPage } from '../../../types/Slide';
// import { shell } from 'electron';

interface GitProps extends IPage {
    className?: string,
    children?: React.ReactNode
}



const onClick = () => {
    window.electronAPI.openLink("https://github.com/VitaliyKosh/electron-demo/tree/main")
}

const Git: FC<GitProps> = props => {
    return (
        <div className={[props.className, classes.git].join(' ')}>
            <SlideContainer key={props.id}>
                <img className={classes.qr} src={qr}/>
                <Text className={classes.link}>
                    Посмотреть исходный код можно здесь: <a onClick={onClick}>Git Hub</a>
                </Text>
            </SlideContainer>
        </div>
    );
};

export default Git