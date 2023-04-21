import React, {FC} from 'react';
import classes from './Image.module.css'

interface ImageProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, React.AriaAttributes {
    className?: string,
}

const Image: FC<ImageProps> = props => {
    return (
        <img
            className={[props.className, classes.image].join(' ')}
            src={props.src}
        />
    )
}

export default Image;