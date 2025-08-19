import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

const AnimatedBackground = () => {
    const shouldReduceMotion = useReducedMotion();
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateWindowSize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        updateWindowSize();
        window.addEventListener('resize', updateWindowSize);
        return () => window.removeEventListener('resize', updateWindowSize);
    }, []);

    if (shouldReduceMotion) {
        return (
            <div className="absolute inset-0 z-20">
                <div className="absolute inset-0 opacity-10"
                     style={{
                         backgroundImage: `linear-gradient(rgba(64, 255, 170, 0.2) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(64, 121, 255, 0.2) 1px, transparent 1px)`,
                         backgroundSize: '50px 50px'
                     }}
                />
            </div>
        );
    }

    return (
        <>
            {/* Enhanced Animated Background Layers */}
            <div className="absolute inset-0 z-20">
                {/* Dynamic Grid Pattern */}
                <motion.div
                    animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `linear-gradient(rgba(64, 255, 170, 0.4) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(64, 121, 255, 0.4) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                />

                {/* Secondary Moving Grid */}
                <motion.div
                    animate={{
                        backgroundPosition: ['100% 100%', '0% 0%'],
                    }}
                    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `linear-gradient(45deg, rgba(64, 255, 170, 0.3) 1px, transparent 1px),
                             linear-gradient(-45deg, rgba(64, 121, 255, 0.3) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                {/* Enhanced Bioluminescent Pulses */}
                <div className="absolute inset-0">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full border-2 border-[#4079ff]/15"
                            style={{
                                width: `${200 + i * 100}px`,
                                height: `${200 + i * 100}px`,
                                top: `${15 + i * 20}%`,
                                left: `${5 + i * 25}%`,
                            }}
                            animate={{
                                scale: [0.8, 2.5, 0.8],
                                opacity: [0.4, 0.1, 0.4],
                                rotate: [0, 180, 360]
                            }}
                            transition={{
                                duration: 12 + i * 2,
                                repeat: Infinity,
                                delay: i * 3,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>

                {/* Enhanced Gradient Overlays */}
                <motion.div
                    animate={{
                        background: [
                            'radial-gradient(circle at 20% 30%, rgba(64, 121, 255, 0.15) 0%, transparent 60%)',
                            'radial-gradient(circle at 80% 70%, rgba(64, 255, 170, 0.15) 0%, transparent 60%)',
                            'radial-gradient(circle at 50% 20%, rgba(64, 121, 255, 0.12) 0%, transparent 60%)',
                            'radial-gradient(circle at 30% 80%, rgba(64, 255, 170, 0.12) 0%, transparent 60%)',
                            'radial-gradient(circle at 70% 40%, rgba(64, 121, 255, 0.15) 0%, transparent 60%)'
                        ]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0"
                />

                {/* Layered Gradient for Depth */}
                <motion.div
                    animate={{
                        background: [
                            'conic-gradient(from 0deg at 30% 50%, rgba(64, 255, 170, 0.05) 0deg, transparent 120deg, rgba(64, 121, 255, 0.05) 240deg, transparent 360deg)',
                            'conic-gradient(from 120deg at 70% 50%, rgba(64, 121, 255, 0.05) 0deg, transparent 120deg, rgba(64, 255, 170, 0.05) 240deg, transparent 360deg)',
                            'conic-gradient(from 240deg at 50% 30%, rgba(64, 255, 170, 0.05) 0deg, transparent 120deg, rgba(64, 121, 255, 0.05) 240deg, transparent 360deg)'
                        ]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0"
                />
            </div>

            {/* Enhanced Floating Particles */}
            <div className="absolute inset-0 z-25 overflow-hidden">
                {Array.from({ length: 25 }).map((_, i) => {
                    const size = Math.random() * 3 + 1;
                    const isBlue = i % 3 === 0;
                    
                    return (
                        <motion.div
                            key={i}
                            className={`absolute rounded-full ${
                                isBlue ? 'bg-[#4079ff]/70' : 'bg-[#40ffaa]/70'
                            }`}
                            style={{
                                width: `${size}px`,
                                height: `${size}px`,
                                boxShadow: isBlue 
                                    ? '0 0 10px #4079ff, 0 0 20px #4079ff, 0 0 30px #40ffaa'
                                    : '0 0 10px #40ffaa, 0 0 20px #40ffaa, 0 0 30px #4079ff'
                            }}
                            initial={{
                                x: Math.random() * windowSize.width,
                                y: Math.random() * windowSize.height,
                                opacity: 0
                            }}
                            animate={{
                                x: [
                                    Math.random() * windowSize.width,
                                    Math.random() * windowSize.width,
                                    Math.random() * windowSize.width
                                ],
                                y: [
                                    Math.random() * windowSize.height,
                                    Math.random() * windowSize.height,
                                    Math.random() * windowSize.height
                                ],
                                opacity: [0, 1, 0.5, 1, 0],
                                scale: [1, 1.5, 1, 2, 1]
                            }}
                            transition={{
                                duration: Math.random() * 15 + 10,
                                repeat: Infinity,
                                delay: Math.random() * 10,
                                ease: "easeInOut"
                            }}
                        />
                    );
                })}
            </div>

            {/* Ambient Light Orbs */}
            <div className="absolute inset-0 z-15">
                {Array.from({ length: 3 }).map((_, i) => (
                    <motion.div
                        key={`orb-${i}`}
                        className="absolute rounded-full blur-3xl"
                        style={{
                            width: `${300 + i * 100}px`,
                            height: `${300 + i * 100}px`,
                            background: i % 2 === 0 
                                ? 'radial-gradient(circle, rgba(64, 121, 255, 0.1) 0%, transparent 70%)'
                                : 'radial-gradient(circle, rgba(64, 255, 170, 0.1) 0%, transparent 70%)',
                            top: `${20 + i * 30}%`,
                            left: `${10 + i * 40}%`
                        }}
                        animate={{
                            x: [0, 100, -50, 0],
                            y: [0, -75, 50, 0],
                            scale: [1, 1.3, 0.8, 1],
                            opacity: [0.3, 0.6, 0.2, 0.3]
                        }}
                        transition={{
                            duration: 20 + i * 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 7
                        }}
                    />
                ))}
            </div>
        </>
    )
}

export default AnimatedBackground;
