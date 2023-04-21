import React, {FC} from 'react';
import classes from './Architecture.module.css'
import SlideContainer from '../../../UI/slideContainer/SlideContainer';
import { IPage } from '../../../../types/Slide';
import Text from "../../../UI/text/Text";
import Image from "../../../UI/image/Image";

import NodeLogo from '../../../../img/logo/nodejs-logo-svgrepo-com.svg'

interface ArchitectureProps extends IPage {
    className?: string,
}

const Architecture: FC<ArchitectureProps> = props => {
    return (
        <div className={[props.className, classes.architecture].join(' ')}>
            <SlideContainer key={props.id}>
                <div className={[classes.osBlock, classes.block].join(' ')}>
                    <Text size='l'>Операционная система</Text>
                </div>
                <div className={classes.connections}>
                    <div className={classes.connectionBox}>
                        <div className={classes.connection}>
                        </div>
                        <Text className={classes.connectionText} size='s'>Native API (<code>dialog</code>, <code>Menu</code>, <code>Notification</code>...)</Text>
                    </div>
                </div>
                <div className={[classes.osBlock, classes.block].join(' ')}>
                    <Text size='l'>Main Process</Text>
                    <NodeLogo className={classes.nodeLogo}/>
                </div>
                <div className={classes.connections}>
                    <div className={classes.connectionBox}>
                        <div className={classes.connection}>
                        </div>
                        <Text className={classes.connectionText} size='s'>IPC (<code>ipcMain</code>, <code>ipcRenderer</code>)</Text>
                    </div>
                    <div className={classes.connectionBox}>
                        <div className={classes.connection}>
                        </div>
                        <Text className={classes.connectionText} size='s'>IPC</Text>
                    </div>
                </div>
                <div className={classes.blocks}>
                    <div className={[classes.osBlock, classes.block].join(' ')}>
                        <Text size='l'>Renderer Process</Text>
                    </div>
                    <div className={[classes.osBlock, classes.block].join(' ')}>
                        <Text size='l'>Renderer Process</Text>
                    </div>
                </div>
                <Text><b>Native API</b> расширяет возможности Electron для взаимодействия с операционной системой. Native API предоставляет различные модули, которые управляют встроенной функциональностью рабочего стола (меню, диалоговые окна, значки в трее...).</Text>
                {/* <Text>До 5 версии Electron позволял включить Node в процесс отрисовки <code>nodeIntegration: true</code>. Javascript из Renderer процесса мог управлять файлами. Однако это аналогично сайту, который имеет доступ к файловой системе.</Text> */}
                <Text><b>IPC</b> — Inter-process communication. При реализации IPC каждый процесс настраивает функции прослушивания, которые будут активироваться при получении сообщения через каналы <code>ipcMain</code> и <code>ipcRenderer</code>.</Text>
            </SlideContainer>
        </div>
    );
};

export default Architecture;