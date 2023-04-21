import React, {FC, useEffect, useRef, useState} from 'react';
import classes from './SlideComponent.module.css'
import { IPage, Slide as SlideClass } from "../../types/Slide";
import Title from '../UI/title/Title';

interface SlideComponentProps {
    className?: string,
    slide: SlideClass
}

const SlideComponent: FC<SlideComponentProps> = props => {
    const [slideClass, setSlideClass] = useState(null as SlideClass)

    const [slideId, setSlideId] = useState('')
    const [title, setTitle] = useState('')
    const [changing, setChanging] = useState(false)

    const ref = useRef<HTMLDivElement>(null);

    let stopChanging = false

    useEffect(() => {
        if (changing) {
            stopChanging = true   
        } else {
            setChanging(true)  
            setTimeout(() => {
                if (stopChanging) {
                    stopChanging = false
                } else {
                    setSlide()
                }
            }, 500);
        }
    }, [props.slide])

    const setSlide = () => {
        ref.current.scrollTo(0, 0);
        setTitle(props.slide?.title)
        setSlideId(props.slide?.id)
        setSlideClass(props.slide)
        setTimeout(() => {
            setChanging(false)
        }, 500);
    }
    
    useEffect(() => {
        if (changing === false && props.slide?.id !== slideId) { 
            setSlide()
        }
    }, [changing])
    
    return (
        <div ref={ref} className={[props.className, classes.slideComponent].join(' ')}>
            <div
                className={[classes.content, changing ? classes.changing : undefined].join(' ')}
            >
                <Title className={classes.title}>{title}</Title>
                {slideClass &&
                    <slideClass.page
                        className={classes.slide}
                        id={slideClass.id}
                        key={slideClass.id}
                    />
                }
            </div>
        </div>
    );
};

export default SlideComponent;