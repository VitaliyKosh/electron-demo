import React, {FC, useEffect} from 'react';
import Text from "../../UI/text/Text";
import SlideContainer from '../../UI/slideContainer/SlideContainer';
import { IPage } from '../../../types/Slide';

interface NativeAPIProps extends IPage {
    className?: string,
}

const NativeAPI: FC<NativeAPIProps> = props => {
    return (
        <div className={[props.className].join(' ')}>
            <SlideContainer key={props.id}>
                <Text><b>Native API</b> расширяет возможности Electron для взаимодействия с операционной системой. Native API предоставляет различные модули, которые управляют встроенной функциональностью рабочего стола (меню, диалоговые окна, значки в трее...).</Text>
            </SlideContainer>
        </div>
    );
};

export default NativeAPI;