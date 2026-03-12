import Reveal from "@/app/components/Reveal";
import { siteConfig } from "@/lib/config";

export default function AboutSection() {
  return (
    <section id="about" className="grid grid-cols-1 gap-20 border-b border-[#2a2a2a] px-8 py-28 md:grid-cols-2 md:px-12">
      <Reveal>
        <p className="mb-8 font-mono text-[0.65rem] uppercase tracking-[0.3em] opacity-30">
          {"// 01 - Hakkımda"}
        </p>
        <h2 className="font-serif italic leading-[1.2]" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
          Kod yazan{" "}
          <strong
            className="font-bebas not-italic text-accent"
            style={{ fontSize: "1.1em", fontFamily: "var(--font-bebas)" }}
          >
            TASARIMCI
          </strong>
          <br />
          tasarlayan{" "}
          <strong
            className="font-bebas not-italic text-accent"
            style={{ fontSize: "1.1em", fontFamily: "var(--font-bebas)" }}
          >
            GELİŞTİRİCİ
          </strong>
        </h2>
      </Reveal>

      <Reveal delay={150} className="flex flex-col justify-end gap-8">
        <p className="font-mono text-[0.82rem] leading-loose opacity-55">{siteConfig.bioExtended}</p>

        <div className="grid grid-cols-2 gap-px border border-[#2a2a2a] bg-[#2a2a2a]">
          {siteConfig.stats.map((stat) => (
            <div key={stat.label} className="bg-[#080808] p-6">
              <div className="font-bebas text-5xl leading-none text-accent">{stat.value}</div>
              <div className="mt-1.5 font-mono text-[0.65rem] uppercase tracking-[0.15em] opacity-35">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
