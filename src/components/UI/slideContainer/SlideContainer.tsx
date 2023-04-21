import React, {FC, useEffect, useRef, useState} from 'react';
import classes from './SlideContainer.module.css'

interface SlideContainerProps {
    className?: string,
    children?: React.ReactNode[] | React.ReactNode
}

const SlideContainer: FC<SlideContainerProps> = props => {
    const [animated, setAnimated] = useState(false)

    const ref = useRef<HTMLDivElement>(null);

    const setAnimation = (element: Element) => {
        if (!element) return 

        element.classList.add(classes.animation)
        element.classList.remove(classes.beforeAnimation)
        setTimeout(() => {
            element.classList.remove(classes.animation)
        }, 1000);

        setTimeout(() => {
            setAnimation(element.nextElementSibling)
        }, 200);
    }

    useEffect(() => {
        if (!animated) {
            setAnimated(true)
            let element = ref.current.firstElementChild
    
            for (let i = 0; i < ref.current.childElementCount; i++) {
                element.classList.add(classes.beforeAnimation)
                element = element.nextElementSibling
            }
    
            element = ref.current.firstElementChild
    
            setAnimation(element)
        }
    }, [props.children])

    return (
        <div
            className={[props.className, classes.slideContainer].join(' ')}
            ref={ref}
        >
            {props.children}
        </div>
    );
};

export default SlideContainer;