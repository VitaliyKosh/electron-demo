import React, {FC, useEffect, useRef} from 'react';
import classes from './CodeBlock.module.css'
import hljs from '../../../lib/prism/highlight.min.js';

interface CodeBlockProps {
    className?: string
    filename?: string
    code: CodeLine[]
    lang?: 'javascript' | 'xml' | 'json'
}

export interface CodeLine {
    text: string,
    tab: number
}

const CodeBlock: FC<CodeBlockProps> = props => {
    return (
        <div className={[props.className, classes.codeBlock].join(' ')}>
            <div className={classes.filename}>
                {props.filename}
            </div>
            <div className={classes.borderLine} />
            <div className={classes.code}>
                {props.code.map((line, i) => {
                    // @ts-ignore
                    const html = hljs.highlight(props.lang || 'javascript', line.text).value
                    return (
                        <div
                            key={i}
                            style={{marginLeft: line.tab * 50 + 'px'}}
                            className={classes.line}
                            dangerouslySetInnerHTML={{__html: html}}
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default CodeBlock;