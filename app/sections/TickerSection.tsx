import { siteConfig } from "@/lib/config";

export default function TickerSection() {
  const items = [...siteConfig.ticker, ...siteConfig.ticker];

  return (
    <div className="overflow-hidden whitespace-nowrap bg-accent py-3.5 text-white">
      <div className="inline-flex ticker-animate">
        {items.map((item, i) => (
          <span key={i} className="px-10 font-bebas text-lg tracking-widest">
            {item}
            <span className="ml-10 opacity-40">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
