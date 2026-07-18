import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({
  children,
}: PageLayoutProps) {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#0A0A0A]">
        {children}
      </main>

      <Footer />
    </>
  );
}