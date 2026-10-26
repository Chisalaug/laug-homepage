"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { CheckIcon, CopyIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

type CopyState = "idle" | "copied" | "error";

function fallbackCopy(value: string) {
  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  textarea.style.pointerEvents = "none";
  document.body.appendChild(textarea);
  textarea.select();
  const succeeded = document.execCommand("copy");
  document.body.removeChild(textarea);
  if (!succeeded) throw new Error("copy command was rejected");
}

export function CopyButton({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) {
  const [state, setState] = useState<CopyState>("idle");
  const reduceMotion = Boolean(useReducedMotion());
  const resetTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimer.current !== null) {
        window.clearTimeout(resetTimer.current);
      }
    };
  }, []);

  async function handleCopy() {
    let nextState: CopyState = "error";

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        fallbackCopy(value);
      }
      nextState = "copied";
    } catch {
      try {
        fallbackCopy(value);
        nextState = "copied";
      } catch {
        nextState = "error";
      }
    }

    setState(nextState);

    if (resetTimer.current !== null) {
      window.clearTimeout(resetTimer.current);
    }
    resetTimer.current = window.setTimeout(
      () => setState("idle"),
      nextState === "error" ? 2600 : 1800,
    );
  }

  const copied = state === "copied";
  const failed = state === "error";

  return (
    <>
      <motion.button
        type="button"
        onClick={() => void handleCopy()}
        className={cn(
          "inline-flex min-h-10 items-center gap-2 rounded-[var(--radius-control)] border border-line/85 bg-surface/75 px-3.5 py-2 text-[11px] font-semibold text-ink-soft transition-colors hover:border-accent/40 hover:text-accent-strong",
          copied && "border-accent/30 text-accent-strong",
          failed && "border-red-300/70 text-red-600",
          className,
        )}
        aria-label={copied ? `${label}已复制` : label}
        whileTap={reduceMotion ? undefined : { scale: 0.95 }}
        transition={{ type: "spring", stiffness: 420, damping: 26 }}
      >
        {copied ? (
          <CheckIcon className="h-3.5 w-3.5" />
        ) : (
          <CopyIcon className="h-3.5 w-3.5" />
        )}
        <span>{copied ? "已复制" : failed ? "复制失败" : "复制"}</span>
      </motion.button>
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? `${label}已复制` : failed ? `${label}复制失败` : ""}
      </span>
    </>
  );
}
