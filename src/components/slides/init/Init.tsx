import React, {FC} from 'react';
import classes from './Init.module.css'
import CodeBlock from '../../UI/codeBlock/CodeBlock';
import Text from "../../UI/text/Text";
import SlideContainer from '../../UI/slideContainer/SlideContainer';
import { IPage } from '../../../types/Slide';

interface InitProps extends IPage {
    className?: string,
}

const codeV = [
    {
        text: '$ node -v',
        tab: 0
    }, {
        text: 'v19.8.1',
        tab: 0
    }, {
        text: '$ npm -v',
        tab: 0
    }, {
        text: '9.5.1',
        tab: 0
    }
]

const codeInit = [
    {
        text: '$ npm init',
        tab: 0
    }
]

const codePackage = [
    {
        text: '{',
        tab: 0
    }, {
        text: '"name": "my-electron-app",',
        tab: 1
    }, {
        text: '"version": "1.0.0",',
        tab: 1
    }, {
        text: '"description": "Hello World!",',
        tab: 1
    }, {
        text: '"main": "main.js",',
        tab: 1
    }, {
        text: '"author": "Vitaly Koshelkov",',
        tab: 1
    }, {
        text: '"license": "MIT"',
        tab: 1
    }, {
        text: '}',
        tab: 0
    }
]

const codeElectron = [
    {
        text: '$ npm install --save-dev electron',
        tab: 0
    }
]

const codePackage2 = [
    {
        text: '{',
        tab: 0
    }, {
        text: '"scripts": {',
        tab: 1
    }, {
        text: '"start": "electron ."',
        tab: 2
    }, {
        text: '}',
        tab: 1
    }, {
        text: '}',
        tab: 0
    }
]

const Init: FC<InitProps> = props => {
    return (
        <div className={[props.className, classes.init].join(' ')}>
            <SlideContainer key={props.id}>
                <Text>Прежде всего необходимо наличие Node.js и npm:</Text>
                <CodeBlock code={codeV} filename={'Terminal'}/>
                <Text>Инициализируем npm package:</Text>
                <CodeBlock code={codeInit} filename={'Terminal'}/>
                <Text>Entry point приложения должен быть <code>main.js</code>:</Text>
                <CodeBlock code={codePackage} filename={'package.json'} lang={'json'}/>
                <Text>С помощью npm устанавливаем electron:</Text>
                <CodeBlock code={codeElectron} filename={'Terminal'}/>
                <Text>Скрипт для запуска будет выглядеть так:</Text>
                <CodeBlock code={codePackage2} filename={'package.json'} lang={'json'}/>
            </SlideContainer>
        </div>
    );
};

export default Init;