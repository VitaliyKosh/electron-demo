import React, {FC} from 'react';
import classes from './IndexFile.module.css'
import CodeBlock from '../../../UI/codeBlock/CodeBlock';
import Text from "../../../UI/text/Text";
import SlideContainer from '../../../UI/slideContainer/SlideContainer';
import { IPage } from '../../../../types/Slide';

interface IndexFileProps extends IPage {
    className?: string,
}

const IndexFile: FC<IndexFileProps> = props => {
    const code = [
        {
            text: '<!DOCTYPE html>',
            tab: 0
        }, {
            text: '<html>',
            tab: 0
        }, {
            text: '<head>',
            tab: 1
        }, {
            text: '<meta charset="UTF-8" />',
            tab: 2
        }, {
            text: '<title>Hello World!</title>',
            tab: 2
        }, {
            text: '</head>',
            tab: 1
        }, {
            text: '<body>',
            tab: 1
        }, {
            text: '<div id="root"></div>',
            tab: 2
        }, {
            text: '</body>',
            tab: 1
        }, {
            text: '<script src="./renderer.js"></script>',
            tab: 1
        }, {
            text: '</html>',
            tab: 0
        }
    ]

    return (
        <div className={[props.className, classes.indexFile].join(' ')}>
            <SlideContainer key={props.id}>
                <Text>Создаем index.html:</Text>
                <CodeBlock code={code} filename={'index.html'} lang={'xml'}/>
            </SlideContainer>
        </div>
    );
};

export default IndexFile;