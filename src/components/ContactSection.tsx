import { Linkedin, Github, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="mb-5" aria-label="Contact Information">
      <h2 className="text-white text-md mb-3">Contact</h2>
      <nav className="flex gap-4" aria-label="Social Media Links">
        <a
          href="https://github.com/yashdangar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-white transition-colors"
          aria-label="Visit GitHub Profile"
        >
          <Github size={20} aria-hidden="true" />
        </a>
        <a
          href="https://x.com/YashDangar20"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-white transition-colors"
          aria-label="Visit X (Twitter) Profile"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-zinc-400 hover:text-white transition-colors"
            aria-hidden="true"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a
          href="https://linkedin.com/in/yashdangar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-white transition-colors"
          aria-label="Visit LinkedIn Profile"
        >
          <Linkedin size={20} aria-hidden="true" />
        </a>
        <a
          href="mailto:yashdangar123@gmail.com"
          className="text-zinc-400 hover:text-white transition-colors"
          aria-label="Send Email to yashdangar123@gmail.com"
        >
          <Mail size={20} aria-hidden="true" />
        </a>
      </nav>
    </section>
  );
}

