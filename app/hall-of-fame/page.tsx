import PageLayout from "@/components/pagelayout";
import PageHero from "@/components/common/PageHero";
export default function HallOfFamePage() {
  return (
    <PageLayout
      
    >
      <PageHero
  current="Hall of Fame"
  title="HALL OF FAME"
  description="Celebrating champions, MVPs and unforgettable moments."
/>
      <h2 className="text-3xl font-bold text-white">
        Champions Archive
      </h2>

      <p className="mt-4 text-white/70">
        Coming Soon...
      </p>
    </PageLayout>
  );
}