"use client";

import Image from "next/image";

type Size = "xs" | "sm" | "md" | "lg" | "xl";

const SIZES: Record<Size, { w: number; h: number; cdnW: string }> = {
  xs: { w: 16, h: 12, cdnW: "w40" },
  sm: { w: 20, h: 15, cdnW: "w40" },
  md: { w: 28, h: 21, cdnW: "w80" },
  lg: { w: 48, h: 36, cdnW: "w160" },
  xl: { w: 64, h: 48, cdnW: "w160" },
};

type Props = {
  countryCode: string;
  alt?: string;
  size?: Size;
  rounded?: boolean;
  className?: string;
};

/**
 * Country flag image from flagcdn.com — works on Windows/all platforms
 * (unlike Unicode flag emoji which falls back to "GB", "JP" text on Windows).
 */
export default function Flag({
  countryCode,
  alt,
  size = "md",
  rounded = true,
  className,
}: Props) {
  const cfg = SIZES[size];
  const cc = countryCode.toLowerCase();
  return (
    <Image
      src={`https://flagcdn.com/${cfg.cdnW}/${cc}.png`}
      width={cfg.w}
      height={cfg.h}
      alt={alt ?? `Cờ ${cc.toUpperCase()}`}
      unoptimized
      className={`inline-block flex-shrink-0 object-cover shadow-sm ring-1 ring-black/5 ${
        rounded ? "rounded-[3px]" : ""
      } ${className ?? ""}`}
      style={{ width: cfg.w, height: cfg.h }}
    />
  );
}
