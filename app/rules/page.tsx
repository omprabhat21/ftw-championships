"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  ShieldCheck,
  Trophy,
  Gavel,
  Download,
} from "lucide-react";

import PageLayout from "@/components/pagelayout";
import PageHero from "@/components/common/PageHero";

const RULES = [
  {
    title: "Tournament Rules",
    items: [
      "Participation Eligibility",
      "Slot Submission & Lineup Rules",
      "Match Structure",
      "Team Responsibilities",
      "Tie-Break Criteria",
      "Walkover Policy",
      "Deadlines & Scheduling",
    ],
  },
  {
    title: "Gameplay Rules",
    items: [
      "Kickoff Glitch Ban",
      "Crossing Rule",
      "Lob Pass Rule",
      "Ground Driven Pass Rule",
      "Goalkeeper Rush Rule",
      "Possession vs Attacking Output",
      "Time Wasting & Backpassing",
      "Disconnection Rules",
      "Allowed Emotes",
    ],
  },
  {
    title: "Fair Play & Conduct",
    items: [
      "Respect & Sportsmanship",
      "RTK Verification",
      "Facecam Regulations",
      "WhatsApp Verification",
      "Match Completion Policy",
      "Dispute Resolution",
      "Admin Decisions",
    ],
  },
];

const DISCIPLINE = [
  {
    title: "Yellow Card",
    color: "#FACC15",
    description:
      "Official warning for minor misconduct or first-time violations.",
  },
  {
    title: "Orange Card",
    color: "#FB923C",
    description:
      "Temporary suspension for repeated violations.",
  },
  {
    title: "Red Card",
    color: "#EF4444",
    description:
      "Permanent tournament ban for serious misconduct.",
  },
];

export default function RulesPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <PageLayout
     
    >
      <PageHero
        current="Rules"
        title="TOURNAMENT RULES"
        description="Everything you need to know before joining FTW Championships."
      />

      <section className="mx-auto max-w-6xl px-6 py-20">

        {/* Intro */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
            Official Rulebook
          </p>

          <h2 className="text-5xl font-black uppercase text-white">
            Fair Play Comes First
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/60">
            FTW Championships is built on competitive integrity,
            sportsmanship and professionalism. Every player is expected
            to follow tournament regulations and respect fellow
            competitors at all times.
          </p>

        </motion.div>

        {/* Quick Rules */}

        <div className="mb-24 grid gap-6 md:grid-cols-4">

          {[
            {
              icon: ShieldCheck,
              title: "Fair Play",
            },
            {
              icon: Trophy,
              title: "Competitive Integrity",
            },
            {
              icon: Gavel,
              title: "Admin Decisions",
            },
            {
              icon: Download,
              title: "Official Rulebook",
            },
          ].map((item) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                whileHover={{
                  y: -8,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition hover:border-[#D4AF37]/40"
              >

                <Icon className="mx-auto mb-5 h-10 w-10 text-[#D4AF37]" />

                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>

              </motion.div>

            );

          })}

        </div>

        {/* Accordion */}

        <div className="space-y-5">

          {RULES.map((section, index) => (

            <motion.div
              key={section.title}
              whileHover={{
                scale: 1.01,
              }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all hover:border-[#D4AF37]/30"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between p-8"
              >

                <h3 className="text-left text-2xl font-bold text-white">
                  {section.title}
                </h3>

                <ChevronDown
                  className={`transition duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              <AnimatePresence>

                {open === index && (

                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: .35,
                    }}
                    className="overflow-hidden border-t border-white/10"
                  >

                    <ul className="space-y-5 px-8 py-8">

                      {section.items.map((item) => (

                        <li
                          key={item}
                          className="flex items-center gap-4 text-white/70"
                        >

                          <span className="h-2.5 w-2.5 rounded-full bg-[#D4AF37]" />

                          {item}

                        </li>

                      ))}

                    </ul>

                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>

          ))}

        </div>
                {/* Discipline */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="mt-28"
        >

          <div className="mb-14 text-center">

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              Discipline
            </p>

            <h2 className="text-5xl font-black uppercase text-white">
              Card System
            </h2>

            <p className="mt-5 text-lg text-white/60">
              Every violation is reviewed according to its severity.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-3">

            {DISCIPLINE.map((card) => (

              <motion.div
                key={card.title}
                whileHover={{
                  y: -10,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-[#D4AF37]/40"
              >

                <div className="mb-8 flex justify-center">

                  <div
                    className="h-36 w-24 rounded-xl border border-white/20 shadow-[0_25px_50px_rgba(0,0,0,.45)] transition duration-300 group-hover:rotate-6 group-hover:scale-105"
                    style={{
                      background: card.color,
                    }}
                  />

                </div>

                <h3 className="mb-4 text-center text-3xl font-bold text-white">
                  {card.title}
                </h3>

                <p className="text-center leading-8 text-white/70">
                  {card.description}
                </p>

              </motion.div>

            ))}

          </div>

        </motion.div>

        {/* Important Notice */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="mt-28 overflow-hidden rounded-3xl border border-[#D4AF37]/20 bg-gradient-to-br from-[#D4AF37]/10 via-white/[0.03] to-transparent p-10 backdrop-blur-xl"
        >

          <h2 className="mb-8 text-4xl font-black uppercase text-[#D4AF37]">
            Important Notice
          </h2>

          <ul className="space-y-5 text-lg leading-8 text-white/70">

            <li>
              • Captains are responsible for their team's management and
              player availability.
            </li>

            <li>
              • Gameplay disputes must be supported with valid video proof.
            </li>

            <li>
              • Admin decisions are final and binding throughout the
              tournament.
            </li>

            <li>
              • Unsportsmanlike behaviour may result in warnings,
              suspensions or permanent bans.
            </li>

            <li>
              • Every participant is expected to read the complete
              Rulebook before joining FTW Championships.
            </li>

          </ul>

        </motion.div>

        {/* Download Rulebook */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="mt-28"
        >

          <div className="overflow-hidden rounded-3xl border border-[#D4AF37]/20 bg-gradient-to-br from-[#D4AF37]/10 via-white/[0.03] to-transparent p-12 backdrop-blur-xl">

            <div className="flex flex-col items-center text-center">

              <div className="mb-8 rounded-full bg-[#D4AF37]/10 p-6">

                <Download className="h-10 w-10 text-[#D4AF37]" />

              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
                Official Document
              </p>

              <h2 className="mt-4 text-5xl font-black uppercase text-white">
                Season VII Rulebook
              </h2>

              <p className="mt-3 text-white/40">
                PDF • 13 Pages
              </p>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/60">
                Read the complete tournament regulations,
                disciplinary policies,
                gameplay rules,
                verification procedures,
                match guidelines,
                and official tournament standards.
              </p>

              <a
                href="/rulebook/season7-rulebook.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#D4AF37] px-10 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-[#E5BE45]"
              >
                <Download size={20} />
                Download Official PDF
              </a>

            </div>

          </div>

        </motion.div>

      </section>

    </PageLayout>
  );
}