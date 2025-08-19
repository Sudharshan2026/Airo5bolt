import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import GradientText from './ui/GradientText';
import Countdown from './hero/Countdown';
import EventDetails from './hero/EventDetails';
import CTAButtons from './hero/CTAButtons';
import AnimatedBackground from './hero/AnimatedBackground';

import zenistaLogo from './assets/leo.png';
// [USER ACTION REQUIRED]
// To add your own background video, place it in the `src/components/assets` folder
// and update the import path below to point to your new file.
// For example: import backgroundVideo from './assets/pandora-video.mp4';
// For performance, it's recommended to compress the video. The current video is 36MB.
// Tools like HandBrake or online video compressors can be used for this.
import backgroundVideo from './assets/dragondone.mp4';
import fallbackImage from './assets/DRAGON.jpeg';

const HeroSection = () => {
  const targetDate: number = new Date("sep 12, 2025 00:00:00").getTime();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Intersection Observer for performance optimization
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const scrollToEvents = () => {
    document.querySelector('#events')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section 
      ref={containerRef}
      id="home" 
      className="relative min-h-[100vh] lg:h-[120vh] flex items-center justify-center overflow-hidden"
      style={{ y: shouldReduceMotion ? 0 : y }}
    >
      {/* Background Video with Lazy Loading and Fallback */}
      <div className="absolute inset-0 w-full h-full">
        {/* Fallback Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${fallbackImage})`,
            filter: 'hue-rotate(240deg) brightness(0.3)'
          }}
        />
        
        {/* Video Layer */}
        {isInView && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              filter: 'hue-rotate(240deg) brightness(0.4)'
            }}
            onLoadedData={() => {
              setVideoLoaded(true);
              if (videoRef.current) {
                videoRef.current.playbackRate = 0.65;
              }
            }}
            onError={() => setVideoLoaded(false)}
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        )}
      </div>

      {/* Enhanced Overlay for better text readability */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40"
        style={{ opacity }}
      />

      <AnimatedBackground />

      {/* Main Content with Enhanced Layout */}
      <div className="relative z-30 w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout for Better Space Utilization */}
        <div className="grid grid-rows-[auto_1fr_auto] min-h-[80vh] lg:min-h-[100vh] gap-8 lg:gap-12">
          
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center pt-8 lg:pt-16"
          >
            {/* Enhanced Logo with Floating Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex justify-center mb-6 lg:mb-8"
            >
              <motion.img
                src={zenistaLogo}
                alt="Airo 5.O Logo"
                className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain"
                whileHover={{ scale: 1.1, rotate: 5 }}
                animate={{
                  y: shouldReduceMotion ? 0 : [-5, 5, -5],
                  filter: [
                    'drop-shadow(0 0 20px #4079ff)',
                    'drop-shadow(0 0 30px #40ffaa)',
                    'drop-shadow(0 0 20px #4079ff)'
                  ]
                }}
                transition={{ 
                  y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                  scale: { duration: 0.3 },
                  rotate: { duration: 0.3 },
                  filter: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
                }}
              />
            </motion.div>
          </motion.div>

          {/* Main Content Section */}
          <div className="flex flex-col justify-center text-center space-y-8 lg:space-y-12">
            {/* Enhanced Event Title with Responsive Typography */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="space-y-4 lg:space-y-6"
            >
              <motion.h1
                className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl xl:text-[10rem] font-bold tracking-wider leading-tight"
                transition={{ duration: 3, repeat: Infinity }}
              >
                <GradientText 
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#4079ff", "#40ffaa"]}
                  animationSpeed={4} 
                  showBorder={false} 
                  className="font-avartar"
                  style={{ fontFamily: "'AvartarWater', sans-serif" }}
                >
                  Airo 5.O
                </GradientText>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#40ffaa] mb-2"
              >
                2025
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              >
                National Level Technical Symposium
              </motion.p>
            </motion.div>

            {/* Enhanced Countdown Timer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="flex justify-center"
            >
              <Countdown targetDate={targetDate} />
            </motion.div>
          </div>

          {/* Bottom Section */}
          <div className="space-y-8 lg:space-y-12 pb-8 lg:pb-16">
            {/* Event Details Grid with Staggered Animation */}
            <EventDetails />

            {/* Enhanced CTA Buttons */}
            <CTAButtons scrollToEvents={scrollToEvents} />
          </div>
        </div>

        {/* Decorative Side Elements */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="flex flex-col space-y-4"
          >
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-16 bg-gradient-to-b from-[#4079ff] to-[#40ffaa] rounded-full"
                animate={{
                  scaleY: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
          </motion.div>
        </div>

        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="flex flex-col space-y-4"
          >
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-16 bg-gradient-to-b from-[#40ffaa] to-[#4079ff] rounded-full"
                animate={{
                  scaleY: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3 + 1
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;