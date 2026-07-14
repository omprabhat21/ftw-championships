export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center text-white">
      <h1 className="text-7xl font-bold tracking-widest">
        FTW
      </h1>

      <h2 className="mt-4 text-2xl tracking-[0.6em] text-gray-300">
        CHAMPIONSHIPS
      </h2>

      <p className="mt-8 text-lg text-yellow-500">
        Season 7
      </p>

      <p className="mt-3 text-gray-400">
        Official Website Coming Soon
      </p>

      <button className="mt-10 rounded-lg border border-yellow-500 px-8 py-3 text-yellow-500 transition hover:bg-yellow-500 hover:text-black">
        Registration Opens Soon
      </button>
    </main>
  );
}