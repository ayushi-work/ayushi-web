"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState, useSyncExternalStore } from "react";
import { flushSync } from "react-dom";

function useMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();
  if (!mounted) return <div className="h-8 w-8" />;

  const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const next = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    root.style.setProperty("--tx", `${e.clientX}px`);
    root.style.setProperty("--ty", `${e.clientY}px`);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => void;
    };
    if (!reduce && typeof doc.startViewTransition === "function") {
      doc.startViewTransition(() => {
        flushSync(() => setTheme(next));
      });
    } else {
      setTheme(next);
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label="toggle theme"
      data-cursor="toggle theme"
      className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] transition hover:opacity-80"
    >
      <span key={theme} className="theme-icon">
        {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
      </span>
    </button>
  );
}

const links = [
  ["about", "about"],
  ["skills", "skills"],
  ["projects", "projects"],
  ["notes", "notes"],
  ["playground", "playground"],
  ["watching", "watching"],
  ["contact", "contact"],
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-5">
        <Link href="#top" aria-label="back to top" className="text-xl leading-none transition hover:opacity-70">
          ☁️
        </Link>
        <nav className="hidden items-center gap-4 font-mono text-xs text-[var(--muted)] sm:flex">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="transition hover:text-[var(--foreground)]">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label="toggle menu"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] sm:hidden"
          >
            {open ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-[var(--border)] px-5 py-3 sm:hidden">
          <div className="grid gap-1">
            {links.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2 font-mono text-sm text-[var(--muted)] transition hover:bg-[var(--card)] hover:text-[var(--foreground)]"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

import { Reveal } from "./reveal";

export function Section({
  id,
  kicker,
  title,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-[var(--border)] py-14">
      <Reveal>
        <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--accent)]">
          {kicker}
        </p>
        <h2 className="font-display mt-2 text-3xl tracking-tight">{title}</h2>
      </Reveal>
      <Reveal delay={0.08}>
        <div className="mt-6">{children}</div>
      </Reveal>
    </section>
  );
}

export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--card)] px-2.5 py-1 font-mono text-[11px] text-[var(--muted)]">
      {children}
    </span>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-10 text-center">
      <p className="font-mono text-xs text-[var(--muted)]">
        gmt+5:30
      </p>
      <p className="mt-3 font-mono text-xs text-[var(--muted)]">
        designed &amp; built by ayushi yadav © 2026 • github.com/ayushi-work
      </p>
    </footer>
  );
}
