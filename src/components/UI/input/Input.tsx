import React, {FC} from 'react';
import classes from './Input.module.css'

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, React.AriaAttributes {
    className?: string,
    children?: React.ReactNode
}

const Input: FC<InputProps> = props => {
    return (
        <input className={[props.className, classes.input].join(' ')} {...props}>
            {props.children}
        </input>
    );
};

export default Input;