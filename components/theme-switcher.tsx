"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { BriefcaseIcon, SparkleIcon } from "@/components/icons";
import type { ThemeName } from "@/lib/site";

const OPTIONS: Array<{
  id: ThemeName;
  label: string;
  title: string;
}> = [
  { id: "anime", label: "二次元", title: "切换到二次元主题" },
  { id: "professional", label: "专业", title: "切换到专业主题" },
];

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const reduceMotion = Boolean(useReducedMotion());

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeTheme: ThemeName =
    mounted && theme === "professional" ? "professional" : "anime";

  return (
    <div className="theme-switcher" role="group" aria-label="切换视觉主题">
      {OPTIONS.map((option) => {
        const active = activeTheme === option.id;

        return (
          <motion.button
            key={option.id}
            type="button"
            onClick={() => setTheme(option.id)}
            className="theme-option"
            aria-pressed={active}
            aria-label={option.title}
            title={option.title}
            whileTap={reduceMotion ? undefined : { scale: 0.94 }}
            transition={{ type: "spring", stiffness: 420, damping: 28 }}
          >
            {active ? (
              <motion.span
                layoutId="active-theme-pill"
                className="theme-switcher-pill"
                aria-hidden
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 420, damping: 36 }
                }
              />
            ) : null}
            <span className="relative z-10 flex items-center gap-1.5">
              {option.id === "anime" ? (
                <SparkleIcon className="h-3.5 w-3.5" />
              ) : (
                <BriefcaseIcon className="h-3.5 w-3.5" />
              )}
              <span className="theme-option-label">{option.label}</span>
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
