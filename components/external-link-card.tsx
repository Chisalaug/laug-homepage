"use client";

import {
  AnimatePresence,
  motion,
  useAnimationControls,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, useState, type MouseEvent } from "react";

import {
  BilibiliIcon,
  GithubIcon,
  PlayIcon,
  ArrowUpRightIcon,
} from "@/components/icons";

type ExternalLinkCardProps = {
  href: string;
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  mediaVariant?: "cover" | "avatar";
  badge: string;
  platform: "bilibili" | "github";
  meta: string;
  actionLabel: string;
  index: number;
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function ExternalLinkCard({
  href,
  title,
  description,
  imageSrc,
  imageAlt,
  mediaVariant = "cover",
  badge,
  platform,
  meta,
  actionLabel,
  index,
}: ExternalLinkCardProps) {
  const reduceMotion = Boolean(useReducedMotion());
  const controls = useAnimationControls();
  const [opening, setOpening] = useState(false);
  const resetTimer = useRef<number | null>(null);

  const PlatformIcon = platform === "bilibili" ? BilibiliIcon : GithubIcon;
  const platformLabel = platform === "bilibili" ? "BILIBILI" : "GITHUB";
  const isAvatarMedia = mediaVariant === "avatar";

  useEffect(() => {
    return () => {
      if (resetTimer.current !== null) {
        window.clearTimeout(resetTimer.current);
      }
    };
  }, []);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      opening
    ) {
      if (opening) event.preventDefault();
      return;
    }

    event.preventDefault();
    setOpening(true);

    // Open the tab inside the original click gesture so popup blockers do not
    // swallow the destination, then commit the URL after the card animation.
    const nextWindow = window.open("about:blank", "_blank");
    if (nextWindow) {
      try {
        nextWindow.opener = null;
      } catch {
        // Cross-window opener access can be blocked; navigation still works.
      }
    }

    void (async () => {
      if (!reduceMotion) {
        await controls.start({
          scale: 0.958,
          transition: { duration: 0.16, ease: "easeOut" },
        });
        await new Promise<void>((resolve) => {
          window.setTimeout(resolve, 170);
        });
      }

      if (nextWindow && !nextWindow.closed) {
        nextWindow.location.href = href;
      } else {
        window.location.href = href;
      }

      resetTimer.current = window.setTimeout(
        () => {
          setOpening(false);
          void controls.start({
            scale: 1,
            transition: { duration: reduceMotion ? 0 : 0.28, ease: EASE },
          });
        },
        reduceMotion ? 260 : 520,
      );
    })();
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="surface-card external-card group relative flex h-full flex-col overflow-hidden p-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
      aria-label={`${title}，在新窗口打开${platform === "bilibili" ? "B站" : "GitHub"}`}
      aria-busy={opening}
      animate={controls}
      whileHover={reduceMotion ? undefined : { y: -7 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
    >
      <div className="external-card-media relative aspect-video overflow-hidden rounded-[calc(var(--radius-card)_-_0.5rem)] border border-line/60 bg-surface-muted">
        {mediaVariant === "cover" ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            width={1920}
            height={1080}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
            draggable={false}
          />
        ) : (
          <>
            <div
              className="absolute inset-0 bg-gradient-to-br from-accent/22 via-surface-muted to-accent-alt/15"
              aria-hidden
            />
            <div className="theme-grid" aria-hidden />
            <div className="absolute inset-0 grid place-items-center">
              <div className="github-avatar-ring h-24 w-24 overflow-hidden rounded-full border border-white/50 p-1 sm:h-28 sm:w-28">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  width={1080}
                  height={1080}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full rounded-full object-cover"
                  draggable={false}
                />
              </div>
            </div>
          </>
        )}

        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#170b19]/62 via-transparent to-transparent"
          aria-hidden
        />

        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/22 bg-black/30 px-2.5 py-1.5 font-mono text-[9px] tracking-[0.14em] text-white/90 backdrop-blur-md">
          <PlatformIcon className="h-3 w-3" />
          {badge}
        </span>
        <span
          className={
            isAvatarMedia
              ? "absolute right-3 top-3 font-mono text-[10px] tracking-[0.18em] text-ink-soft/65"
              : "absolute right-3 top-3 font-mono text-[10px] tracking-[0.18em] text-white/60"
          }
        >
          {String(index).padStart(2, "0")}
        </span>
        <span
          className={
            isAvatarMedia
              ? "absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full border border-line/85 bg-surface/85 text-ink-soft shadow-soft backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              : "absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full border border-white/25 bg-white/12 text-white backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          }
        >
          <ArrowUpRightIcon className="h-4 w-4" />
        </span>
      </div>

      <div className="flex flex-1 flex-col px-2 pb-1.5 pt-4 sm:px-3">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-[9px] tracking-[0.16em] text-accent-strong">
            {platformLabel}
          </span>
          <span className="font-mono text-[9px] tracking-[0.12em] text-ink-soft/50">
            LATEST / {String(index).padStart(2, "0")}
          </span>
        </div>

        <h3 className="mt-2 text-[17px] font-bold leading-6 tracking-tight text-ink sm:text-lg">
          {title}
        </h3>

        {description ? (
          <p className="mt-2 text-xs leading-6 text-ink-soft">{description}</p>
        ) : null}

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-line/60 pt-4">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-ink-soft">
            {platform === "bilibili" ? (
              <PlayIcon className="h-3 w-3 text-accent-strong" />
            ) : (
              <GithubIcon className="h-3.5 w-3.5 text-accent-strong" />
            )}
            {meta}
          </span>
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-[0.04em] text-ink-soft/70 transition-colors group-hover:text-accent-strong">
            {actionLabel}
            <ArrowUpRightIcon className="h-3 w-3" />
          </span>
        </div>
      </div>

      <AnimatePresence>
        {opening ? (
          <motion.div
            className="opening-veil absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 rounded-[var(--radius-card)] text-center"
            initial={
              reduceMotion ? { opacity: 0 } : { opacity: 0, y: "100%" }
            }
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: "100%" }}
            transition={{
              duration: reduceMotion ? 0.15 : 0.34,
              ease: [0.22, 1, 0.36, 1],
            }}
            aria-hidden
          >
            <span className="grid h-12 w-12 place-items-center rounded-full border border-white/25 bg-white/12 text-white backdrop-blur-md">
              <PlatformIcon className="h-5 w-5" />
            </span>
            <span className="font-mono text-[10px] tracking-[0.2em] text-white/60">
              OPENING / {platformLabel}
            </span>
            <span className="text-sm font-semibold text-white">
              正在打开{platform === "bilibili" ? " B站" : " GitHub"}…
            </span>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.a>
  );
}
