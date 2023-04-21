import React, {FC} from 'react';
import classes from './Support.module.css'
import Text from "../../../UI/text/Text";

import WindowsLogo from '../../../../img/logo/microsoft-150-svgrepo-com.svg'
import LinuxLogo from '../../../../img/logo/Linux-Logo.wine.svg'
import AppleLogo from '../../../../img/logo/apple-173-svgrepo-com.svg'
import SlideContainer from '../../../UI/slideContainer/SlideContainer';
import { IPage } from '../../../../types/Slide';

interface SupportProps extends IPage {
    className?: string,
}

const Support: FC<SupportProps> = props => {
    return (
        <div className={[props.className, classes.support].join(' ')}>
            <SlideContainer key={props.id}>
                <div>
                    <div className={classes.supportBox}>
                        <div className={classes.avatar}><WindowsLogo className={classes.avatarImg}/><div className={classes.title}>Windows</div></div>
                        <div className={classes.avatar}><LinuxLogo className={classes.avatarImg} /><div className={classes.title}>Linux</div></div>
                        <div className={classes.avatar}><AppleLogo className={classes.avatarImg} /><div className={classes.title}>Apple</div></div>
                    </div>
                </div>
                <Text>Electron приложения могут работать на различных платформах, среди них — Windows, MacOS и Linux.</Text>
            </SlideContainer>
        </div>
    );
};

export default Support;