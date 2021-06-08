/** @jsxRuntime classic */
/** @jsx jsx */
import Sky from 'react-sky';
import logo from '../Images/logo.svg';
import { css, jsx, keyframes } from "@emotion/react";
import facepaint from "facepaint";
import WordCloud from '../Components/WordCloud';
import Contact from './Contact';
import MediaQuery from 'react-responsive';
import React, { useState } from 'react'
import HomeTypist from '../Components/homeTypist'
import { motion } from 'framer-motion';
import { useViewport } from '../Components/ViewportProvider';
import Typist from 'react-typist';




function SkillsPage() {


    const { width, height } = useViewport();
    const [showButton, setShowButton] = useState(false);

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


    function numOfImages() {
        if (width < 540) { return 20 }
        return 40
    }

    function sizeOfImages() {
        if (width < 540) { return '35px' }
        return '50px'
    }

    function resumeLink() {
        window.open('https://drive.google.com/file/d/10dM3c9WTN371Ftn2-kHKxh9v9hlMCqw6/view?usp=sharing');
    }

    return (
        <motion.div initial='out' animate='in' exit='out' variants={pageVariants}>
            <MediaQuery orientation={"landscape"}>

                <div css={styles.skillsBackground(height)}>

                    <div css={styles.skillsLHSdiv}>
                        <div css={styles.skillsTitleDiv}>
                            <HomeTypist copy="Skills &" delay={0} />
                        </div>
                        <div css={styles.experienceDiv}>
                            <HomeTypist copy="Experience" delay={700} onTypingDone={() => setShowButton(true)} />
                        </div>
                        <div css={styles.skillsDescriptionDiv(showButton)}>
                            <p css={styles.skillsDescription(height)}>I have worked as a full-stack developer building mobile and web applications for start-ups and large financial institutions.</p>
                            {/* <p css={styles.skillsDescriptionMid(height)}>I am most comfortable with front-end development in which I have over a years experience dating back to 2020.</p> */}
                            <p css={styles.skillsDescription(height)}>My main area of expertise is coding interactive layouts where I am able to apply my mathematical background to designing smooth animations.</p>
                            <div css={styles.resumeButtonDiv(showButton)}>
                                <div onClick={() => resumeLink()} css={styles.resumeButton}>
                                    <p css={styles.resumeText(height)}>View Resume</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div css={styles.skillsRHSdiv(showButton)}>
                        <WordCloud />
                    </div>

                </div>

            </MediaQuery>
            <MediaQuery orientation={"portrait"}>
                <div css={styles.skillsBackgroundPhone(height)}>
                    <Sky images={{ 0: logo }} how={numOfImages()} time={5} size={sizeOfImages()} />
                    <div css={styles.skillsContentPhone}>
                        {/* <HomeTypist copy="Full-stack" delay={0} onTypingDone={() => setShowButton(true)} /> */}
                        <div css={styles.typistDiv}>
                            <Typist onTypingDone={() => setShowButton(true)} avgTypingDelay={40} stdTypingDelay={0} startDelay={0}>
                                <Typist.Delay ms={0} />
                                <p css={styles.skillsTitlePhone(height)}>Full-Stack Developer</p>
                            </Typist>
                        </div>
                        <div css={styles.phoneCloudDiv(showButton)}>
                            <WordCloud />
                        </div>
                        <div css={styles.resumeButtonDivPhone(showButton)}>
                            <div onClick={() => resumeLink()} css={styles.resumeButtonPhone}>
                                <p css={styles.resumeTextPhone}>View Resume</p>
                            </div>
                        </div>
                    </div>
                </div>
            </MediaQuery>
        </motion.div>

    );


}

export default SkillsPage;


const breakpoints = [500, 1025, 1400];

const mq = facepaint([
    `@media(min-width: ${breakpoints.slice(0, 1)}px)`,
    `@media(min-width: ${breakpoints.slice(1, 2)}px)`,
    `@media(min-width: ${breakpoints.slice(2, 3)}px)`,
]);

function sizeOfFont(height) {
    if (height < 500) { return 14 }
    else if (height > 750) { return 24 }
    else return ('2.5vh')
}

const styles = {
    skillsBackground: (height) => css(
        mq({
            display: 'flex',
            flexDirection: 'row',
            width: '100vw',
            zIndex: 1,
            background: 'black',
            height: [height - 50, height - 50, height - 70, height - 70],
            position: 'absolute',
            top: [50, 50, 70, 70],
            background: 'black',
            // minHeight: 500,
            overflow: 'scroll'
        })
    ),
    skillsLHSdiv: css(
        mq({
            display: 'flex',
            width: '45%',
            justifyContent: 'center',
            flexDirection: 'column',
            marginLeft: '5%',
            minHeight: 500
        })
    ),
    skillsRHSdiv: (parameter) => css(
        mq({
            display: 'flex',
            opacity: parameter ? 1 : 0,
            width: '55%',
            justifyContent: 'center',
            alignItems: 'center',
            transition: '.5s ease-in',
            transitionDelay: '1s',
            minHeight: 500
        })
    ),
    skillsTitleDiv: css(
        mq({
            display: 'flex',
            flexDirection: 'row',
        })
    ),
    experienceDiv: css(
        mq({
            display: 'flex',
        })
    ),
    skillsDescriptionDiv: (parameter) => css(
        mq({
            display: 'flex',
            opacity: parameter ? 1 : 0,
            flexDirection: 'column',
            width: '35vw',
            transition: '.6s ease-in',
        })
    ),
    skillsDescription: (height) => css(
        mq({
            color: 'white',
            fontSize: [16, sizeOfFont(height), 18, 18],
            lineHeight: '150%',
            margin: 0,
            marginTop: 20
        })
    ),
    skillsDescriptionMid: (height) => css(
        mq({
            display: height < 700 ? 'none' : 'flex',
            color: 'white',
            fontSize: [16, sizeOfFont(height), 14, 18],
            lineHeight: '150%',
            margin: 0,
            marginTop: 20
        })
    ),
    resumeButtonDivPhone: (parameter) => css(
        mq({
            display: 'flex',
            opacity: parameter ? 1 : 0,
            transition: '.5s ease-in',
            transitionDelay: '.65s',
        })
    ),
    resumeButtonDiv: (parameter) => css(
        mq({
            display: 'flex',
            opacity: parameter ? 1 : 0,
            transition: '.5s ease-in',
            transitionDelay: '.6s',
        })
    ),
    resumeButton: css(
        mq({
            display: 'flex',
            marginTop: 30,
            border: '1px solid white',
            height: 55,
            width: [160, 160, 180, 180],
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
    resumeText: (height) => css(
        mq({
            color: 'black',
            fontSize: [18, height < 600 ? 18 : 22, 22, 22],
            fontWeight: 'bold'
        })
    ),

    // Phone Styles

    skillsBackgroundPhone: (height) => css(
        mq({
            display: 'flex',
            flexDirection: 'row',
            width: '100vw',
            zIndex: 1,
            background: 'black',
            height: [height - 50, height - 50, height - 70, height - 70],
            position: 'absolute',
            top: [50, 50, 70, 70],
            background: 'black',
            // justifyContent: 'center',
            minHeight: 430,
        })
    ),

    skillsContentPhone: css(
        mq({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90%',
            width: '100%'
        })
    ),

    typistDiv: css(
        mq({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 5,
        })
    ),

    skillsTitlePhone: (height) => css(
        mq({
            color: 'white',
            fontSize: '4.5vh',
            fontWeight: 'bold',
            margin: 0
        }
        )),

    resumeButtonPhone: css(
        mq({
            display: 'flex',
            border: '1px solid white',
            height: 55,
            width: [150, 150, 150, 150],
            borderRadius: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#61DBFB',
            boxShadow: '0px 0px 2px 2px white',
        })
    ),
    resumeTextPhone: css(
        mq({
            color: 'black',
            fontSize: [20, 20, 16, 16],
            fontWeight: 'bold'
        })
    ),

    phoneCloudDiv: (parameter) => css(
        mq({
            display: 'flex',
            height: ['100%', '85%', '100%', '100%'],
            width: '90%',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: parameter ? 1 : 0,
            transition: '.6s ease-in',
            marginTop: 30,
        })
    ),

    phoneSkillsText: css(
        mq({
            color: 'white',
            fontSize: '5vh',
            fontWeight: 'bold',
            margin: 0,
            textAlign: 'center'
        })
    ),
}