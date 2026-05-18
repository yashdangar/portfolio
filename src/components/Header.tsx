import { BlurFade } from "@/components/magicui/blur-fade";

export default function Header() {
  return (
    <BlurFade delay={0.05} inView>
      <header className="p-2">
        <div className="flex items-center justify-between">
          <h1 className="text-xl md:text-3xl font-bold mb-2">
            Yash Dangar
          </h1>
          <a
            href="https://drive.google.com/file/d/139UoaOnm__OT99Ons_GKaUr-4TyiYpo3/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors underline underline-offset-1 decoration-zinc-600 hover:decoration-current"
            aria-label="Download Resume"
          >
            <p className="flex mb-1 gap-2 items-center italic">Resume</p>
          </a>
        </div>
        <p className="text-gray-400 mb-3 lg:text-md text-xs">
          Hi , I&apos;m Yash - a software engineer building Elegant
          interfaces for the modern web.
        </p>
      </header>
    </BlurFade>
  );
}

