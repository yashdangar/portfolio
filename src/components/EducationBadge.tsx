import { BookOpen } from "lucide-react";

export default function EducationBadge() {
  return (
    <div className="mb-5 flex flex-wrap gap-2">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r from-white/10 via-white/5 to-transparent px-3 py-2 text-xs md:text-sm text-zinc-50 shadow-sm shadow-white/5 backdrop-blur">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/10">
          <BookOpen
            aria-hidden="true"
            className="w-3.5 h-3.5 text-white/80"
          />
        </span>
        <span className="whitespace-nowrap font-medium">
          B.Tech. from SCET, Surat
        </span>
      </div>
    </div>
  );
}

