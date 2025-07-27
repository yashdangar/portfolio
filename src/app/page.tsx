"use client";
import {
  MapPin,
  BriefcaseBusiness,
  BookOpen
} from "lucide-react";

export default function Home() {


  return (
    <main className="min-h-screen bg-black text-white p-6 md:p-12 lg:p-24">
      <div className="w-full sm:w-5/6 md:w-2/3 lg:w-1/2  2xl:w-1/4 mx-auto">
          <header className="mb-5 p-2">
            <h1 className="text-xl md:text-3xl font-bold mb-2">Yash Dangar</h1>
            <p className="text-gray-400 mb-6 lg:text-md text-xs">
              Hi , I&apos;m Yash - a software engineer building Elegant
              interfaces for the modern web
            </p>
          </header>
          <section className="text-xs md:text-sm lg:text-md text-zinc-400 flex flex-col gap-1 mb-5">
            <p className="flex mb-1 gap-2 items-center italic">
              <MapPin />
              Surat, India
            </p>
            <p className="flex mb-1 gap-2 items-center italic">
              <BriefcaseBusiness />
              Ex.SDE-1 at
              <a
                className="underline underline-offset-1 decoration-zinc-600 hover:decoration-current transition"
                href="https://buffindia.com"
              >
                BuffIndia
              </a>
            </p>
            <p className="flex mb-1 gap-2 items-center italic">
              <BookOpen />
              B.Tech. from SCET,surat
            </p>
          </section>
      </div>
    </main>
  );
}
