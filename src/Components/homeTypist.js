/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/react";
import facepaint from "facepaint";
import React from 'react';
import Typist from 'react-typist';
import { useViewport } from './ViewportProvider';


function HomeTypist(props) {

    const { width, height } = useViewport();

    return (
        <Typist onTypingDone={props.onTypingDone} avgTypingDelay={40} stdTypingDelay={0} startDelay={props.startDelay} >
            <Typist.Delay ms={props.delay} />
            <span aria-label={props.copy} role='heading'>
                {props.copy.split("").map(function (char, index) {
                    return <span css={styles.animatedText(height)} aria-hidden="true" key={index}>{char}</span>;
                })}
            </span>
        </Typist>
    )
}

export default HomeTypist;

const breakpoints = [500, 1025, 1400];

const mq = facepaint([
    `@media(min-width: ${breakpoints.slice(0, 1)}px)`,
    `@media(min-width: ${breakpoints.slice(1, 2)}px)`,
    `@media(min-width: ${breakpoints.slice(2, 3)}px)`,
]);

const styles = {

    animatedText: (height) => css(
        mq({
            color: 'white',
            fontSize: [36, height < 700 ? 38 : 42, 42, 48],
            fontWeight: 'bold',
            transition: '0.05s ease-in-out',
            '&:hover': {
                color: ' #61DBFB',
            },
        }
        )),

}