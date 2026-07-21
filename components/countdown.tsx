"use client";

import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2026-07-25T23:59:59").getTime();

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = Date.now();
      const distance = TARGET_DATE - now;

      if (distance <= 0) {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      setTimeLeft({
        days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        ).padStart(2, "0"),
        minutes: String(
          Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        ).padStart(2, "0"),
        seconds: String(
          Math.floor((distance % (1000 * 60)) / 1000)
        ).padStart(2, "0"),
      });
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  const boxes = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <section className="bg-[#0A0A0A] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-[#D4AF37]/20 bg-white/[0.03] p-8 md:p-14 backdrop-blur-xl shadow-[0_0_50px_rgba(212,175,55,0.08)]">

          {/* Gold Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_70%)] pointer-events-none" />

          <div className="relative z-10">

            <span className="inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
              🟢 Registrations Open
            </span>

            <p className="mt-6 text-sm uppercase tracking-[0.5em] text-[#D4AF37]">
              Season VIII
            </p>

            <h2 className="mt-4 text-4xl font-bold text-white md:text-6xl">
              Registration Closes In
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              Complete your registration before the countdown reaches zero.
              Join <span className="font-semibold text-white">FTW Championships Season VIII</span>,
              compete against the best players, earn exclusive rewards,
              and leave your legacy in the Hall of Fame.
            </p>

            <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">
              {boxes.map((box) => (
                <div
                  key={box.label}
                  className="rounded-2xl border border-[#D4AF37]/20 bg-gradient-to-b from-[#D4AF37]/10 to-transparent p-6 transition-all duration-300 hover:border-[#D4AF37]/50 hover:shadow-[0_0_25px_rgba(212,175,55,0.18)]"
                >
                  <h3 className="text-5xl font-extrabold tracking-tight text-white md:text-6xl">
                    {box.value}
                  </h3>

                  <p className="mt-3 text-sm uppercase tracking-[0.35em] text-[#D4AF37]">
                    {box.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col items-center gap-4">

              <div className="inline-flex rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-6 py-3 text-sm font-medium text-[#D4AF37]">
                ⏳ Deadline: 25 July 2026 • 11:59 PM IST
              </div>

              <p className="text-sm text-gray-500">
                Register before the deadline to secure your place in Season VIII.
              </p>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}