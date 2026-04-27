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
    const elements = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to viewport center
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0, 0.1, 0.5, 1],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
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
