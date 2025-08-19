import { motion } from 'framer-motion';

const AnimatedBackground = () => {
    return (
        <>
            {/* Pandora Animated Background (overlay on video) */}
            <div className="absolute inset-0 z-20">
                {/* Parallax Grid: A subtle grid that moves with the mouse */}
                <motion.div
                    animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `linear-gradient(rgba(64, 255, 170, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(64, 121, 255, 0.3) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}
                />

                {/* Bioluminescent Pulses: Large, slow-moving pulses of light */}
                <div className="absolute inset-0">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-96 h-96 rounded-full border border-[#4079ff]/20"
                            style={{
                                top: `${20 + i * 30}%`,
                                left: `${10 + i * 40}%`,
                            }}
                            animate={{
                                scale: [0, 2, 0],
                                opacity: [0.3, 0.1, 0],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                delay: i * 2.5,
                            }}
                        />
                    ))}
                </div>

                {/* Gradient Overlay: A soft, shifting gradient overlay */}
                <motion.div
                    animate={{
                        background: [
                            'radial-gradient(circle at 20% 50%, rgba(64, 121, 255, 0.1) 0%, transparent 50%)',
                            'radial-gradient(circle at 80% 50%, rgba(64, 255, 170, 0.1) 0%, transparent 50%)',
                            'radial-gradient(circle at 50% 20%, rgba(64, 121, 255, 0.1) 0%, transparent 50%)',
                            'radial-gradient(circle at 50% 80%, rgba(64, 255, 170, 0.1) 0%, transparent 50%)'
                        ]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0"
                />
            </div>

            {/* Floating Woodsprites: Small, fast-moving particles that sparkle */}
            <div className="absolute inset-0 z-25">
                {Array.from({ length: 30 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-[#40ffaa]/70 rounded-full"
                        style={{
                            boxShadow: '0 0 10px #40ffaa, 0 0 20px #40ffaa, 0 0 30px #4079ff'
                        }}
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            opacity: 0
                        }}
                        animate={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: Math.random() * 12 + 8,
                            repeat: Infinity,
                            delay: Math.random() * 7,
                        }}
                    />
                ))}
            </div>
        </>
    )
}

export default AnimatedBackground;
