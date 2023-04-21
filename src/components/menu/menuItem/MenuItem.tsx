import React, {FC} from 'react';
import classes from './MenuItem.module.css'
import { MenuItem as MenuItemClass } from "../../../types/Menu";

interface MenuItemProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes {
    className?: string
    item: MenuItemClass
    active: boolean
    id: string
}

const MenuItem: FC<MenuItemProps> = props => {
    return (
        <button
            className={[
                    props.className,
                    classes.menuItem,
                    props.active ? classes.active : undefined
            ].join(' ')}
            onClick={props.onClick}
            style={{marginLeft: props.item.level * 20 + 'px'}}
            id={props.id}
        >
            {props.item.title}
        </button>
    );
};

export default MenuItem;