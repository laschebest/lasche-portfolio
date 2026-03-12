import Reveal from "@/app/components/Reveal";
import { siteConfig } from "@/lib/config";

export default function SkillsSection() {
  return (
    <section id="skills" className="border-b border-[#2a2a2a] px-8 py-28 md:px-12">
      <Reveal>
        <p className="mb-4 font-mono text-[0.65rem] uppercase tracking-[0.3em] opacity-30">
          {"// 03 - Yetenekler"}
        </p>
        <h2 className="font-bebas leading-none" style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>
          SKILL
          <br />
          SET
        </h2>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-16 grid grid-cols-1 gap-px border border-[#2a2a2a] bg-[#2a2a2a] md:grid-cols-3">
          {siteConfig.skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-[#080808] p-10 transition-colors hover:bg-[#0d0d0d] md:p-12"
            >
              <div className="mb-6 text-3xl">{skill.icon}</div>
              <div className="mb-4 font-bebas text-2xl tracking-wide">{skill.name}</div>
              <ul className="flex flex-col gap-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="relative pl-4 font-mono text-[0.72rem] tracking-wide opacity-40 before:absolute before:left-0 before:content-['-'] before:opacity-40"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
