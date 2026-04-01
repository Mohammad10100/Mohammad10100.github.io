import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Hero = () => {
    const [init, setInit] = useState(false);

    // Initialize the tsparticles engine once when the component mounts
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {init && (
                <Particles
                    id="tsparticles"
                    className="absolute inset-0 z-0 pointer-events-auto"
                    options={{
                        fullScreen: { enable: false },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onHover: {
                                    enable: true,
                                    mode: "grab",
                                },
                            },
                            modes: {
                                grab: {
                                    distance: 250,
                                    links: {
                                        opacity: 0.8,
                                        color: "#8b5cf6" // brighter purple for the grab line
                                    }
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#4f46e5",
                            },
                            links: {
                                color: "#4f46e5",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1.5,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 0.8,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 90,
                            },
                            opacity: {
                                value: 0.8,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 4 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
            )}

            {/* Background glow effects - cinematic lighting */}
            <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-accent rounded-full mix-blend-multiply filter blur-[150px] opacity-20 animate-pulse-slow pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-blue-600 rounded-full mix-blend-multiply filter blur-[150px] opacity-10 animate-pulse-slow delay-1000 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 text-center pointer-events-none">
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-accent tracking-[0.3em] uppercase mb-4 text-xs font-semibold"
                >
                    Hello, I'm
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter text-white"
                >
                    Mohammad Abdul Lateef
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light"
                >
                    <span className="text-white font-medium">Designer</span> <span className="text-accent px-1">+</span> <span className="text-white font-medium">Developer</span>
                    <span className="text-accent px-1">+</span> <span className="text-white font-medium">Cybersecurity Enthusiast</span>
                    <br />
                    <span className="text-sm md:text-base text-gray-500 mt-3 block">Full Stack Developer & Cybersecurity Researcher</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-5 justify-center pointer-events-auto"
                >
                    <a href="#projects" className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group">
                        View Work
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                    <a href="#contact" className="px-8 py-4 glass text-white rounded-full font-medium hover:bg-[rgba(30,30,30,0.8)] transition-all flex items-center justify-center gap-2">
                        Let's Talk
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
