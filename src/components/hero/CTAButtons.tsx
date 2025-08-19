import { motion, useInView, Variants } from 'framer-motion';
import { ChevronRight, Info, Sparkles } from 'lucide-react';
import { useRef } from 'react';

interface CTAButtonsProps {
    scrollToEvents: () => void;
}

const CTAButtons: React.FC<CTAButtonsProps> = ({ scrollToEvents }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const buttonVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.9 },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: {
                type: "spring" as const,
                stiffness: 120,
                damping: 15
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center items-center w-full max-w-2xl mx-auto"
        >
            {/* Primary CTA Button - Enhanced */}
            <motion.button
                variants={buttonVariants}
                onClick={scrollToEvents}
                whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 40px rgba(64, 121, 255, 0.7)",
                    y: -2
                }}
                whileTap={{ scale: 0.98, y: 0 }}
                className="group relative w-full sm:w-auto bg-gradient-to-r from-[#4079ff] to-[#40ffaa] 
                           hover:from-[#3366ee] hover:to-[#33ee99] 
                           text-white font-semibold text-base lg:text-lg 
                           px-8 lg:px-12 py-4 lg:py-5 rounded-full
                           shadow-[0_0_30px_rgba(64,121,255,0.5)] 
                           hover:shadow-[0_0_50px_rgba(64,121,255,0.8)]
                           transition-all duration-500 ease-out
                           focus:outline-none focus:ring-4 focus:ring-[#4079ff]/40
                           overflow-hidden min-w-[200px] lg:min-w-[240px]
                           border border-transparent hover:border-white/20"
                aria-label="Explore event details and schedule"
            >
                {/* Enhanced Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                               transform -skew-x-12 -translate-x-full group-hover:translate-x-full 
                               transition-transform duration-1200 ease-out" />
                
                {/* Particle Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full"
                            style={{
                                top: `${20 + (i * 15)}%`,
                                left: `${10 + (i * 15)}%`
                            }}
                            animate={{
                                y: [-3, -8, -3],
                                opacity: [0.4, 1, 0.4],
                                scale: [1, 1.3, 1]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.2
                            }}
                        />
                    ))}
                </div>
                
                <div className="relative flex items-center justify-center gap-3">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                        <Sparkles size={20} />
                    </motion.div>
                    <span className="font-bold">Explore Events</span>
                    <motion.div
                        className="group-hover:translate-x-1 transition-transform duration-300"
                        whileHover={{ x: 3 }}
                    >
                        <ChevronRight size={20} />
                    </motion.div>
                </div>

                {/* Pulse Effect */}
                <motion.div
                    className="absolute inset-0 rounded-full bg-white/10"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0, 0.3, 0]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </motion.button>

            {/* Secondary CTA Button - Enhanced */}
            <motion.button
                variants={buttonVariants}
                onClick={scrollToEvents}
                whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(64, 121, 255, 0.15)",
                    borderColor: "rgba(64, 255, 170, 0.6)",
                    y: -2
                }}
                whileTap={{ scale: 0.98, y: 0 }}
                className="group relative w-full sm:w-auto border-2 border-[#4079ff] text-[#4079ff] 
                           hover:text-[#40ffaa] hover:border-[#40ffaa]
                           font-semibold text-base lg:text-lg 
                           px-8 lg:px-12 py-4 lg:py-5 rounded-full
                           backdrop-blur-sm bg-white/5 hover:bg-white/10
                           transition-all duration-500 ease-out
                           focus:outline-none focus:ring-4 focus:ring-[#4079ff]/30
                           min-w-[200px] lg:min-w-[240px] overflow-hidden"
                aria-label="Learn more about the symposium details"
            >
                {/* Animated Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#4079ff]/0 via-[#40ffaa]/20 to-[#4079ff]/0 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full
                               scale-x-0 group-hover:scale-x-100 origin-center" />
                
                {/* Border Animation */}
                <div className="absolute inset-0 rounded-full border-2 border-transparent 
                               group-hover:border-gradient-to-r group-hover:from-[#4079ff] group-hover:to-[#40ffaa]
                               transition-all duration-500" />

                <div className="relative flex items-center justify-center gap-3">
                    <motion.div
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Info size={18} />
                    </motion.div>
                    <span className="font-bold">Learn More</span>
                    <motion.div
                        className="group-hover:translate-x-1 transition-transform duration-300"
                        whileHover={{ x: 3 }}
                    >
                        <ChevronRight size={18} />
                    </motion.div>
                </div>
                
                {/* Ripple Effect */}
                <motion.div
                    className="absolute inset-0 rounded-full border border-[#40ffaa]/30"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0, 0.3]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
            </motion.button>

            {/* Floating Action Indicators */}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                           hidden lg:flex items-center space-x-2"
            >
                <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-2 h-2 bg-[#40ffaa] rounded-full opacity-60"
                />
                <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    className="w-2 h-2 bg-[#4079ff] rounded-full opacity-60"
                />
                <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                    className="w-2 h-2 bg-[#40ffaa] rounded-full opacity-60"
                />
            </motion.div>
        </motion.div>
    )
}

export default CTAButtons;