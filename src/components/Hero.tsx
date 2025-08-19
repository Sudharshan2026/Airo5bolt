import { motion } from 'framer-motion';
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

const HeroSection = () => {
  const targetDate: number = new Date("sep 12, 2025 00:00:00").getTime();

  const scrollToEvents = () => {
    document.querySelector('#events')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ 
          filter: 'hue-rotate(240deg) brightness(0.4)'
        }}
        ref={(video) => {
          if (video) {
            video.playbackRate = 0.65;
          }
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      {/* Video Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      <AnimatedBackground />

      {/* Main Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* College Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-12 mt-8"
        >
          
          
        </motion.div>

        {/* Event Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-1"
        >

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.0 }}
            className="flex justify-center mb-8"
          >
            <motion.img
              src={zenistaLogo}
              alt="Airo 5.O Logo"
              className="w-32 h-32 md:w-40 md:h-40 object-contain"
              whileHover={{ scale: 1.1, rotate: 5 }}
              animate={{
                filter: [
                  'drop-shadow(0 0 20px #4079ff)',
                  'drop-shadow(0 0 30px #40ffaa)',
                  'drop-shadow(0 0 20px #4079ff)'
                ]
              }}
              transition={{ 
                scale: { duration: 0.3 },
                rotate: { duration: 0.3 },
                filter: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
              }}
            />
          </motion.div>
          
          <motion.h1
            className="text-9xl md:text-9xl font-bold mb-4 tracking-wider"
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
            className="text-2xl md:text-3xl text-[#40ffaa] mb-2"
          >
            2025
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            National Level Technical Symposium
          </motion.p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mb-12"
        >
          <Countdown targetDate={targetDate} />
        </motion.div>

        {/* Event Details Grid */}
        <EventDetails />

        {/* CTA Buttons */}
        <CTAButtons scrollToEvents={scrollToEvents} />
      </div>
    </section>
  );
};

export default HeroSection;