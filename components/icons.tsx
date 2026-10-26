import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const baseProps: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: "false",
};

export function SparkleIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 3.5c.38 4.3 1.7 5.62 6 6-4.3.38-5.62 1.7-6 6-.38-4.3-1.7-5.62-6-6 4.3-.38 5.62-1.7 6-6Z" />
      <path d="M19 16.5c.14 1.58.62 2.06 2.2 2.2-1.58.14-2.06.62-2.2 2.2-.14-1.58-.62-2.06-2.2-2.2 1.58-.14 2.06-.62 2.2-2.2Z" />
      <path d="M5 2.5c.1 1.13.45 1.48 1.58 1.58C5.45 4.18 5.1 4.53 5 5.66c-.1-1.13-.45-1.48-1.58-1.58C4.55 3.98 4.9 3.63 5 2.5Z" />
    </svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function ArrowDownIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 4v15" />
      <path d="m6.5 13.5 5.5 5.5 5.5-5.5" />
    </svg>
  );
}

export function ArrowLeftIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="m14.5 5-7 7 7 7" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="m9.5 5 7 7-7 7" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.8 20c.55-3.7 3.2-5.8 7.2-5.8s6.65 2.1 7.2 5.8" />
    </svg>
  );
}

export function LayersIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="m12 3.5 8.5 4.6L12 12.7 3.5 8.1 12 3.5Z" />
      <path d="m4 12 8 4.3 8-4.3" />
      <path d="m4 15.9 8 4.3 8-4.3" />
    </svg>
  );
}

export function ApertureIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.2 3.9 3.4 5.9M19.6 7.4h-6.8M20.4 15.3l-3.4-5.9M14.7 20.8l-3.4-5.9M4.3 17h6.8M3.6 8.7l3.4 5.9" />
    </svg>
  );
}

export function MessageIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M20.5 11.2c0 4.2-3.8 7.5-8.5 7.5-1.1 0-2.2-.2-3.2-.55L4 20l1.2-3.7a6.9 6.9 0 0 1-1.7-4.5c0-4.2 3.8-7.5 8.5-7.5s8.5 3.4 8.5 6.9Z" />
      <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" strokeWidth="2.6" />
    </svg>
  );
}

export function BriefcaseIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="3.5" y="7.5" width="17" height="12" rx="2" />
      <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5M3.5 12.2h17" />
      <path d="M10.5 12.2v2h3v-2" />
    </svg>
  );
}

export function CodeIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="m8.5 7.5-5 4.5 5 4.5M15.5 7.5l5 4.5-5 4.5M13.5 4.5l-3 15" />
    </svg>
  );
}

export function CornerMarkIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M4 9V4h5M20 15v5h-5" />
    </svg>
  );
}

export function BilibiliIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="3.2" y="6.8" width="17.6" height="12.7" rx="3.2" />
      <path d="m7.4 3.4 3.1 3.4M16.6 3.4l-3.1 3.4" />
      <path d="M8.2 11.5v2.2M15.8 11.5v2.2" />
    </svg>
  );
}

export function GithubIcon(props: IconProps) {
  return (
    <svg
      {...baseProps}
      fill="currentColor"
      stroke="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 .7C5.7.7.6 5.8.6 12.1c0 5 3.3 9.3 7.8 10.8.6.1.8-.2.8-.6v-2.2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.4-1.3-1.8-1.3-1.8-1-.7.1-.7.1-.7 1.1.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0C17 3.9 18 4.2 18 4.2c.6 1.6.2 2.8.1 3.1.8.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.2c0 .4.2.7.8.6a11.4 11.4 0 0 0 7.8-10.8C23.4 5.8 18.3.7 12 .7Z" />
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="2.8" y="5.4" width="18.4" height="13.2" rx="4" />
      <path d="m10.2 9.2 4.8 2.8-4.8 2.8V9.2Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
      <path d="m4.5 7.5 7.5 5.7 7.5-5.7" />
    </svg>
  );
}

export function CopyIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="8.5" y="8.5" width="11" height="11" rx="2" />
      <path d="M15.5 8.5v-2a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="m5 12.5 4.2 4L19 6.8" />
    </svg>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <svg
      {...baseProps}
      fill="currentColor"
      stroke="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M8.2 5.5c0-.8.9-1.3 1.6-.9l9 6.5c.6.4.6 1.3 0 1.7l-9 6.5c-.7.4-1.6-.1-1.6-.9v-13Z" />
    </svg>
  );
}

export function QqIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 3.5c-2.8 0-4.8 2-4.8 5 0 1.1-.3 2-.9 3.1-.8 1.4-1.5 2.6-1.5 3.8 0 1.1.7 1.8 1.7 1.8.6 0 1.1-.2 1.5-.6.8 1.4 2.2 2.2 4 2.2s3.2-.8 4-2.2c.4.4.9.6 1.5.6 1 0 1.7-.7 1.7-1.8 0-1.2-.7-2.4-1.5-3.8-.6-1.1-.9-2-.9-3.1 0-3-2-5-4.8-5Z" />
      <path d="M9.2 9.2h.01M14.8 9.2h.01" strokeWidth="2.6" />
    </svg>
  );
}
