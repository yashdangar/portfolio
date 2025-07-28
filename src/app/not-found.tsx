"use client";
import { Home, ArrowLeft } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white p-6 md:p-12 lg:p-24">
      <div className="w-full sm:w-5/6 md:w-2/3 lg:w-1/2 2xl:w-1/4 mx-auto">
        <BlurFade delay={0.25} inView>
          <div className="text-center">
            {/* 404 Number */}
            <div className="mb-8">
              <h1 className="text-8xl md:text-9xl font-bold text-white/10 mb-4">
                404
              </h1>
              <div className="text-2xl md:text-3xl font-bold mb-4">
                Page Not Found
              </div>
            </div>

            {/* Error Message */}
            <div className="mb-8">
              <p className="text-gray-400 text-sm md:text-base mb-4">
                Oops! The page you&apos;re looking for doesn&apos;t exist.
              </p>
              <p className="text-zinc-500 text-xs md:text-sm">
                It might have been moved, deleted, or you entered the wrong URL.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/"
                className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-md text-white transition-all duration-200 group"
              >
                <Home size={18} className="group-hover:scale-110 transition-transform" />
                <span>Go Home</span>
              </Link>
              
              <button
                onClick={() => window.history.back()}
                className="flex items-center gap-2 px-6 py-3 text-gray-400 hover:text-white transition-colors group"
              >
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                <span>Go Back</span>
              </button>
            </div>

            {/* Decorative Element */}
            <div className="mt-12 opacity-20">
              <div className="w-16 h-16 border-2 border-white/20 rounded-full mx-auto animate-pulse"></div>
            </div>
          </div>
        </BlurFade>
      </div>
    </main>
  );
} 