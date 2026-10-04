"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

function useFinePointer() {
  return useSyncExternalStore(
    () => () => {},
    () =>
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  );
}

// unique cursor: a blue dot that sticks to the pointer, trailed by a ring
// that morphs into a tiny lowercase label pill naming whatever you're hovering.
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const lastLabel = useRef<string | null>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const enabled = useFinePointer();

  useEffect(() => {
    if (!enabled) return;

    const pos = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      setVisible(true);
      const t = e.target as HTMLElement | null;
      const hit = t?.closest?.("a, button, [data-cursor]");
      let next: string | null = null;
      if (hit) {
        const custom = hit.getAttribute("data-cursor");
        const text = (custom || hit.textContent || "")
          .trim()
          .toLowerCase()
          .replace(/\s+/g, " ")
          .slice(0, 18);
        next = text || "go";
      }
      if (next !== lastLabel.current) {
        lastLabel.current = next;
        setLabel(next);
      }
    };
    const onLeave = () => setVisible(false);

    const loop = () => {
      ring.x += (pos.x - ring.x) * 0.16;
      ring.y += (pos.y - ring.y) * 0.16;
      if (dotRef.current)
        dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      if (ringRef.current)
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    document.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed inset-0 z-[100] transition-opacity duration-200 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        ref={dotRef}
        className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
      />
      <div ref={ringRef} className="absolute left-0 top-0">
        {label ? (
          <span className="block whitespace-nowrap rounded-full border border-[var(--accent)] bg-[var(--background)]/90 px-2.5 py-1 text-[10px] leading-none text-[var(--accent)] backdrop-blur-sm">
            {label}
          </span>
        ) : (
          <span className="block h-7 w-7 rounded-full border border-[var(--accent)]/60" />
        )}
      </div>
    </div>
  );
}
