import { motion, useInView } from 'framer-motion';
import { Calendar, MapPin, Users, Award } from 'lucide-react';
import { useRef } from 'react';

const eventDetails = [
    {
      icon: Calendar,
      label: "Date",
      value: "8th August 2025",
      color: "from-[#4079ff] to-[#40ffaa]"
    },
    {
      icon: MapPin,
      label: "Venue",
      value: "Sri Sairam Engineering College",
      color: "from-[#40ffaa] to-[#4079ff]"
    },
    {
      icon: Users,
      label: "Level",
      value: "National Level",
      color: "from-[#4079ff] to-[#40ffaa]"
    },
    {
      icon: Award,
      label: "Department",
      value: "AI&DS",
      color: "from-[#40ffaa] to-[#4079ff]"
    }
  ];

const EventDetails = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { 
            opacity: 0, 
            y: 30,
            scale: 0.9
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.6
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full max-w-6xl mx-auto px-4"
        >
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center mb-8 lg:mb-12"
            >
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                    Event Details
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-[#4079ff] to-[#40ffaa] mx-auto rounded-full" />
            </motion.div>

            {/* Enhanced Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {eventDetails.map((detail, index) => (
                    <motion.div
                        key={detail.label}
                        variants={itemVariants}
                        whileHover={{ 
                            scale: 1.05,
                            rotateY: 5,
                            z: 50
                        }}
                        className="group relative perspective-1000"
                    >
                        {/* Enhanced Card Container */}
                        <div className="relative h-full min-h-[160px] sm:min-h-[180px] lg:min-h-[200px]
                                      bg-gradient-to-br from-black/60 via-black/40 to-black/60 
                                      backdrop-blur-md border border-[#4079ff]/30 
                                      rounded-2xl lg:rounded-3xl p-6 lg:p-8
                                      hover:border-[#40ffaa]/50 hover:shadow-[0_0_40px_rgba(64,255,170,0.3)]
                                      transition-all duration-700 ease-out overflow-hidden
                                      transform-gpu">
                            
                            {/* Dynamic Background Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${detail.color} opacity-0 
                                          group-hover:opacity-10 transition-opacity duration-700`} />

                            {/* Animated Border Effect */}
                            <div className="absolute inset-0 rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 
                                          transition-opacity duration-700">
                                <div className={`absolute inset-0 rounded-2xl lg:rounded-3xl 
                                              bg-gradient-to-r ${detail.color} opacity-20 animate-pulse`} />
                            </div>

                            {/* Floating Particles Effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                {Array.from({ length: 3 }).map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-1 h-1 bg-[#40ffaa] rounded-full"
                                        style={{
                                            top: `${20 + i * 25}%`,
                                            left: `${10 + i * 30}%`
                                        }}
                                        animate={{
                                            y: [-5, -15, -5],
                                            opacity: [0.3, 1, 0.3],
                                            scale: [1, 1.5, 1]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.5
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Content */}
                            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                                {/* Enhanced Icon */}
                                <motion.div
                                    whileHover={{ 
                                        scale: 1.2, 
                                        rotate: [0, -10, 10, 0],
                                        y: -5
                                    }}
                                    transition={{ 
                                        scale: { duration: 0.3 },
                                        rotate: { duration: 0.6 },
                                        y: { duration: 0.3 }
                                    }}
                                    className="mb-4 lg:mb-6"
                                >
                                    <div className="relative">
                                        <detail.icon
                                            className="text-[#40ffaa] drop-shadow-[0_0_15px_rgba(64,255,170,0.6)]
                                                     group-hover:drop-shadow-[0_0_25px_rgba(64,255,170,0.8)]
                                                     transition-all duration-300"
                                            size={32}
                                        />
                                        
                                        {/* Icon Glow Effect */}
                                        <motion.div
                                            className="absolute inset-0 rounded-full bg-[#40ffaa]/20"
                                            animate={{
                                                scale: [1, 1.5, 1],
                                                opacity: [0, 0.5, 0]
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        />
                                    </div>
                                </motion.div>
                                
                                {/* Enhanced Label */}
                                <p className="text-sm lg:text-base text-gray-300 mb-2 lg:mb-3 font-medium 
                                             group-hover:text-white transition-colors duration-300 tracking-wide">
                                    {detail.label}
                                </p>
                                
                                {/* Enhanced Value */}
                                <p className="font-bold text-white text-base lg:text-lg xl:text-xl tracking-wide leading-tight
                                             group-hover:bg-gradient-to-r group-hover:from-[#40ffaa] group-hover:to-[#4079ff]
                                             group-hover:bg-clip-text group-hover:text-transparent
                                             transition-all duration-300">
                                    {detail.value}
                                </p>
                            </div>

                            {/* Corner Accent */}
                            <div className="absolute top-3 right-3 w-2 h-2 bg-[#40ffaa] rounded-full 
                                          opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                          animate-pulse" />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Additional Info Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-center mt-8 lg:mt-12"
            >
                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full 
                              bg-gradient-to-r from-[#4079ff]/10 to-[#40ffaa]/10 
                              border border-[#4079ff]/20 backdrop-blur-sm">
                    <motion.div
                        className="w-2 h-2 bg-[#40ffaa] rounded-full"
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [1, 0.7, 1]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <span className="text-sm text-gray-400 font-medium">
                        More details will be announced soon
                    </span>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default EventDetails;
