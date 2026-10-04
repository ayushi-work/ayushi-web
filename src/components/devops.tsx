import { Section, Pill } from "./chrome";
import { Avatar } from "./avatar";
import Image from "next/image";
import { site, skills, experience, projects, oss, process, certs } from "@/content/site";
import { ArrowUpRight, GitPullRequest } from "lucide-react";

export function Hero() {
  return (
    <div id="top" className="py-14">
      <Avatar />
      <p className="font-mono text-xs text-[var(--muted)]">{site.hello}</p>
      <h1 className="font-display mt-3 text-5xl leading-[1.05] tracking-tight">
        i&apos;m {site.name}, a<br />
        <span className="italic text-[var(--accent)]">{site.role}</span> working
        on observability &amp; automation.
      </h1>
      <p className="mt-5 max-w-xl leading-7 text-[var(--muted)]">{site.pitch}</p>
      <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 font-mono text-xs">
        <span className="h-2 w-2 rounded-full bg-blue-500" /> {site.status}
      </p>
      <p className="mt-2 font-mono text-xs text-[var(--muted)]">{site.location}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="#contact"
          className="rounded-full bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-[var(--background)] transition hover:opacity-85"
        >
          book a call
        </a>
        <a
          href="/resume_ayushi.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-2.5 text-sm transition hover:opacity-80"
        >
          resume
        </a>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {site.socials.map((s) => (
          <a key={s.label} href={s.href} className="group inline-flex items-center gap-1 font-mono text-xs text-[var(--muted)] hover:text-[var(--foreground)]">
            {s.label} <ArrowUpRight size={12} className="transition group-hover:translate-x-px group-hover:-translate-y-px" />
          </a>
        ))}
      </div>
    </div>
  );
}

export function About() {
  return (
    <Section id="about" kicker="01: about" title="cloud & devops, end to end.">
      <div className="space-y-3 leading-7 text-[var(--muted)]">
        <p>• i work across the stack: aws infrastructure, terraform, ci/cd, and prometheus/grafana observability.</p>
        <p>• currently building incident-response platforms (polaris, remediate) that detect failures and trigger automated remediation.</p>
        <p>• upstream open-source contributor, and b.tech it student at kiet ghaziabad (expected 2028, gpa 8.11).</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {certs.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--card)] px-2.5 py-1 font-mono text-[11px] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--foreground)]"
          >
            {c.label} <ArrowUpRight size={11} />
          </a>
        ))}
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" kicker="02: skills" title="technical skills.">
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((g) => (
          <div key={g.group} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4">
            <p className="font-mono text-[11px] tracking-widest text-[var(--accent)]">{g.group}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.items.map((i) =>
                typeof i === "string" ? (
                  <Pill key={i}>{i}</Pill>
                ) : (
                  <a
                    key={i.label}
                    href={i.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--card)] px-2.5 py-1 font-mono text-[11px] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--foreground)]"
                  >
                    {i.label} <ArrowUpRight size={11} />
                  </a>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" kicker="03: experience" title="experience.">
      <div className="space-y-4">
        {experience.map((e) => (
          <div key={e.org} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--foreground)] font-mono text-xs font-bold text-[var(--background)]">
                {e.logo}
              </div>
              <div>
                <p className="font-medium">{e.org}</p>
                <p className="font-mono text-xs text-[var(--muted)]">{e.role} • {e.dates}</p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-[var(--muted)]">
              {e.points.map((p) => (
                <li key={p}>• {p}</li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {e.stack.map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
              {"links" in e && Array.isArray(e.links)
                ? e.links.map((l: { label: string; href: string }) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-[11px] text-[var(--accent)] hover:underline"
                    >
                      {l.label} ↗
                    </a>
                  ))
                : null}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="projects" kicker="04: projects" title="selected projects.">
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <div key={p.title} className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]">
            <div className="relative flex h-32 items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900">
              {"image" in p && p.image ? (
                <Image
                  src={p.image as string}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 400px"
                  loading="lazy"
                  className="object-cover"
                />
              ) : (
                <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
                  arch diagram placeholder
                </span>
              )}
            </div>
            <div className="p-5">
              <p className="font-mono text-[11px] text-[var(--accent)]">{p.badge}</p>
              <h3 className="mt-1 text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>
              <div className="mt-4 flex gap-4 font-mono text-xs">
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="hover:underline">github ↗</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Github() {
  return (
    <Section id="opensource" kicker="05: github & oss" title="open source contributions.">
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="font-mono text-xs text-[var(--muted)]">
            live contribution graph, click to open my profile
          </p>
          <a
            href="https://github.com/ayushi-work"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[var(--accent)] hover:underline"
          >
            github.com/ayushi-work ↗
          </a>
        </div>
        <a
          href="https://github.com/ayushi-work"
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="open profile"
          className="mt-4 block overflow-x-auto rounded-xl"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://ghchart.rshah.org/2563eb/ayushi-work"
            alt="ayushi's github contribution graph"
            loading="lazy"
            className="w-full min-w-[640px] dark:hidden"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://ghchart.rshah.org/60a5fa/ayushi-work"
            alt=""
            aria-hidden
            loading="lazy"
            className="hidden w-full min-w-[640px] dark:block"
          />
        </a>
        <div className="mt-5 space-y-2">
          {oss.map((o) => (
            <div key={o.pr} className="flex items-center gap-2 rounded-xl border border-[var(--border)] px-3 py-2.5 text-sm">
              <GitPullRequest size={15} className="text-[var(--accent)]" />
              <span className="font-mono text-xs text-[var(--muted)]">{o.repo}</span>
              <span className="truncate">{o.pr}</span>
              <span className="ml-auto font-mono text-[11px] text-[var(--muted)]">{o.state}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Process() {
  return (
    <Section id="process" kicker="06: process" title="how i work.">
      <div className="grid gap-4 sm:grid-cols-2">
        {process.map((p) => (
          <div key={p.step} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5">
            <p className="font-mono text-xs text-[var(--accent)]">{p.step}</p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{p.desc}</p>
            <p className="mt-3 font-mono text-[11px] text-[var(--muted)]">{p.tools}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
