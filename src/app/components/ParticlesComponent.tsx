import { FC, useCallback } from 'react'
import NavBar from './NavBar'
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

interface ParticlesComponentProps {

}

const ParticlesComponent: FC<ParticlesComponentProps> = ({ }) => {

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (

        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "bubble",
                        },
                        resize: true,
                    },
                    modes: {
                        bubble: {
                            distance: 100,
                            duration: 2,
                            opacity: 3, 
                            size: 5,
                            speed: 5,
                        },
                        grab: {
                            distance: 400,
                            lineLinked: {
                                opacity: 4
                            }
                        },
                        connect: {
                            distance: 400,
                        },
                    },
                },
                fullScreen: {
                    enable: false,
                    zIndex: 0
                },
                smooth: true,
                particles: {
                    color: {
                        value: "rgb(52, 211, 153)",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.1,
                        width: 0.9,
                    },
                    lineLinked: {
                        enable: false,
                        distance: 150,
                        color: "#c8c8c8",
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1.5,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 600,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.1,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />

    )
}

export default ParticlesComponent
