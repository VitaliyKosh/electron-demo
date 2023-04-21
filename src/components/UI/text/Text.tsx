import React, {FC} from 'react';
import classes from './Text.module.css'

interface TextProps {
    className?: string,
    children?: React.ReactNode
    size?: 's' | 'm' | 'l'
    style?: React.CSSProperties
}

const Text: FC<TextProps> = props => {

    let fontSizeClass: string

    switch (props.size) {
        case 's':
            fontSizeClass = classes.s
            break;
        case 'l':
            fontSizeClass = classes.l
            break;
        default:
            fontSizeClass = classes.m
            break;
    }

    return (
        <div
            className={[
                props.className,
                classes.text,
                fontSizeClass
            ].join(' ')}
            style={props.style}
        >
            {props.children}
        </div>
    );
};

export default Text;