import PageLayout from "@/components/pagelayout";
import PageHero from "@/components/common/PageHero";
export default function SeasonPage() {
  return (
    <PageLayout
      
    >
      <PageHero
  current="Current Season"
  title="CURRENT SEASON"
  description="Follow fixtures, standings, top scorers, MVP race and tournament progress."
/>
      <h2 className="text-3xl font-bold text-white">
        Season VII
      </h2>

      <p className="mt-4 text-white/70">
        Registration Opens Soon.
      </p>
    </PageLayout>
  );
}