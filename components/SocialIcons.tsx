type IconProps = { className?: string };

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M13.5 21.95v-7.83h2.63l.4-3.05h-3.03V9.13c0-.88.25-1.48 1.5-1.48h1.6V4.92c-.78-.08-1.56-.12-2.34-.12-2.32 0-3.91 1.42-3.91 4.02v2.25H7.7v3.05h2.65v7.83a10 10 0 1 1 3.15 0Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TikTokIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M16.6 2h-3v13.1a3 3 0 1 1-3-3v-3.06a6.04 6.04 0 1 0 6 6V8.6a7.6 7.6 0 0 0 4.4 1.4V7a4.6 4.6 0 0 1-4.4-5Z" />
    </svg>
  );
}
