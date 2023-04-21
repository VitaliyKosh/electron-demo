import React, {FC} from 'react';
import classes from './Applications.module.css'
import SlideContainer from '../../../UI/slideContainer/SlideContainer';
import Text from "../../../UI/text/Text";
import { IPage } from '../../../../types/Slide';

import OnePasswordLogo from '../../../../img/logo/1password.svg';
import DiscordLogo from '../../../../img/logo/discord.svg';
import DropboxLogo from '../../../../img/logo/dropbox.svg';
import FigmaLogo from '../../../../img/logo/figma.svg';
import GithubDesktopLogo from '../../../../img/logo/github-desktop.svg';
import MongodbLogo from '../../../../img/logo/mongodb.svg';
import NotionLogo from '../../../../img/logo/notion.svg';
import PostmanLogo from '../../../../img/logo/postman.svg';
import SkypeLogo from '../../../../img/logo/skype.svg';
import TeamsLogo from '../../../../img/logo/teams.svg';
import TwitchLogo from '../../../../img/logo/twitch.svg';
import VScodeLogo from '../../../../img/logo/vscode.svg';
import WordpressLogo from '../../../../img/logo/wordpress.svg';

interface ApplicationsProps extends IPage {
    className?: string,
    children?: React.ReactNode
}

const Applications: FC<ApplicationsProps> = props => {
    return (
        <div className={[props.className, classes.applications].join(' ')}>
            <SlideContainer className={classes.slideContainer} key={props.id}>
                <div className={classes.supportBox}>
                    <div className={classes.avatar}><SkypeLogo className={classes.avatarImg}/><div className={classes.title}>Skype</div></div>
                    <div className={classes.avatar}><DiscordLogo className={classes.avatarImg} /><div className={classes.title}>Discord</div></div>
                    <div className={classes.avatar}><DropboxLogo className={classes.avatarImg} /><div className={classes.title}>Dropbox</div></div>
                    <div className={classes.avatar}><FigmaLogo className={classes.avatarImg}/><div className={classes.title}>Figma</div></div>
                    <div className={classes.avatar}><GithubDesktopLogo className={classes.avatarImg} /><div className={classes.title}>GitHub</div></div>
                    <div className={classes.avatar}><MongodbLogo className={classes.avatarImg} /><div className={classes.title}>MongoDB</div></div>
                    <div className={classes.avatar}><NotionLogo className={classes.avatarImg}/><div className={classes.title}>Notion</div></div>
                    <div className={classes.avatar}><PostmanLogo className={classes.avatarImg} /><div className={classes.title}>Postman</div></div>
                    <div className={classes.avatar}><TeamsLogo className={classes.avatarImg}/><div className={classes.title}>Microsoft Teams</div></div>
                    <div className={classes.avatar}><TwitchLogo className={classes.avatarImg} /><div className={classes.title}>Twitch</div></div>
                    <div className={classes.avatar}><VScodeLogo className={classes.avatarImg} /><div className={classes.title}>VS Code</div></div>
                    <div className={classes.avatar}><WordpressLogo className={classes.avatarImg} /><div className={classes.title}>Wordpress Desktop</div></div>
                </div>
            </SlideContainer>
        </div>
    );
};

export default Applications;