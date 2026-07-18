import PageLayout from "@/components/pagelayout";
import PageHero from "@/components/common/PageHero";
export default function PlayersPage() {
  return (
    <PageLayout
     
    >
      <PageHero
  current="Players"
  title="PLAYER DATABASE"
  description="Browse every registered player participating in FTW Championships."
/>
      <h2 className="text-3xl font-bold text-white">
        Player Database
      </h2>

      <p className="mt-4 text-white/70">
        Coming Soon...
      </p>
    </PageLayout>
  );
}