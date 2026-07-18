import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Countdown from "@/components/countdown";
import LatestNews from "@/components/latestnews";
import Register from "@/components/register";
import Footer from "@/components/footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />

      <Navbar />

      <main className="bg-[#0A0A0A]">
        <Hero />

        <Countdown />

        <LatestNews />

        <Register />

        <Footer />
      </main>
    </>
  );
}