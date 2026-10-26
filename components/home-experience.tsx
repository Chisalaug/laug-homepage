"use client";

import { AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

import { HomePage } from "@/components/home-page";
import { WelcomeScreen } from "@/components/welcome-screen";
import type { ThemeName } from "@/lib/site";

export function HomeExperience() {
  const [entered, setEntered] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const homeRef = useRef<HTMLDivElement>(null);
  const { setTheme } = useTheme();

  useEffect(() => {
    document.body.style.overflow = entered ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [entered]);

  useEffect(() => {
    const node = homeRef.current;
    if (!node) return;

    if (entered) {
      node.removeAttribute("inert");
    } else {
      node.setAttribute("inert", "");
    }
  }, [entered]);

  function handleEnter(theme: ThemeName) {
    if (leaving) return;
    setTheme(theme);
    setLeaving(true);
  }

  return (
    <div className="relative">
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          setEntered(true);
        }}
      >
        {!leaving ? (
          <WelcomeScreen key="welcome" onEnter={handleEnter} />
        ) : null}
      </AnimatePresence>

      <div
        ref={homeRef}
        aria-hidden={!entered}
        className={
          entered
            ? "relative opacity-100"
            : "pointer-events-none relative min-h-[100svh] select-none opacity-0"
        }
      >
        <HomePage entered={entered} />
      </div>
    </div>
  );
}
