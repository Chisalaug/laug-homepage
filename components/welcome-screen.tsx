"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

import {
  ArrowUpRightIcon,
  BriefcaseIcon,
  SparkleIcon,
} from "@/components/icons";
import { IMAGES, type ThemeName } from "@/lib/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type WelcomeScreenProps = {
  onEnter: (theme: ThemeName) => void;
};

export function WelcomeScreen({ onEnter }: WelcomeScreenProps) {
  const reduceMotion = Boolean(useReducedMotion());

  const screenVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: reduceMotion ? 0.2 : 0.65, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: reduceMotion ? 1 : 1.045,
      filter: reduceMotion ? "blur(0px)" : "blur(10px)",
      transition: {
        duration: reduceMotion ? 0.2 : 0.55,
        ease: reduceMotion ? "easeOut" : [0.64, 0, 0.78, 0],
      },
    },
  };

  const contentVariants: Variants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.08,
        delayChildren: reduceMotion ? 0 : 0.18,
      },
    },
  };

  const itemVariants: Variants = reduceMotion
    ? {
        initial: { opacity: 0 },
        animate: {
          opacity: 1,
          transition: { duration: 0.25, ease: "easeOut" },
        },
      }
    : {
        initial: { opacity: 0, y: 20 },
        animate: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.68, ease: EASE },
        },
      };

  const avatarVariants: Variants = reduceMotion
    ? {
        initial: { opacity: 0 },
        animate: {
          opacity: 1,
          transition: { duration: 0.25, ease: "easeOut" },
        },
      }
    : {
        initial: { opacity: 0, scale: 0.82, rotate: -5 },
        animate: {
          opacity: 1,
          scale: 1,
          rotate: 0,
          transition: { duration: 0.85, ease: EASE },
        },
      };

  return (
    <motion.div
      className="welcome-screen fixed inset-0 z-[100] flex min-h-[100svh] flex-col items-center overflow-y-auto px-4 py-8 sm:px-6 sm:py-12"
      variants={screenVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-title"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <img
          src={IMAGES.avatar}
          alt=""
          width={300}
          height={300}
          className="welcome-image"
          draggable={false}
        />
        <div className="welcome-veil absolute inset-0" />
        <div className="welcome-grid absolute inset-0" />
      </div>

      <div className="mono-label absolute left-5 top-5 z-10 hidden items-center gap-2 text-white/45 sm:flex">
        <span className="h-px w-7 bg-white/30" />
        LAUG.ROOM / ENTRY
      </div>
      <div className="mono-label absolute bottom-5 right-5 z-10 hidden text-white/35 sm:block">
        FRAME 001 · 2026
      </div>

      <motion.div
        className="welcome-panel relative z-10 my-auto w-full max-w-3xl px-5 py-7 sm:px-10 sm:py-10"
        variants={contentVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="flex items-center justify-between gap-4 text-white/55"
          variants={itemVariants}
        >
          <p className="mono-label flex items-center gap-2">
            <span className="status-dot" />
            SYSTEM ONLINE
          </p>
          <p className="mono-label hidden sm:block">PERSONAL SPACE</p>
        </motion.div>

        <div className="mt-6 flex flex-col items-center text-center">
          <motion.div className="relative" variants={avatarVariants}>
            <motion.span
              className="absolute -inset-3 rounded-full border border-dashed border-white/20"
              animate={
                reduceMotion ? undefined : { rotate: 360 }
              }
              transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
              aria-hidden
            />
            <div className="welcome-avatar-ring h-24 w-24 overflow-hidden rounded-full p-1 sm:h-28 sm:w-28">
              <img
                src={IMAGES.avatar}
                alt="laug 的头像"
                width={300}
                height={300}
                className="h-full w-full rounded-full object-cover"
                draggable={false}
              />
            </div>
            <span className="absolute -right-1 top-1 grid h-7 w-7 place-items-center rounded-full border border-white/25 bg-white/15 text-white/85 backdrop-blur-md">
              <SparkleIcon className="h-3.5 w-3.5" />
            </span>
          </motion.div>

          <motion.p
            className="mono-label mt-7 text-[#ffb4dc]"
            variants={itemVariants}
          >
            WELCOME TO / 欢迎光临
          </motion.p>

          <motion.h1
            id="welcome-title"
            className="mt-3 text-[clamp(1.7rem,6.8vw,3.45rem)] font-black leading-[1.16] tracking-tight text-white"
            variants={itemVariants}
          >
            欢迎来到
            <span className="mx-1 bg-gradient-to-r from-[#ff9dce] via-[#ffd1e8] to-[#c4b5fd] bg-clip-text text-transparent">
              laug
            </span>
            的小屋
          </motion.h1>

          <motion.p
            className="mt-4 max-w-md text-sm leading-6 text-white/70 sm:text-[15px]"
            variants={itemVariants}
          >
            选一个身份推门进来。主题只改变视觉，内容完全一致，进入后随时还能切换。
          </motion.p>
        </div>

        <motion.div
          className="mt-8 grid gap-3 sm:grid-cols-2"
          variants={itemVariants}
        >
          <motion.button
            type="button"
            onClick={() => onEnter("anime")}
            className="welcome-anime-button group flex w-full items-center gap-3 rounded-2xl px-4 py-4 text-left outline-offset-4"
            whileHover={reduceMotion ? undefined : { y: -3, scale: 1.005 }}
            whileTap={reduceMotion ? undefined : { scale: 0.975 }}
            transition={{ type: "spring", stiffness: 380, damping: 26 }}
          >
            <span className="grid h-10 w-10 flex-none place-items-center rounded-xl border border-white/25 bg-white/15">
              <SparkleIcon className="h-5 w-5" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[15px] font-semibold leading-5 text-white">
                以二次元身份进入
              </span>
              <span className="mt-1 block font-mono text-[10px] tracking-[0.12em] text-white/70">
                ANIME MODE / 粉色霓虹
              </span>
            </span>
            <ArrowUpRightIcon className="h-4 w-4 flex-none text-white/80 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </motion.button>

          <motion.button
            type="button"
            onClick={() => onEnter("professional")}
            className="welcome-pro-button group flex w-full items-center gap-3 rounded-2xl px-4 py-4 text-left outline-offset-4"
            whileHover={reduceMotion ? undefined : { y: -3, scale: 1.005 }}
            whileTap={reduceMotion ? undefined : { scale: 0.975 }}
            transition={{ type: "spring", stiffness: 380, damping: 26 }}
          >
            <span className="grid h-10 w-10 flex-none place-items-center rounded-xl border border-slate-200 bg-slate-100 text-blue-700">
              <BriefcaseIcon className="h-5 w-5" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[15px] font-semibold leading-5 text-slate-900">
                以普通人身份进入
              </span>
              <span className="mt-1 block font-mono text-[10px] tracking-[0.12em] text-slate-500">
                PROFESSIONAL / 清晰简洁
              </span>
            </span>
            <ArrowUpRightIcon className="h-4 w-4 flex-none text-slate-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-4 text-center sm:flex-row sm:text-left"
          variants={itemVariants}
        >
          <p className="font-mono text-[10px] tracking-[0.12em] text-white/35">
            每次打开都会先来到这里
          </p>
          <p className="font-mono text-[10px] tracking-[0.12em] text-white/35">
            THEME SWITCHABLE INSIDE
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
