import Reveal from "@/app/components/Reveal";
import { siteConfig } from "@/lib/config";
import { Repo } from "@/types/index";

async function getTopRepos(username: string): Promise<Repo[]> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const repos: Repo[] = await res.json();

    return repos
      .filter((repo) => repo.description?.trim())
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 3);
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}

export default async function WorkSection() {
  const username = siteConfig.contact.github.split("/").pop() ?? "";
  const repos = await getTopRepos(username);

  return (
    <section id="work" className="border-b border-[#2a2a2a] px-8 py-28 md:px-12">
      <Reveal className="mb-16 flex items-end justify-between">
        <div>
          <p className="mb-4 font-mono text-[0.65rem] uppercase tracking-[0.3em] opacity-30">
            {"// 02 - Projeler"}
          </p>
          <h2 className="font-bebas leading-none" style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>
            SELECTED
            <br />
            WORK
          </h2>
        </div>
        <span className="hidden font-mono text-[0.7rem] tracking-wider opacity-30 md:block">
          {repos.length} proje
        </span>
      </Reveal>

      <Reveal delay={100}>
        <div className="flex flex-col gap-px border border-[#2a2a2a] bg-[#2a2a2a]">
          {repos.map((repo, i) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-[48px_1fr] items-center gap-6 bg-[#080808] px-6 py-8 transition-colors hover:bg-[#0f0f0f] md:grid-cols-[60px_1fr_auto_auto] md:gap-8 md:px-10"
            >
              <span className="font-bebas text-2xl text-[#666]">{String(i + 1).padStart(2, "0")}</span>

              <div>
                <div
                  className="mb-1.5 font-serif text-xl italic md:text-2xl"
                  style={{ fontFamily: "var(--font-instrument)" }}
                >
                  {repo.name}
                </div>
                <div className="font-mono text-[0.7rem] tracking-wide opacity-35">
                  {repo.description ?? "-"}
                </div>
              </div>

              <div className="hidden items-center gap-2 md:flex">
                {repo.language && (
                  <span className="border border-[#2a2a2a] px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.15em] opacity-50">
                    {repo.language}
                  </span>
                )}
                {repo.stargazers_count > 0 && (
                  <span className="border border-[#2a2a2a] px-3 py-1.5 font-mono text-[0.6rem] tracking-[0.15em] opacity-50">
                    * {repo.stargazers_count}
                  </span>
                )}
              </div>

              <span className="hidden text-lg opacity-20 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100 md:block">
                ↗
              </span>
            </a>
          ))}

          <a
            href={siteConfig.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between border-t border-[#2a2a2a] bg-[#080808] px-6 py-6 transition-colors hover:bg-[#0f0f0f] md:px-10"
          >
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] opacity-40 transition-opacity group-hover:opacity-100">
              Tüm repolar
            </span>
            <span className="font-bebas text-xl tracking-widest text-accent opacity-60 transition-all group-hover:translate-x-1 group-hover:opacity-100">
              MORE →
            </span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
