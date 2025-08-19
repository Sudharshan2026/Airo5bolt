import { useState, useEffect, useCallback } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownBlockProps {
  value: number;
  label: string;
}

const CountdownBlock: React.FC<CountdownBlockProps> = ({ value, label }) => (
  <div className="flex flex-col items-center justify-center text-center">
    <span className="countdown font-mono text-3xl sm:text-5xl transition-transform duration-300">
      <span
        style={{ "--value": value } as React.CSSProperties}
        aria-live="polite"
        aria-label={`${value} ${label}`}
      >
        {value}
      </span>
    </span>
    <span className="text-xs sm:text-sm text-gray-400" aria-hidden="true">{label}</span>
  </div>
);

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

  return (
    <div className="grid grid-cols-4 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto text-center">
      <CountdownBlock value={timeLeft.days} label="Days" />
      <CountdownBlock value={timeLeft.hours} label="Hours" />
      <CountdownBlock value={timeLeft.minutes} label="Minutes" />
      <CountdownBlock value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default Countdown;
