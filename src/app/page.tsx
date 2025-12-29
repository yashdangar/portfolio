import HomeContent from "@/components/HomeContent";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-6 md:p-12 lg:p-24">
      <div className="w-full sm:w-5/6 lg:w-1/2 mx-auto">
        <HomeContent />
      </div>
    </main>
  );
}
