import React, {FC} from 'react';
import classes from './Title.module.css'

interface TitleProps {
    className?: string,
    children?: React.ReactNode
}

const Title: FC<TitleProps> = props => {
    return (
        <div className={[props.className, classes.title].join(' ')}>
            {props.children}
        </div>
    );
};

export default Title;