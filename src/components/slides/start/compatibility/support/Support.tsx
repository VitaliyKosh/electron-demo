import React, {FC} from 'react';
import classes from './Support.module.css'

import ReactLogo from '../../../../../img/logo/React-icon.svg'
import VueLogo from '../../../../../img/logo/vuejs-original.svg'
import NextLogo from '../../../../../img/logo/nextjs-original.svg'
import TailwindLogo from '../../../../../img/logo/tailwindcss-plain.svg'
import BootstrapLogo from '../../../../../img/logo/bootstrap-original.svg'
import ThreeLogo from '../../../../../img/logo/threejs-original.svg'
import AngularLogo from '../../../../../img/logo/Angular_full_color_logo.svg'
import TypeScriptLogo from '../../../../../img/logo/Typescript_logo_2020.svg'
import WebpackLogo from '../../../../../img/logo/webpack-original.svg'
import SassLogo from '../../../../../img/logo/sass-original.svg'

interface SupportProps {
    className?: string,
    children?: React.ReactNode
}

const Support: FC<SupportProps> = props => {
    return (
        <div className={[props.className, classes.support].join(' ')}>
            <div className={classes.supportBox}>
                <div className={classes.avatar}><ReactLogo className={classes.avatarImg}/><div className={classes.title}>React</div></div>
                <div className={classes.avatar}><VueLogo className={classes.avatarImg} /><div className={classes.title}>Vue.js</div></div>
                <div className={classes.avatar}><NextLogo className={classes.avatarImg} /><div className={classes.title}>Next.js</div></div>
                <div className={classes.avatar}><TailwindLogo className={classes.avatarImg} /><div className={classes.title}>Tailwind CSS</div></div>
                <div className={classes.avatar}><BootstrapLogo className={classes.avatarImg} /><div className={classes.title}>Bootstrap</div></div>
                <div className={classes.avatar}><ThreeLogo className={classes.avatarImg} /><div className={classes.title}>Three.js</div></div>
                <div className={classes.avatar}><AngularLogo className={classes.avatarImg} /><div className={classes.title}>Angular</div></div>
                <div className={classes.avatar}><TypeScriptLogo className={classes.avatarImg} /><div className={classes.title}>TypeScript</div></div>
                <div className={classes.avatar}><WebpackLogo className={classes.avatarImg} /><div className={classes.title}>webpack</div></div>
                <div className={classes.avatar}><SassLogo className={classes.avatarImg} /><div className={classes.title}>Sass</div></div>
            </div>
        </div>
    );
};

export default Support;