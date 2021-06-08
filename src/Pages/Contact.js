/** @jsxRuntime classic */
/** @jsx jsx */
import { useState } from 'react'
import { css, jsx, keyframes } from "@emotion/react";
import facepaint from "facepaint";
import { CloudWaveEffect } from 'react-background-animation';
import { db } from '../Components/firebase';
import { motion } from 'framer-motion';
import { useViewport } from '../Components/ViewportProvider';

function Contact() {

    const { width, height } = useViewport();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

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

    const handleSubmit = () => {

        db.collection("contacts").add({
            name: name,
            email: email,
            message: message
        })
            .then(() => {
                alert("Message sent!");
            })
            .catch(error => {
                alert(error.message);
            });

        setName("");
        setEmail("");
        setMessage("");
    }


    function submitButton() {
        if (message === '' || email === '' || name === '') {
            return (
                <div css={styles.disabledSubmitButton}>
                    <p css={styles.submitText}>Submit</p>
                </div>
            )
        }
        else {
            return (
                <div css={styles.submitButton}>
                    <p css={styles.submitText}>Submit</p>
                </div>
            )
        }
    }



    return (
        <motion.div initial='out' animate='in' exit='out' variants={pageVariants}>
            <div css={styles.homeBottom(height)}>
                {/* <CloudWaveEffect style={{ height: 200 }} /> */}
                <div css={styles.contactContentDiv}>
                    <div css={styles.contactAndLinkedin}>
                        <p css={styles.contactMeText}>Get in touch</p>
                    </div>
                    <div>
                        <textarea value={name} onChange={(e) => setName(e.target.value)} css={styles.smallTextArea} placeholder="Name" />
                        <textarea value={email} onChange={(e) => setEmail(e.target.value)} css={styles.smallTextArea} placeholder="Email" />
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} css={styles.bigTextArea} placeholder="Message" />
                    </div>
                    {submitButton()}
                </div>
            </div>
        </motion.div>
    )
}

export default Contact;


const breakpoints = [500, 1025, 1400];

const mq = facepaint([
    `@media(min-width: ${breakpoints.slice(0, 1)}px)`,
    `@media(min-width: ${breakpoints.slice(1, 2)}px)`,
    `@media(min-width: ${breakpoints.slice(2, 3)}px)`,
]);

const styles = {


    homeBottom: (height) => css(
        mq({
            display: 'flex',
            width: '100vw',
            height: [height - 50, height - 50, height - 70, height - 70],
            position: 'absolute',
            top: [50, 50, 70, 70],
            justifyContent: 'center',
            // alignItems: 'center',
            background: 'white',
            overflow: 'scroll'
        })
    ),
    contactContentDiv: css(
        mq({
            display: 'flex',
            maxWidth: ['85vw', '50vw', '50vw', '50vw'],
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: [400, 550, 550, 550]

            // zIndex: 50,
            // marginBottom: [60, 80, 80, 80],

        })
    ),
    contactMeText: css(
        mq({
            color: 'black',
            fontSize: [30, 40, 50, 55],
            fontWeight: 'bold',
            margin: 0,
            marginBottom: [40, 60, 40, 40]
        })
    ),
    contactAndLinkedin: css(
        mq({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        })
    ),
    smallTextArea: css(
        mq({
            backgroundColor: 'white', padding: [2, 3, 5, 5], height: [40, 50, 40, 40], marginBottom: [10, 25, 10, 10], width: '100%', border: '1px solid black', borderRadius: 10
        })
    ),
    bigTextArea: css(
        mq({
            backgroundColor: 'white', padding: [2, 3, 5, 5], height: [80, 90, 80, 80], marginBottom: [30, 50, 30, 30], width: '100%', border: '1px solid black', borderRadius: 10
        })
    ),
    submitButton: (message) => css(
        mq({
            display: 'flex',
            border: '1px solid white',
            height: ['8vh', 80, 70, 70],
            width: [150, 200, 200, 200],
            borderRadius: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#61DBFB',
            '&:hover': {
                cursor: 'pointer',
                boxShadow: '0px 0px 2px 2px black'
            }
        })
    ),
    disabledSubmitButton: (message) => css(
        mq({
            display: 'flex',
            border: '1px solid white',
            height: ['8vh', 80, 70, 70],
            width: [150, 200, 200, 200],
            borderRadius: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: 0.2,
            background: 'grey',
        })
    ),
    submitText: css(
        mq({
            color: 'white',
            fontSize: [22, 26, 26, 26],
            fontWeight: 'bold'
        })
    ),
}