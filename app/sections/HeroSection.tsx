import SpotifyNowPlaying from "@/app/components/SpotifyNowPlaying";
import { siteConfig } from "@/lib/config";
import { getNowPlaying } from "@/lib/spotify";

export default async function HeroSection() {
  const track = await getNowPlaying();

  return (
    <section className="relative flex min-h-[auto] flex-col justify-center overflow-hidden px-6 pb-10 pt-24 md:min-h-[92svh] md:px-12 md:pb-20 md:pt-32">
      <div
        className="hero-animate mb-6 w-full md:absolute md:right-12 md:top-32 md:z-10 md:mb-0 md:w-[22rem]"
        style={{ animationDelay: "0.15s" }}
      >
        <SpotifyNowPlaying initialTrack={track} />
      </div>

      <p
        className="hero-animate mb-4 font-mono text-[0.7rem] uppercase tracking-[0.3em] opacity-40 md:mb-5"
        style={{ animationDelay: "0.2s" }}
      >
        {siteConfig.role} - {new Date().getFullYear()}
      </p>

      <div className="hero-animate inline-block max-w-full" style={{ animationDelay: "0.4s" }}>
        <h1
          className="font-bebas leading-[0.84] tracking-tight"
          style={{ fontSize: "clamp(5.8rem, 18vw, 11.5rem)" }}
        >
          <span className="relative inline-block isolate max-w-full">
            <span
              className="pointer-events-none absolute left-1/2 top-1/2 z-20 whitespace-nowrap font-serif normal-case"
              style={{
                fontFamily: "var(--font-signature)",
                fontSize: "1em",
                fontWeight: 400,
                letterSpacing: "0.02em",
                color: "#d8b38a",
                textShadow: "0 0 28px rgba(216, 179, 138, 0.2)",
                transform: "translate(-50%, -50%) rotate(-6deg)",
              }}
            >
              Yunus
            </span>
            <span className="relative z-0 text-[#f0ede6]">{siteConfig.shortName}</span>
          </span>
          <br />
          <em
            className="block text-accent not-italic"
            style={{ fontFamily: "var(--font-instrument)", fontSize: "1em" }}
          >
            BEST
          </em>
        </h1>
      </div>

      {!(typeof window !== "undefined" && window.innerWidth <= 768) && (
        <div
        className="hero-animate mt-8 flex flex-col items-start justify-between gap-6 md:mt-14 md:flex-row md:items-end"
        style={{ animationDelay: "0.6s" }}
      >
        <p className="max-w-xs font-mono text-[0.78rem] leading-loose opacity-50">
          {siteConfig.bio}
        </p>
        <div className="flex flex-col items-start gap-5 md:items-end">
          <div className="hidden md:flex md:flex-wrap md:justify-end md:gap-6">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.22em] opacity-30">
                Based in
              </span>
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] opacity-70">
                {siteConfig.location}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.22em] opacity-30">
                Status
              </span>
              <span
                className={`font-mono text-[0.7rem] uppercase tracking-[0.18em] ${
                  siteConfig.available ? "text-accent" : "text-[#8a8a8a]"
                }`}
              >
                {siteConfig.available ? "Available" : "Busy"}
              </span>
            </div>
          </div>

          <a
            href="#work"
            className="inline-flex items-center gap-3 bg-accent px-8 py-4 font-mono text-[0.75rem] font-medium uppercase tracking-widest text-white transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[3px_3px_0_#f0ede6]"
          >
            {"\u00C7al\u0131\u015Fmalar\u0131m"}
            <span>{"\u2197"}</span>
          </a>
        </div>
      </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#2a2a2a]" />
    </section>
  );
}
