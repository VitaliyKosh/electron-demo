import React, {FC} from 'react';
import classes from './Compatibility.module.css'
import SlideContainer from '../../../../components/UI/slideContainer/SlideContainer';
import Support from './support/Support';
import Text from "../../../UI/text/Text";
import { IPage } from '../../../../types/Slide';

interface CompatibilityProps extends IPage {
    className?: string,
    children?: React.ReactNode
}

const Compatibility: FC<CompatibilityProps> = props => {
    return (
        <div className={[props.className, classes.compatibility].join(' ')}>
            <SlideContainer key={props.id}>
                <Support className={classes.support}/>
                {/* <Text>Такие приложения могут работать на различных платформах. Среди них — Windows, Mac и Linux.</Text> */}
                <Text>Electron поддерживает интеграцию любых web-библиотек и фреймворков.</Text>
            </SlideContainer>
        </div>
    );
};

export default Compatibility;