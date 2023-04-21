import React, {FC} from 'react';
import classes from './RendererProcess.module.css'
import SlideContainer from '../../../UI/slideContainer/SlideContainer';
import { IPage } from '../../../../types/Slide';
import Text from "../../../UI/text/Text";
import Image from "../../../UI/image/Image";

interface RendererProcessProps extends IPage  {
    className?: string,
}

const RendererProcess: FC<RendererProcessProps> = props => {
    return (
        <div className={[props.className, classes.rendererProcess].join(' ')}>
            <SlideContainer key={props.id}>
                <Text>Каждое приложение Electron запускает отдельный Renderer process для каждого открытого окна браузера (каждое новое окно аналогично вкладке в Chrome).</Text>
                <Text>Renderer process отвечает за рендеринг веб-контента. Код, выполняемый в процессах рендеринга, должен вести себя в соответствии с веб-стандартами как на обычной веб-странице.</Text>
                <Text>Renderer process не имеет прямого доступа к require или другим API Node.js. Для этого существует IPC.</Text>
            </SlideContainer>
        </div>
    );
};

export default RendererProcess;