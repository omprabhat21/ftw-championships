import PageHero from "@/components/common/PageHero";
import { Phone } from "lucide-react";

const ADMINS = [
  {
    name: "Anubhav",
    role: "Lead Admin",
    phone: "+91  79804 79877",
  },
  {
    name: "Soumik",
    role: "Lead Admin",
    phone: "+91 80992 41287",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <PageHero
        current="Contact"
        title="CONTACT US"
        description="Need assistance? Get in touch with the FTW Championships administration team."
      />

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
            We&apos;re Here to Help
          </p>

          <h2 className="text-5xl font-black uppercase">
            Contact the Admin Team
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/60">
            For tournament registrations, match-related queries, technical
            support, or any other assistance, feel free to contact our
            administrators.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {ADMINS.map((admin) => (
            <div
              key={admin.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-10 transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-white/[0.07]"
            >
              <h3 className="text-3xl font-bold">{admin.name}</h3>

              <p className="mt-2 uppercase tracking-[0.3em] text-[#D4AF37]">
                {admin.role}
              </p>

              <a
                href={`tel:${admin.phone}`}
                className="mt-10 inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/30 px-5 py-3 text-white transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10"
              >
                <Phone size={18} className="text-[#D4AF37]" />
                {admin.phone}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20 border-t border-white/10 pt-10 text-center text-white/50">
          We typically respond to inquiries within <span className="text-[#D4AF37] font-medium">24 hours</span>.
        </div>
      </section>
    </main>
  );
}