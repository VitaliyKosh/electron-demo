import React, {FC} from 'react';
import classes from './Button.module.css'

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes {
    className?: string,
    children?: React.ReactNode
}

const Button: FC<ButtonProps> = props => {
    return (
        <button className={[props.className, classes.button].join(' ')} {...props}>
            {props.children}
        </button>
    );
};

export default Button;