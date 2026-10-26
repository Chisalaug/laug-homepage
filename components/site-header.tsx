"use client";

import { motion, useReducedMotion } from "framer-motion";

import { ThemeSwitcher } from "@/components/theme-switcher";
import { NAV_ITEMS } from "@/lib/site";

export function SiteHeader({ entered }: { entered: boolean }) {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-6 sm:pt-5"
      initial={false}
      animate={
        entered
          ? { y: 0, opacity: 1 }
          : { y: reduceMotion ? 0 : -18, opacity: 0 }
      }
      transition={{ duration: reduceMotion ? 0.15 : 0.55, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-page">
        <div className="site-header-shell flex items-center justify-between gap-3 px-3 py-2 sm:px-4">
          <a
            href="#top"
            className="group flex min-w-0 items-center gap-2.5"
            aria-label="回到页面顶部"
          >
            <span className="brand-mark">L</span>
            <span className="flex min-w-0 flex-col leading-none">
              <span className="truncate font-mono text-[12px] font-bold tracking-[0.12em] text-ink">
                LAUG<span className="text-accent-strong">.ROOM</span>
              </span>
              <span className="mt-1 hidden text-[10px] tracking-[0.16em] text-ink-soft sm:block">
                LAUG的小屋
              </span>
            </span>
          </a>

          <nav
            className="hidden items-center gap-5 md:flex xl:gap-6"
            aria-label="页面导航"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="group relative py-1 text-[13px] font-medium text-ink-soft transition-colors hover:text-ink"
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <ThemeSwitcher />
        </div>
      </div>
    </motion.header>
  );
}
