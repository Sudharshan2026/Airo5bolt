import { useState, useEffect, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownBlockProps {
  value: number;
  label: string;
  index: number;
}

const CountdownBlock: React.FC<CountdownBlockProps> = ({ value, label, index }) => {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100 
      }}
      className="group relative"
    >
      {/* Enhanced Background with Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4079ff]/20 via-black/40 to-[#40ffaa]/20 
                      rounded-2xl backdrop-blur-md border border-[#4079ff]/30 
                      group-hover:border-[#40ffaa]/50 group-hover:shadow-[0_0_30px_rgba(64,255,170,0.3)]
                      transition-all duration-500" />
      
      {/* Animated Border Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#4079ff]/30 via-[#40ffaa]/30 to-[#4079ff]/30 
                        animate-pulse" />
      </div>
      
      <div className="relative flex flex-col items-center justify-center text-center p-4 sm:p-6 lg:p-8 min-h-[120px] sm:min-h-[140px]">
        {/* Enhanced Number Display */}
        <motion.div
          key={value} // Re-animate when value changes
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, type: "spring" }}
          className="relative"
        >
          <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-mono
                          bg-gradient-to-br from-[#40ffaa] via-white to-[#4079ff] 
                          bg-clip-text text-transparent
                          drop-shadow-[0_0_10px_rgba(64,255,170,0.5)]
                          group-hover:drop-shadow-[0_0_20px_rgba(64,255,170,0.8)]
                          transition-all duration-300"
                aria-live="polite"
                aria-label={`${value} ${label}`}
          >
            {String(value).padStart(2, '0')}
          </span>
          
          {/* Pulse Effect on Number Change */}
          <motion.div
            className="absolute inset-0 rounded-lg bg-[#40ffaa]/20"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 0], opacity: [0, 0.5, 0] }}
            transition={{ duration: 0.6 }}
            key={`pulse-${value}`}
          />
        </motion.div>
        
        {/* Enhanced Label */}
        <motion.span 
          className="text-xs sm:text-sm md:text-base text-gray-300 font-medium tracking-wider uppercase
                     group-hover:text-[#40ffaa] transition-colors duration-300 mt-2"
          aria-hidden="true"
          whileHover={{ scale: 1.05 }}
        >
          {label}
        </motion.span>
        
        {/* Separator Dots */}
        {label !== "Seconds" && (
          <div className="absolute -right-2 sm:-right-3 top-1/2 transform -translate-y-1/2
                          hidden sm:flex flex-col space-y-1">
            <motion.div
              className="w-1 h-1 bg-[#40ffaa] rounded-full"
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="w-1 h-1 bg-[#4079ff] rounded-full"
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

interface CountdownProps {
    targetDate: number;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = useCallback((): TimeLeft => {
    const now: number = new Date().getTime();
    const difference: number = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full max-w-4xl mx-auto"
    >
      {/* Main Countdown Container */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8">
        {timeUnits.map((unit, index) => (
          <CountdownBlock 
            key={unit.label}
            value={unit.value} 
            label={unit.label}
            index={index}
          />
        ))}
      </div>
      
      {/* Event Status Indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center"
      >
        {timeLeft.days > 0 || timeLeft.hours > 0 || timeLeft.minutes > 0 || timeLeft.seconds > 0 ? (
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full 
                          bg-gradient-to-r from-[#4079ff]/20 to-[#40ffaa]/20 
                          border border-[#4079ff]/30 backdrop-blur-sm">
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
            <span className="text-sm text-gray-300 font-medium">Event Starting Soon</span>
          </div>
        ) : (
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full 
                          bg-gradient-to-r from-[#40ffaa]/20 to-[#4079ff]/20 
                          border border-[#40ffaa]/30 backdrop-blur-sm">
            <div className="w-2 h-2 bg-[#40ffaa] rounded-full animate-pulse" />
            <span className="text-sm text-[#40ffaa] font-medium">Event is Live!</span>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Countdown;
