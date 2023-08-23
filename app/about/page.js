"use client"
import Particles from "react-particles"
const ParticleBg = () => (
    <Particles
        params={{
            particles: {
                number: {
                    value: 400,
                    density: {
                        enable: true,
                        value_area: 3000,
                    },
                },
                line_linked: {
                    enable: false,
                },
                move: {
                    direction: `right`,
                    speed: 0.3,
                },
                size: {
                    value: 1,
                },
                opacity: {
                    anim: {
                        enable: true,
                        speed: 0.5,
                        opacity_min: 0.1,
                    },
                },
            },
            interactivity: {
                events: {
                    onclick: {
                        enable: false,
                    },
                },
            },
            retina_detect: true,
        }}
    />
)

const about = () => {
    return (
        <section className="w-full min-h-screen bg-gray-900 relative">
            <div
                className={`absolute left-0 top-0 h-screen w-full overflow-hidden`}
            >
                <ParticleBg />
            </div>
        </section>
    )
}

export default about
