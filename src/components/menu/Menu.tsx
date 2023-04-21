import {FC, useEffect, useRef, useState} from 'react';
import classes from './Menu.module.css'
import { Menu as MenuClass, MenuItem as MenuItemClass } from "../../types/Menu";
import { Slide } from '../../types/Slide';
import MenuItem from "./menuItem/MenuItem";

interface MenuProps {
    className?: string
    menu: MenuClass
    activeSlide: Slide | null
    setActiveSlide: (slide: Slide) => void
}

const Menu: FC<MenuProps> = props => {
    const [activeItem, setActiveItem] = useState(null as unknown as MenuItemClass)

    const ref = useRef<HTMLDivElement>(null)

    const scrollMenu = () => {
        const activeElement = document.getElementById('active-menu-item')

        if (ref.current && activeElement && activeElement.offsetTop + activeElement.clientHeight > ref.current.scrollTop + ref.current.clientHeight) {
            ref.current.scroll(0, activeElement.offsetTop - ref.current.clientHeight + activeElement.clientHeight)
        } else if (ref.current && activeElement && activeElement.offsetTop - activeElement.clientHeight < ref.current.scrollTop) {
            activeElement.scrollIntoView()
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', keyDownHandler)

        scrollMenu()

        return () => {
            document.removeEventListener('keydown', keyDownHandler)
        }
    }, [activeItem])

    function keyDownHandler (this: MenuItemClass, e: KeyboardEvent) {
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault()
                setActiveSlide(props.menu.getNext(activeItem))
                break;
            case 'ArrowUp':
                e.preventDefault()
                setActiveSlide(props.menu.getPrevious(activeItem))
                break;
            case 'ArrowRight':
                e.preventDefault()
                setActiveSlide(props.menu.getNext(activeItem))
                break;
            case 'ArrowLeft':
                e.preventDefault()
                setActiveSlide(props.menu.getPrevious(activeItem))
                break;
            default:
                break;
        }
    }

    function setActiveSlide (item: MenuItemClass | null) {
        if (!item) return
        props.setActiveSlide(item.slide)
        setActiveItem(item)        
    }

    return (
        <div
            className={[props.className, classes.menu].join(' ')}
            ref={ref} 
        >
            {props.menu.getItems().map(item => {
                const active = activeItem?.id === item.slide.id
                return (
                    <MenuItem
                        key={item.id}
                        id={active ? 'active-menu-item' : undefined}
                        onClick={() => setActiveSlide(item)}
                        item={item}
                        active={active}
                    />
                )
            })}
        </div>
    );
};

export default Menu;