"use client";

type Variant = "wave" | "tilt" | "curve";

type Props = {
  fromColor?: string;
  toColor?: string;
  variant?: Variant;
  flip?: boolean;
  className?: string;
};

export default function SectionDivider({
  fromColor = "#ffffff",
  toColor = "#f8fafc",
  variant = "wave",
  flip = false,
  className,
}: Props) {
  const path =
    variant === "wave"
      ? "M0,40 C150,80 350,0 600,40 C850,80 1050,0 1200,40 L1200,120 L0,120 Z"
      : variant === "curve"
        ? "M0,80 Q600,0 1200,80 L1200,120 L0,120 Z"
        : "M0,120 L1200,0 L1200,120 Z";

  return (
    <div
      aria-hidden
      className={className}
      style={{ background: fromColor, lineHeight: 0 }}
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="block h-12 w-full sm:h-16"
        style={{ transform: flip ? "scaleY(-1)" : undefined }}
      >
        <path d={path} fill={toColor} />
      </svg>
    </div>
  );
}
