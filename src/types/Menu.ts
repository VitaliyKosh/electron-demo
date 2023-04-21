import { Slide } from "./Slide"

interface INewMenuItem {
    slide: Slide
}

export class MenuItem {
    id: string
    slide: Slide
    title: string
    level: number

    constructor (menuItem: INewMenuItem) {
        this.id = menuItem.slide.id
        this.slide = menuItem.slide
        this.title = menuItem.slide.title
        this.level = menuItem.slide.level
    }
}

interface INewMenu {
    
}

export class Menu {
    private items: MenuItem[] = []

    constructor () {

    }

    addItem (menuItem: INewMenuItem) {
        this.items.push(new MenuItem(menuItem))
    }

    getItems = () => this.items

    getNext = (active: MenuItem) => {
        const nextIndex = this.findIndex(active) + 1
        return this.items[nextIndex] || null
    }

    getPrevious = (active: MenuItem) => {
        const nextIndex = this.findIndex(active) - 1
        return this.items[nextIndex] || null
    }

    private findIndex (findItem: MenuItem) {
        return this.items.reduce((acc, item, i) => {
            if (item.id === findItem.id) {
                return i
            } else {
                return acc
            }
        }, -1)
    }
}