"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "hero", label: "Bắt đầu" },
  { id: "stats", label: "Số liệu" },
  { id: "career-map", label: "Bản đồ nghề" },
  { id: "features", label: "Tính năng" },
  { id: "roadmap", label: "Lộ trình" },
  { id: "blog", label: "Chuyện nghề" },
  { id: "signup", label: "Đăng ký" },
];

export default function SectionProgressDots() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const items = SECTIONS.map((s) => ({
      id: s.id,
      el: document.getElementById(s.id),
    })).filter(
      (x): x is { id: string; el: HTMLElement } => Boolean(x.el),
    );
    if (items.length === 0) return;

    let raf = 0;
    const compute = () => {
      raf = 0;
      const line = window.innerHeight * 0.35;
      let current = items[0].id;
      for (const { id, el } of items) {
        const top = el.getBoundingClientRect().top;
        if (top - line <= 1) current = id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="pointer-events-none fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 lg:block"
    >
      <ul className="pointer-events-auto flex flex-col gap-3">
        {SECTIONS.map((s) => {
          const isActive = active === s.id;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-label={s.label}
                aria-current={isActive ? "true" : undefined}
                className="group relative flex items-center justify-end gap-2"
              >
                <span
                  className={`whitespace-nowrap rounded-full bg-white/95 px-2.5 py-1 text-xs font-medium text-slate-700 shadow-sm transition-all duration-200 ${
                    isActive
                      ? "opacity-100 translate-x-0"
                      : "pointer-events-none translate-x-2 opacity-0 group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100"
                  }`}
                >
                  {s.label}
                </span>
                <span
                  className={`relative flex h-3 w-3 items-center justify-center rounded-full transition-all duration-300 ${
                    isActive
                      ? "scale-125 bg-[var(--accent)] shadow-md"
                      : "bg-slate-300 group-hover:bg-slate-500"
                  }`}
                >
                  {isActive && (
                    <span
                      aria-hidden
                      className="absolute h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-50"
                    />
                  )}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
