/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/react";
import facepaint from "facepaint";
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import MediaQuery from 'react-responsive';
import picOfMe from '../Images/picOfMe.jpeg'
import { useViewport } from './ViewportProvider'

function Navbar() {

    const { width, height } = useViewport();



    const [ActiveTab, setActiveTab] = useState(0);
    const history = useHistory();

    function navbarClick(tabNumber, path) {
        setActiveTab(tabNumber);
        history.push(`${path}`)
    }

    function linkedinLink() {
        window.open('https://uk.linkedin.com/in/sajad-jabarivasal-a94b11183?trk=people_directory');
    }


    return (
        <div style={{ background: 'black' }}>
            <MediaQuery minWidth={1025}>
                <div className='NavbarFixedDiv'>
                    <div css={styles.Navbar}>
                        <div onClick={() => linkedinLink()} css={styles.NavpicDiv}>
                            <img css={styles.Navpic} src={picOfMe} />
                        </div>
                        <div onClick={() => linkedinLink()} css={styles.Navname}>
                            <p css={styles.Navtext}>Sajad Jabarivasal</p>
                        </div>
                        <div className='Navlinks'>
                            <p onClick={() => navbarClick(0, '/')} className={underlineText(0)}>Home</p>
                            <p onClick={() => navbarClick(1, '/skills')} className={underlineText(1)}>Skills</p>
                            <p onClick={() => navbarClick(2, 'contact')} className={underlineText(2)}>Contact</p>
                        </div>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={1025}>
                <div className='NavbarFixedDivPhone'>
                    <div css={styles.NavbarPhone}>
                        <div className='NavlinksPhone'>
                            <p onClick={() => navbarClick(0, '/')} className={underlineTextPhone(0)}>Home</p>
                            <p onClick={() => navbarClick(1, '/skills')} className={underlineTextPhone(1)}>Skills</p>
                            <p onClick={() => navbarClick(2, '/contact')} className={underlineTextPhone(2)}>Contact</p>
                        </div>
                    </div>
                </div>
            </MediaQuery>
        </div>

    );

    function underlineText(x) {
        if (ActiveTab === x) { return 'NavtextUnderlined' }
        else {
            return 'Navtext'
        }
    }

    function underlineTextPhone(x) {
        if (ActiveTab === x) { return 'NavtextUnderlinedPhone' }
        else {
            return 'NavtextPhone'
        }
    }


}





export default Navbar;

const breakpoints = [500, 1025, 1400];

const mq = facepaint([
    `@media(min-width: ${breakpoints.slice(0, 1)}px)`,
    `@media(min-width: ${breakpoints.slice(1, 2)}px)`,
    `@media(min-width: ${breakpoints.slice(2, 3)}px)`,
]);

const styles = {
    // NavbarFixedDiv: css(
    //     mq({
    //         display: 'flex',
    //         paddingLeft: '5px',
    //         top: 0,
    //         position: 'fixed',
    //         flexDirection: 'row',
    //         height: '70px',
    //         backgroundColor: '#f1dfd1',
    //         backgroundImage: linearGradient('0deg', '#f1dfd1 20%', '#f6f0ea 74%'),
    //         zIndex: 5,
    //         width: '100%'
    //     })),
    Navbar: css(
        mq({
            display: 'flex',
            position: 'relative',
            flexDirection: 'row',
            height: '100%',
            width: '100%'
        }
        )),
    NavpicDiv: css(
        mq({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '60px',
            cursor: 'pointer'
        }
        )),
    Navpic: css(
        mq({
            display: 'flex',
            height: '50px',
            width: '50px',
            borderRadius: '100%',
            border: '2px solid black'
        }
        )),
    Navname: css(
        mq({
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '150px',
            position: 'absolute',
            top: '40%',
            left: '60px'
        }
        )),
    Navtext: css(
        mq({
            margin: 0,
            fontWeight: 'bold',
            cursor: 'pointer',
        }
        )),

    // phone styles

    NavbarPhone: css(
        mq({
            display: 'flex',
            position: 'relative',
            flexDirection: 'row',
            height: '100%',
            width: '100%'
        }
        )),
    NavpicDivPhone: css(
        mq({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '60px'
        }
        )),
    NavpicPhone: css(
        mq({
            display: 'flex',
            height: '50px',
            width: '50px',
            borderRadius: '100%',
            border: '2px solid black'
        }
        )),
    NavnamePhone: css(
        mq({
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '150px',
            position: 'absolute',
            top: '40%',
            left: '60px'
        }
        )),
    NavtextPhone: css(
        mq({
            margin: 0,
            fontWeight: 'bold',
            cursor: 'pointer',
        }
        )),


}