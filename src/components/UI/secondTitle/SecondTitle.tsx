import React, {FC} from 'react';
import classes from './SecondTitle.module.css'

interface SecondTitleProps {
    className?: string,
    children?: React.ReactNode
}

const SecondTitle: FC<SecondTitleProps> = props => {
    return (
        <div className={[props.className, classes.secondTitle].join(' ')}>
            {props.children}
        </div>
    );
};

export default SecondTitle;