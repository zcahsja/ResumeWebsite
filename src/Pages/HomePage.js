/** @jsxRuntime classic */
/** @jsx jsx */
import Sky from 'react-sky';
import logo from '../Images/logo.svg';
import { css, jsx, keyframes } from "@emotion/react";
import facepaint from "facepaint";
import Contact from './Contact';
import MediaQuery from 'react-responsive';
import React, { useState } from 'react'
import HomeTypist from '../Components/homeTypist'
import { motion } from 'framer-motion'
import { useViewport } from '../Components/ViewportProvider'



function HomePage() {

    const { width, height } = useViewport();
    const [showButton, setShowButton] = useState(false)

    const pageVariants = {
        in: {
            opacity: 1,
            y: 0,
        },
        out: {
            opacity: 0,
            y: "-100vh"
        }
    }

    function bookeyLink() {
        window.open('https://bookey.org.uk');
    }


    return (
        <motion.div initial='out' animate='in' exit='out' variants={pageVariants}>
            <React.Fragment>
                <MediaQuery minWidth={1025}>

                    <div css={styles.homeBackground(height)}>
                        <Sky images={{ 0: logo }} how={100} time={5} size={'70px'} />
                        <div css={styles.homeContentDiv}>
                            <div css={styles.homeNameDiv}>
                                <HomeTypist copy="Sajad Jabarivasal" delay={0} startDelay={200} />
                            </div>

                            <div css={styles.homeJobDiv}>
                                <HomeTypist copy="Developer" delay={1200} onTypingDone={() => setShowButton(true)} />
                            </div>
                            <div css={styles.homeDescriptionDiv(showButton)}>
                                <p css={styles.homeDescription(height)}>I'm a self taught programmer with an interest in modern technologies. My recent work includes developing the website for Bookey - a social media app to meet others through book swaps!</p>
                                <div css={styles.bookeyButtonDiv(showButton)}>
                                    <div onClick={() => bookeyLink()} css={styles.bookeyButton}>
                                        <p css={styles.bookeyText}>View Bookey</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </MediaQuery>
                <MediaQuery maxWidth={1025}>
                    <div css={styles.homeBackgroundPhone(height)}>
                        <Sky images={{ 0: logo }} how={30} time={5} size={'70px'} />
                        <div css={styles.homeContentDivPhone}>
                            <div css={styles.homeNameDivPhone}>
                                <HomeTypist copy="Sajad Jabarivasal" delay={0} />
                            </div>
                            <div css={styles.homeJobDivPhone}>
                                <HomeTypist copy="Developer" delay={1000} onTypingDone={() => setShowButton(true)} />
                            </div>
                            <div css={styles.homeDescriptionDivPhone(showButton)}>
                                <p css={styles.homeDescriptionPhone(height)}>I'm a self taught programmer with an interest in modern technologies. My recent work includes developing the website for Bookey - a social media app to meet others through book swaps!</p>
                            </div>
                            <div css={styles.bookeyButtonDivPhone(showButton)}>
                                <div onClick={() => bookeyLink()} css={styles.bookeyButtonPhone(height)}>
                                    <p css={styles.bookeyTextPhone(height)}>View Bookey</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </MediaQuery>
            </React.Fragment>
        </motion.div>


    );
}

export default HomePage;


const breakpoints = [500, 1025, 1400];

const mq = facepaint([
    `@media(min-width: ${breakpoints.slice(0, 1)}px)`,
    `@media(min-width: ${breakpoints.slice(1, 2)}px)`,
    `@media(min-width: ${breakpoints.slice(2, 3)}px)`,
]);

const styles = {
    topDiv: (height, width) => css(
        mq({
            display: 'flex',
            height: height,
            width: width,
            background: 'black',
            overflow: 'scroll'

        })
    ),
    homeBackground: (height) => css(
        mq({
            display: 'flex',
            width: '100vw',
            height: height - 70,
            position: 'absolute',
            top: 70,
            background: 'black',
            flexDirection: 'column',
            justifyContent: 'center',
            zIndex: 1,
            overflow: 'scroll',

        })
    ),
    homeContentDiv: css(
        mq({
            display: 'flex',
            position: 'absolute',
            left: '5%',
            top: '17%',
            flexDirection: 'column',
            minHeight: 400
        })
    ),
    homeNameDiv: css(
        mq({
            display: 'flex',
            flexDirection: 'row',
        })
    ),
    homeJobDiv: css(
        mq({
            display: 'flex',
            flexDirection: 'row',
        })
    ),
    homeDescriptionDiv: (parameter) => css(
        mq({
            display: 'flex',
            opacity: parameter ? 1 : 0,
            flexDirection: 'column',
            width: ['35vw', '50vw', '50vw', '35vw'],
            transition: '.6s ease-in',
        })
    ),
    homeDescription: (height) => css(
        mq({
            color: 'white',
            fontSize: [16, height < 600 ? 16 : 24, height < 600 ? 16 : 22, height < 600 ? 16 : 24],
            lineHeight: '150%',
            margin: 0,
            marginTop: 15,
            marginBottom: 15

        })
    ),
    bookeyButton: css(
        mq({
            display: 'flex',
            marginTop: [0, 0, 15, 15],
            border: '1px solid white',
            height: 55,
            width: 180,
            borderRadius: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#61DBFB',
            boxShadow: '0px 0px 2px 2px white',
            '&:hover': {
                cursor: 'pointer',
                boxShadow: '0px 0px 5px 3px white'
            },
        })
    ),
    bookeyButtonDiv: (parameter) => css(
        mq({
            display: 'flex',
            opacity: parameter ? 1 : 0,
            transition: '.5s ease-in',
            transitionDelay: '.6s',
        })
    ),
    bookeyText: css(
        mq({
            color: 'black',
            fontSize: [20, 20, 20, 20],
            fontWeight: 'bold'
        })
    ),

    //phone styles

    homeBackgroundPhone: (height) => css(
        mq({
            display: 'flex',
            width: '100vw',
            height: height - 50,
            position: 'absolute',
            top: 50,
            background: 'black',
            justifyContent: 'center',
            flexDirection: 'column',
            overflow: height < 500 ? 'scroll' : 'hidden',
            zIndex: 1
        })
    ),
    homeContentDivPhone: css(
        mq({
            display: 'flex',
            position: 'absolute',
            left: '5%',
            top: '17%',
            width: '95%',
            flexDirection: 'column',
            minHeight: 400
        })
    ),
    homeNameDivPhone: css(
        mq({
            display: 'flex',
            flexDirection: 'row',
        })
    ),
    homeJobDivPhone: css(
        mq({
            display: 'flex',
            flexDirection: 'row',
        })
    ),
    homeDescriptionDivPhone: (parameter) => css(
        mq({
            display: 'flex',
            flexDirection: 'column',
            width: ['75vw', '60vw', '75vw', '75vw'],
            opacity: parameter ? 1 : 0,
            transition: '.6s ease-in',
        })
    ),
    homeDescriptionPhone: (height) => css(
        mq({
            color: 'white',
            fontSize: [16, height < 600 ? 16 : 24, 22, 22],
            lineHeight: '150%',
            margin: 0,
            marginTop: 20,
            marginBottom: 20

        })
    ),
    bookeyButtonDivPhone: (parameter) => css(
        mq({
            display: 'flex',
            opacity: parameter ? 1 : 0,
            transition: '.5s ease-in',
            transitionDelay: '.6s',
        })
    ),
    bookeyButtonPhone: (height) => css(
        mq({
            display: 'flex',
            border: '1px solid white',
            height: [50, height < 600 ? 50 : 70, 70, 70],
            width: [150, 165, 150, 150],
            borderRadius: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#61DBFB',
            boxShadow: '0px 0px 2px 2px white',
        })
    ),
    bookeyTextPhone: (height) => css(
        mq({
            color: 'black',
            fontSize: [18, height < 600 ? 18 : 24, 22, 22],
            fontWeight: 'bold'
        })
    ),

}