import React from 'react'
import Particles from "react-tsparticles";
export const ParticlesComponent = () => {
    const particlesInit = (main) => {
        console.log(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 60,
                background: {
                    color: "#fff"
                },
                fullScreen: {
                    enable: false,
                    zIndex: -1
                },
                particles: {
                    color: { value: ["#e91f63", "#BFC2CB"] },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: "bounce",
                        random: false,
                        speed: 0.7,
                        straight: false
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800
                        },
                        value: 300
                    },
                    opacity: {
                        value: 0.6
                    },
                    shape: {
                        type: "star"
                    },
                    size: {
                        value: { min: 0.5, max: 3.5 },
                        animation: {
                            enable: true,
                            minimumValue: 0,
                            speed: 10
                        },
                        random: {
                            enable: true
                        }
                    },
                }
            }}
        />
    );
}
