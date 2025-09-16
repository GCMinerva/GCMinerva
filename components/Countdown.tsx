'use client';

import { useState, useEffect, useRef } from 'react';
import { animate, utils } from 'animejs';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const digitalRef = useRef<HTMLDivElement>(null);
  const prevTimeLeft = useRef({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const createDigitalSlot = (value: number, isColon: boolean = false) => {
    const slot = document.createElement('div');
    slot.classList.add('digital-slot');

    if (isColon) {
      slot.classList.add('colon');
      slot.textContent = ':';
      return slot;
    }

    slot.classList.add('numbers');
    for (let i = 0; i < 10; i++) {
      const num = document.createElement('div');
      num.textContent = `${i}`;
      // Force white color and transparent background
      num.style.setProperty('color', '#fff', 'important');
      num.style.setProperty('background', 'transparent', 'important');
      // Position numbers in 3D cylinder
      utils.set(num, {
        rotateX: i * 36,
        translateZ: '3ch',
        transformOrigin: 'center center 0px'
      });
      slot.appendChild(num);
    }

    return slot;
  };

  const animateSlot = (slot: HTMLElement, newValue: number, oldValue: number) => {
    if (newValue === oldValue) return;

    // Calculate rotation needed to show new number
    const rotation = -newValue * 36;

    // RED FLASH EFFECT - Flash AFTER spinning stops!
    const flashRed = () => {
      // Flash bright red
      slot.style.color = '#ff0000';
      slot.style.background = 'rgba(255,0,0,0.3)';
      slot.style.textShadow = '0 0 20px #ff0000, 0 0 40px #ff0000';
      slot.style.boxShadow = '0 0 30px rgba(255,0,0,0.8)';

      // Apply to children
      Array.from(slot.children).forEach(child => {
        (child as HTMLElement).style.color = '#ff0000';
        (child as HTMLElement).style.textShadow = '0 0 20px #ff0000';
      });

      // Flash back to white after 150ms
      setTimeout(() => {
        slot.style.color = '#fff';
        slot.style.background = 'transparent';
        slot.style.textShadow = '0 0 10px rgba(255,255,255,0.5)';
        slot.style.boxShadow = '0 0 20px rgba(255,255,255,0.1)';

        Array.from(slot.children).forEach(child => {
          (child as HTMLElement).style.color = '#fff';
          (child as HTMLElement).style.textShadow = '0 0 10px rgba(255,255,255,0.5)';
        });
      }, 150);
    };

    // First do the rotation animation
    animate(slot, {
      rotateX: rotation,
      duration: 800,
      ease: 'outQuart',
      complete: () => {
        // RED FLASH HAPPENS WHEN SPINNING STOPS!
        flashRed();
      }
    });

  };

  useEffect(() => {
    // Create digital display structure
    if (digitalRef.current) {
      digitalRef.current.innerHTML = '';

      // Days (3 digits max)
      const daysH = createDigitalSlot(0); // hundreds
      const daysT = createDigitalSlot(0); // tens
      const daysU = createDigitalSlot(0); // units

      const colon1 = createDigitalSlot(0, true);

      // Hours
      const hoursT = createDigitalSlot(0);
      const hoursU = createDigitalSlot(0);

      const colon2 = createDigitalSlot(0, true);

      // Minutes
      const minutesT = createDigitalSlot(0);
      const minutesU = createDigitalSlot(0);

      const colon3 = createDigitalSlot(0, true);

      // Seconds
      const secondsT = createDigitalSlot(0);
      const secondsU = createDigitalSlot(0);

      digitalRef.current.appendChild(daysH);
      digitalRef.current.appendChild(daysT);
      digitalRef.current.appendChild(daysU);
      digitalRef.current.appendChild(colon1);
      digitalRef.current.appendChild(hoursT);
      digitalRef.current.appendChild(hoursU);
      digitalRef.current.appendChild(colon2);
      digitalRef.current.appendChild(minutesT);
      digitalRef.current.appendChild(minutesU);
      digitalRef.current.appendChild(colon3);
      digitalRef.current.appendChild(secondsT);
      digitalRef.current.appendChild(secondsU);

      // Store references for animation
      (digitalRef.current as any).slots = {
        daysH, daysT, daysU,
        hoursT, hoursU,
        minutesT, minutesU,
        secondsT, secondsU
      };
    }

    // TRULY RANDOM TIMER - Every 1 second generates completely random numbers!
    const timer = setInterval(() => {
      // Generate completely random time values every second!
      const randomDays = utils.random(0, 999);
      const randomHours = utils.random(0, 23);
      const randomMinutes = utils.random(0, 59);
      const randomSeconds = utils.random(0, 59);

      setTimeLeft({
        days: randomDays,
        hours: randomHours,
        minutes: randomMinutes,
        seconds: randomSeconds
      });
    }, 1000);

    // Set initial random values
    setTimeLeft({
      days: utils.random(0, 999),
      hours: utils.random(0, 23),
      minutes: utils.random(0, 59),
      seconds: utils.random(0, 59)
    });

    return () => clearInterval(timer);
  }, []);

  // Animate when time changes
  useEffect(() => {
    if (!digitalRef.current || !(digitalRef.current as any).slots) return;

    const slots = (digitalRef.current as any).slots;
    const prev = prevTimeLeft.current;

    // Days
    const daysStr = timeLeft.days.toString().padStart(3, '0');
    const prevDaysStr = prev.days.toString().padStart(3, '0');

    animateSlot(slots.daysH, parseInt(daysStr[0]), parseInt(prevDaysStr[0]));
    animateSlot(slots.daysT, parseInt(daysStr[1]), parseInt(prevDaysStr[1]));
    animateSlot(slots.daysU, parseInt(daysStr[2]), parseInt(prevDaysStr[2]));

    // Hours
    const hoursStr = timeLeft.hours.toString().padStart(2, '0');
    const prevHoursStr = prev.hours.toString().padStart(2, '0');

    animateSlot(slots.hoursT, parseInt(hoursStr[0]), parseInt(prevHoursStr[0]));
    animateSlot(slots.hoursU, parseInt(hoursStr[1]), parseInt(prevHoursStr[1]));

    // Minutes
    const minutesStr = timeLeft.minutes.toString().padStart(2, '0');
    const prevMinutesStr = prev.minutes.toString().padStart(2, '0');

    animateSlot(slots.minutesT, parseInt(minutesStr[0]), parseInt(prevMinutesStr[0]));
    animateSlot(slots.minutesU, parseInt(minutesStr[1]), parseInt(prevMinutesStr[1]));

    // Seconds
    const secondsStr = timeLeft.seconds.toString().padStart(2, '0');
    const prevSecondsStr = prev.seconds.toString().padStart(2, '0');

    animateSlot(slots.secondsT, parseInt(secondsStr[0]), parseInt(prevSecondsStr[0]));
    animateSlot(slots.secondsU, parseInt(secondsStr[1]), parseInt(prevSecondsStr[1]));

    prevTimeLeft.current = { ...timeLeft };
  }, [timeLeft]);

  return (
    <div className="digital-clock">
      <div ref={digitalRef} className="digital-display"></div>
      <div className="labels">
        <span>DAYS</span>
        <span>HOURS</span>
        <span>MINUTES</span>
        <span>SECONDS</span>
      </div>
    </div>
  );
}