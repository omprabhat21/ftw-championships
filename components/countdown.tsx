"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2026-08-10T23:59:59").getTime();

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        return;
      }

      setTime({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="bg-[#0A0A0A] py-16 text-center text-white">
      <h2 className="mb-8 text-3xl font-bold text-[#D4AF37]">
        Registration Ends In
      </h2>

      <div className="flex justify-center gap-8 text-3xl font-bold">
        <div>
          <p>{time.days}</p>
          <span className="text-sm text-gray-400">Days</span>
        </div>

        <div>
          <p>{time.hours}</p>
          <span className="text-sm text-gray-400">Hours</span>
        </div>

        <div>
          <p>{time.minutes}</p>
          <span className="text-sm text-gray-400">Minutes</span>
        </div>

        <div>
          <p>{time.seconds}</p>
          <span className="text-sm text-gray-400">Seconds</span>
        </div>
      </div>
    </section>
  );
}