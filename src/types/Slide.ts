import { FC } from 'react';
import { v4 } from 'uuid';

export interface IPage {
    className?: string
    id?: string
}

export class Slide {
    id: string
    title: string
    page: FC<IPage>
    level: number

    constructor (title: string, page: FC, level: number) {
        this.id = v4()
        this.title = title
        this.page = page
        this.level = level
    }
}