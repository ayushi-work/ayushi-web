"use client";

import Image from "next/image";
import { useState } from "react";
import { Section } from "./chrome";
import { posts, designs, writingProfiles, watching } from "@/content/site";
import { ArrowUpRight } from "lucide-react";

const platforms = ["all", "medium", "aws builder"] as const;

export function Notes() {
  const [filter, setFilter] = useState<(typeof platforms)[number]>("all");
  const shown = posts.filter(
    (p) => filter === "all" || p.platform.includes(filter)
  );
  return (
    <Section id="notes" kicker="07: notes" title="writing.">
      <div className="flex flex-wrap items-center gap-2">
        {writingProfiles.map((w) => (
          <a
            key={w.label}
            href={w.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 font-mono text-xs transition hover:opacity-80"
          >
            {w.label} <span className="text-[var(--muted)]">{w.handle}</span>
            <ArrowUpRight size={12} className="transition group-hover:translate-x-px group-hover:-translate-y-px" />
          </a>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        {platforms.map((p) => (
          <button
            key={p}
            onClick={() => setFilter(p)}
            className={`rounded-full border px-3 py-1 font-mono text-xs transition ${
              filter === p
                ? "bg-[var(--foreground)] text-[var(--background)]"
                : "border-[var(--border)] bg-[var(--card)] text-[var(--muted)]"
            }`}
          >
            {p}
          </button>
        ))}
      </div>
      <div className="mt-4 divide-y divide-[var(--border)] rounded-2xl border border-[var(--border)] bg-[var(--card)]">
        {shown.map((p) => (
          <a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-5 transition hover:opacity-80"
          >
            <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-[var(--muted)]">
              <span
                className={`rounded-full px-2 py-0.5 ${
                  p.platform.includes("aws builder")
                    ? "bg-orange-500/10 text-orange-600 dark:text-orange-400"
                    : "bg-blue-500/10 text-blue-700 dark:text-blue-400"
                }`}
              >
                {p.platform}
              </span>
              <span>{p.date}</span>•<span>{p.read}</span>
            </div>
            <h3 className="mt-1.5 font-medium tracking-tight group-hover:underline">
              {p.title}
            </h3>
            <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{p.excerpt}</p>
          </a>
        ))}
      </div>
    </Section>
  );
}

export function Playground() {
  const [filter, setFilter] = useState("all");
  const [active, setActive] = useState<(typeof designs)[number] | null>(null);
  const cats = ["all", "posters", "ui"];
  const shown = designs.filter((d) => filter === "all" || d.tag === filter);
  return (
    <Section id="playground" kicker="08: playground" title="design work.">
      <div className="flex gap-2">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full border px-3 py-1 font-mono text-xs transition ${
              filter === c
                ? "bg-[var(--foreground)] text-[var(--background)]"
                : "border-[var(--border)] bg-[var(--card)] text-[var(--muted)]"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="mt-4 columns-2 gap-3 sm:columns-3 [&>*]:mb-3">
        {shown.map((d) => (
          <button
            key={d.id}
            onClick={() => setActive(d)}
            data-cursor="view"
            className="group block w-full break-inside-avoid overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] text-left transition hover:opacity-90"
          >
            <Image
              src={d.image}
              alt={d.title}
              width={d.w}
              height={d.h}
              loading="lazy"
              className="w-full"
            />
            <div className="flex items-baseline justify-between gap-2 p-3">
              <p className="truncate text-sm">{d.title}</p>
              <p className="shrink-0 font-mono text-[11px] text-[var(--muted)]">{d.tag}</p>
            </div>
          </button>
        ))}
      </div>
      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-6"
          onClick={() => setActive(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-[var(--card)] p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-hidden rounded-xl border border-[var(--border)]">
              <Image
                src={active.image}
                alt={active.title}
                width={active.w}
                height={active.h}
                className="w-full"
              />
            </div>
            <p className="mt-4 font-mono text-xs text-[var(--muted)]">{active.tag}</p>
            <h3 className="font-display mt-1 text-2xl">{active.title}</h3>
            <p className="mt-1 text-sm text-[var(--muted)]">{active.caption}</p>
            <div className="mt-4 flex gap-3">
              <a
                href={active.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[var(--foreground)] px-4 py-2 text-sm text-[var(--background)]"
              >
                {active.linkLabel}
              </a>
              <button
                onClick={() => setActive(null)}
                className="rounded-full border border-[var(--border)] px-4 py-2 text-sm"
              >
                close
              </button>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}

export function Watching() {
  const [artOk, setArtOk] = useState<Record<string, boolean>>({});
  return (
    <Section id="watching" kicker="09: watching" title="currently watching.">
      <div className="grid gap-4 sm:grid-cols-2">
        {watching.map((w, i) => (
          <div
            key={w.title}
            className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]"
          >
            <div
              className={`relative flex h-28 items-center justify-between overflow-hidden bg-gradient-to-br p-5 ${
                i % 2 === 0
                  ? "from-indigo-100 to-blue-100 dark:from-indigo-950 dark:to-blue-950"
                  : "from-sky-100 to-cyan-100 dark:from-sky-950 dark:to-cyan-950"
              }`}
            >
              {"image" in w && w.image && artOk[w.title] !== false ? (
                <Image
                  src={w.image as string}
                  alt={w.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 400px"
                  loading="lazy"
                  className={`object-cover ${(w as { pos?: string }).pos ?? ""}`}
                  onError={() => setArtOk((s) => ({ ...s, [w.title]: false }))}
                />
              ) : (
                <span className="text-4xl font-bold lowercase text-neutral-800/80 dark:text-neutral-100/80">
                  {w.title.charAt(0)}
                </span>
              )}
              <span className="absolute right-4 top-4 rounded-full border border-[var(--border)] bg-[var(--background)]/80 px-2.5 py-1 font-mono text-[11px] text-[var(--muted)] backdrop-blur-sm">
                {w.platform}
              </span>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold tracking-tight">{w.title}</h3>
              <p className="mt-1 font-mono text-[11px] text-[var(--muted)]">{w.status}</p>
              <div className="mt-3 h-1 overflow-hidden rounded-full bg-[var(--border)]">
                <div
                  className="h-full rounded-full bg-[var(--accent)]"
                  style={{ width: `${Math.round(w.progress * 100)}%` }}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{w.note}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact" kicker="10: contact" title="get in touch.">
      <p className="leading-7 text-[var(--muted)]">
        i am currently open to cloud/devops roles and freelance infrastructure work. feel free to reach out. i typically respond within 24 hours.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href="https://mail.google.com/mail/?view=cm&to=ayushi.work007@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-[var(--background)]"
        >
          ayushi.work007@gmail.com
        </a>
        <a
          href="/resume_ayushi.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-2.5 text-sm"
        >
          resume pdf
        </a>
      </div>
      <p className="mt-4 font-mono text-xs text-[var(--muted)]">
        ghaziabad, india • email is the fastest way to reach me
      </p>
    </Section>
  );
}
