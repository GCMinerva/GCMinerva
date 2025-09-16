'use client';

import { useState, useEffect } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to 30 days from now for demo
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const updateCountdown = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="bg-black bg-opacity-60 border border-green-500 rounded-lg p-4 min-w-[100px] mx-2">
      <div className="text-3xl md:text-4xl font-bold text-green-400 font-mono text-center">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-sm text-green-300 text-center uppercase tracking-wider mt-1">
        {label}
      </div>
    </div>
  );

  return (
    <div className="mb-12">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl text-green-400 font-mono mb-2">
          SYSTEM ACTIVATION IN:
        </h2>
        <div className="text-sm text-green-500 font-mono">
          [COUNTDOWN PROTOCOL ENGAGED]
        </div>
      </div>

      <div className="flex justify-center items-center flex-wrap">
        <TimeBlock value={timeLeft.days} label="DAYS" />
        <div className="text-green-400 text-2xl font-mono mx-1">:</div>
        <TimeBlock value={timeLeft.hours} label="HOURS" />
        <div className="text-green-400 text-2xl font-mono mx-1">:</div>
        <TimeBlock value={timeLeft.minutes} label="MINUTES" />
        <div className="text-green-400 text-2xl font-mono mx-1">:</div>
        <TimeBlock value={timeLeft.seconds} label="SECONDS" />
      </div>

      <div className="text-center mt-6">
        <div className="text-xs text-green-600 font-mono opacity-70">
          [AUTOMATED SEQUENCE WILL COMMENCE UPON COMPLETION]
        </div>
      </div>
    </div>
  );
}