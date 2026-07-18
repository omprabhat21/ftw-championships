import PageLayout from "@/components/pagelayout";
import PageHero from "@/components/common/PageHero";
export default function TeamsPage() {
  return (
    <PageLayout
     
    >
      <PageHero
  current="Teams"
  title="TEAM DATABASE"
  description="Explore all registered teams, captains and tournament records."
/>
      <h2 className="text-3xl font-bold text-white">
        Team Database
      </h2>

      <p className="mt-4 text-white/70">
        Coming Soon...
      </p>
    </PageLayout>
  );
}