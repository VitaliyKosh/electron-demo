import React, {FC, useEffect, useRef, useState} from 'react';
import classes from './App.module.css'
import Menu from './components/menu/Menu';
import { Menu as MenuClass } from "./types/Menu";
import { slides } from './router';
import SlideComponent from './components/slideComponent/SlideComponent';
import { Slide } from './types/Slide';

const initMenu = () => {
    const menu = new MenuClass()

    slides.forEach(slide => {
        menu.addItem({slide})
    })

    return menu
}

const menu = initMenu()

const App: FC = () => {
    const [activeSlide, setActiveSlide] = useState(null as null | Slide)
    const [theme, setTheme] = useState('light')

    const getTheme = async () => {
        const theme = await window.electronAPI.getTheme()
        setTheme(theme)
    }

    useEffect(() => {
        getTheme()
        
        window.electronAPI.theme((event, key) => {
            switch (key) {
                case 'dark':
                    setTheme('dark'); break; 
                default:
                    setTheme('light'); break;
            }
        })

        return () => {
            window.electronAPI.removeTheme()
        }
    }, [])

    return (
        <div className={['app', classes.app, theme].join(' ')}>
            <Menu menu={menu} activeSlide={activeSlide} setActiveSlide={setActiveSlide}/>
            <SlideComponent slide={activeSlide}/>
        </div>
    );
};

export default App;