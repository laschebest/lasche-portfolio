import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center px-8 md:px-12 py-6 border-t border-[#2a2a2a]">
      <span className="font-mono text-[0.65rem] opacity-25 tracking-widest">
        © {new Date().getFullYear()} {siteConfig.name}
      </span>
      {!(typeof window !== "undefined" && window.innerWidth <= 768) && (
        <span className="font-mono text-[0.65rem] opacity-25 tracking-widest hidden sm:inline">
          {siteConfig.location}
        </span>
      )}

      <span className="font-mono text-[0.65rem] opacity-25 tracking-widest">Built with 💜</span>
    </footer>
  );
}

