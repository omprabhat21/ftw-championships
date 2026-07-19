"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import PageLayout from "@/components/pagelayout";
import PageHero from "@/components/common/PageHero";

const FAQS = [
  {
    question: "Who can participate in FTW Championships?",
    answer:
      "Any eligible player who satisfies the tournament participation requirements and follows the official tournament regulations may register and compete.",
  },
  {
    question: "How do I register for a tournament?",
    answer:
      "Registrations open before every season. Complete the official registration form before the deadline and follow the instructions provided by the Admin Team.",
  },
  {
    question: "Is there an entry fee?",
    answer:
      "Entry fees vary by season. If applicable, the registration fee, prize pool, and payment details will be announced before registrations begin.",
  },
  {
    question: "How are fixtures announced?",
    answer:
      "Fixtures are published before every Matchday through the official FTW Championships announcements. Team Captains are responsible for coordinating matches.",
  },
  {
    question: "How are lineups submitted?",
    answer:
      "Captains or Vice-Captains must submit their team's lineup to the assigned tournament admin before the official deadline for that Matchday.",
  },
  {
    question: "What happens if my opponent doesn't show up?",
    answer:
      "If a player fails to appear within the allowed grace period, the Admin Panel may award a walkover after reviewing the available evidence.",
  },
  {
    question: "What is RTK Verification?",
    answer:
      "RTK (Right To Know) Verification is a fair-play verification system used when requested to ensure competitive integrity during tournament matches.",
  },
  {
    question: "Is Facecam mandatory?",
    answer:
      "Facecam is only required when requested according to tournament regulations. Alternative verification methods may be accepted in valid situations.",
  },
  {
    question: "What happens if I disconnect during a match?",
    answer:
      "Disconnections are handled according to the official tournament policy. Depending on the match time and available proof, the match may be restarted, resumed, or the existing score retained.",
  },
  {
    question: "How are disputes resolved?",
    answer:
      "Every dispute must be supported with screenshots or video evidence. The Admin Panel reviews all evidence before making a final decision.",
  },
  {
    question: "Are kickoff glitches or gameplay exploits allowed?",
    answer:
      "No. Kickoff glitches, prohibited exploits, and other unfair gameplay mechanics are strictly forbidden and may result in disciplinary action.",
  },
  {
    question: "What disciplinary actions can players receive?",
    answer:
      "Depending on the severity of the violation, players may receive a Yellow Card, Orange Card, or Red Card which can lead to warnings, suspensions, or permanent bans.",
  },
  {
    question: "Where can I read the complete Rulebook?",
    answer:
      "The complete Season VII Official Rulebook can be downloaded from the Rules page.",
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <PageLayout
      
    >
      <PageHero
        current="FAQ"
        title="FREQUENTLY ASKED QUESTIONS"
        description="Find answers to the most common tournament questions."
      />

      <section className="mx-auto max-w-5xl px-6 py-20">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
            Support Center
          </p>

          <h2 className="text-5xl font-black uppercase text-white">
            Got Questions?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/60">
            Find quick answers to the most common questions regarding
            registrations, matchdays, gameplay rules, verification,
            scheduling, and tournament participation.
          </p>
        </motion.div>

        {/* FAQ */}

        <div className="space-y-5">
          {FAQS.map((faq, index) => (
            <motion.div
              key={faq.question}
              whileHover={{ scale: 1.01 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all hover:border-[#D4AF37]/30"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between p-7 text-left"
              >
                <h3 className="text-xl font-bold text-white">
                  {faq.question}
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
                      duration: 0.3,
                    }}
                    className="overflow-hidden border-t border-white/10"
                  >
                    <p className="px-7 py-6 leading-8 text-white/70">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <div className="overflow-hidden rounded-3xl border border-[#D4AF37]/20 bg-gradient-to-br from-[#D4AF37]/10 via-white/[0.03] to-transparent p-12 backdrop-blur-xl text-center">

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              Need More Help?
            </p>

            <h2 className="text-5xl font-black uppercase text-white">
              Still Have Questions?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
              If you couldn&apos;t find the answer you&apos;re looking for,
              don&apos;t worry. Our Admin Team is always available to assist
              you with tournament registrations, matchday issues,
              scheduling, technical support, or general inquiries.
            </p>

            <a
              href="/contact"
              className="mt-10 inline-flex items-center rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-[#E5BE45]"
            >
              Contact Admin Team
            </a>
          </div>
        </motion.div>
      </section>
    </PageLayout>
  );
}