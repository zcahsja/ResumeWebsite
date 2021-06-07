/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/react";
import facepaint from "facepaint";
import * as THREE from 'three'
import React, { useRef, useState, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, TrackballControls, OrbitControls } from '@react-three/drei'
import MediaQuery from 'react-responsive';

let skillsList = ['React', 'Node', 'SQL', 'NoSQL', 'TDD', 'Git', 'Python', 'JavaScript', 'Excel', 'ReactNative', 'HTML', 'CSS', 'TypeScript', 'Matlab', 'R', 'Jira']

function WordCloud() {



    function Word({ children, ...props }) {
        const color = new THREE.Color()
        const fontProps = { font: '/Inter-Bold.woff', fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
        const ref = useRef()
        const [hovered, setHovered] = useState(false)
        const over = (e) => (e.stopPropagation(), setHovered(true))
        const out = () => setHovered(false)
        // Change the mouse cursor on hover
        useEffect(() => {
            if (hovered) document.body.style.cursor = 'pointer'
            return () => (document.body.style.cursor = 'auto')
        }, [hovered])
        // Tie component to the render-loop
        useFrame(({ camera }) => {
            // Make text face the camera
            ref.current.quaternion.copy(camera.quaternion)
            // Animate font color
            ref.current.material.color.lerp(color.set(hovered ? '#61DBFB' : 'white'), 1)
        })
        return <Text ref={ref} onPointerOver={over} onPointerOut={out} {...props} {...fontProps} children={children} />
    }

    function Cloud({ count = 4, radius = 10 }) {
        // Create a count x count random words with spherical distribution
        const words = useMemo(() => {
            const temp = []
            const spherical = new THREE.Spherical()
            const phiSpan = Math.PI / (count + 1)
            const thetaSpan = (Math.PI * 2) / count
            for (let i = 1; i < count + 1; i++)
                // Taken from https://discourse.threejs.org/t/can-i-place-obects-on-a-sphere-surface-evenly/4773/6
                for (let j = 0; j < count; j++) { temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), skillsList[(i - 1) * 4 + j]]) }
            return temp
        }, [count, radius])
        return words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)
    }

    return (
        <React.Fragment>
            <MediaQuery minWidth={550}>
                <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }} css={styles.cloudStyle}>
                    <fog attach="fog" args={['#202025', 0, 80]} />
                    <Cloud count={4} radius={20} />
                    <OrbitControls autoRotate={true} autoRotateSpeed={8.0} />
                </Canvas>
            </MediaQuery>
            <MediaQuery maxWidth={550}>
                <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }} >
                    <fog attach="fog" args={['#202025', 0, 80]} />
                    <Cloud count={4} radius={19} />
                    <OrbitControls autoRotate={true} autoRotateSpeed={8.0} />
                </Canvas>
            </MediaQuery>
        </React.Fragment>
    )

}

export default WordCloud;

const breakpoints = [500, 1025, 1400];

const mq = facepaint([
    `@media(min-width: ${breakpoints.slice(0, 1)}px)`,
    `@media(min-width: ${breakpoints.slice(1, 2)}px)`,
    `@media(min-width: ${breakpoints.slice(2, 3)}px)`,
]);

const styles = {
    cloudStyle: css(
        mq({
            maxWidth: ['90vw', '90vw', '50vw', '50vw'],
        })
    ),
    phoneCloudStyle: css(
        mq({
            marginTop: [35, 35, 35, 35],
            maxWidth: ['90vw', '80vw', '50vw', '50vw'],
            maxHeight: 400
        })
    ),
}
