import Reveal from "@/app/components/Reveal";
import { siteConfig } from "@/lib/config";

const contactItems = [
  { label: "E-Posta", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
  { label: "GitHub", value: "github.com/laschebest", href: siteConfig.contact.github },
  { label: "Instagram", value: "@yunussmichaelson", href: siteConfig.contact.instagram },
  { label: "Twitter / X", value: "@yunusmichaelson", href: siteConfig.contact.twitter },
].filter((item) => item.href);

export default function ContactSection() {
  return (
    <section id="contact" className="grid grid-cols-1 items-center gap-20 px-8 py-28 md:grid-cols-2 md:px-12">
      <Reveal>
        <p className="mb-4 font-mono text-[0.65rem] uppercase tracking-[0.3em] opacity-30">
          {"// 04 - İletişim"}
        </p>
        <h2 className="font-bebas leading-[0.9]" style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}>
          LET&apos;S
          <br />
          <em className="text-accent" style={{ fontFamily: "var(--font-instrument)", fontStyle: "italic" }}>
            work
          </em>
          <br />
          TOGETHER
        </h2>
      </Reveal>

      <Reveal delay={150} className="flex flex-col gap-0">
        {contactItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="group flex items-center justify-between border-b border-[#2a2a2a] py-5 text-[#f0ede6] transition-colors hover:text-accent"
          >
            <div>
              <div className="mb-1 font-mono text-[0.65rem] uppercase tracking-[0.2em] opacity-35">{item.label}</div>
              <div className="font-mono text-[0.9rem]">{item.value}</div>
            </div>
            <span className="text-sm opacity-30 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100">
              ↗
            </span>
          </a>
        ))}
      </Reveal>
    </section>
  );
}
