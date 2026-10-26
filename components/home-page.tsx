"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

import { CopyButton } from "@/components/copy-button";
import { ExternalLinkCard } from "@/components/external-link-card";
import {
  ApertureIcon,
  ArrowDownIcon,
  ArrowUpRightIcon,
  BilibiliIcon,
  CodeIcon,
  CornerMarkIcon,
  GithubIcon,
  MailIcon,
  PlayIcon,
  QqIcon,
  SparkleIcon,
  YoutubeIcon,
} from "@/components/icons";
import { PhotographyGallery } from "@/components/photography-gallery";
import { SectionHeading } from "@/components/section-heading";
import { SectionReveal } from "@/components/section-reveal";
import { SiteHeader } from "@/components/site-header";
import {
  CONTACT,
  FRIENDS,
  GITHUB_PROFILE,
  GITHUB_PROJECT,
  IMAGES,
  INTRO,
  LINKS,
  VIDEOS,
} from "@/lib/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function HomePage({ entered }: { entered: boolean }) {
  const reduceMotion = Boolean(useReducedMotion());

  const heroContainer: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.09,
        delayChildren: reduceMotion ? 0 : 0.08,
      },
    },
  };

  const heroItem: Variants = reduceMotion
    ? {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { duration: 0.22, ease: "easeOut" },
        },
      }
    : {
        hidden: { opacity: 0, y: 26 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.72, ease: EASE },
        },
      };

  const heroFrame: Variants = reduceMotion
    ? {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { duration: 0.22, ease: "easeOut" },
        },
      }
    : {
        hidden: { opacity: 0, y: 28, scale: 0.97, rotate: 1.2 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: 0,
          transition: { duration: 0.86, ease: EASE },
        },
      };

  return (
    <>
      <BackgroundDecor />
      <SiteHeader entered={entered} />

      <motion.main id="top" className="relative z-10 overflow-x-clip">
        <BilibiliHero
          entered={entered}
          reduceMotion={reduceMotion}
          container={heroContainer}
          item={heroItem}
          frame={heroFrame}
        />
        <LatestWorks />
        <GithubSection reduceMotion={reduceMotion} />
        <PhotographySection />
        <AboutSection />
        <FriendsSection reduceMotion={reduceMotion} />
      </motion.main>

      <ContactFooter />
    </>
  );
}

function BackgroundDecor() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="theme-grid" />
      <div className="ambient-orb -left-24 top-20 h-72 w-72 animate-float bg-accent/25 sm:h-96 sm:w-96" />
      <div className="ambient-orb right-[-7rem] top-[26rem] h-80 w-80 animate-pulse-soft bg-accent-alt/20 sm:h-[28rem] sm:w-[28rem]" />
      <div className="ambient-orb bottom-[-6rem] left-1/3 h-64 w-64 bg-accent/15" />
      <div className="absolute inset-x-[12%] top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </div>
  );
}

function BilibiliHero({
  entered,
  reduceMotion,
  container,
  item,
  frame,
}: {
  entered: boolean;
  reduceMotion: boolean;
  container: Variants;
  item: Variants;
  frame: Variants;
}) {
  return (
    <section
      id="bilibili"
      className="relative mx-auto w-full max-w-page scroll-mt-28 px-5 pb-16 pt-28 sm:px-8 sm:pt-36 lg:min-h-[90svh] lg:pb-24 lg:pt-44"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14">
        <motion.div
          variants={container}
          initial="hidden"
          animate={entered ? "show" : "hidden"}
        >
          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-line/90 bg-surface/70 px-3 py-1.5 shadow-soft backdrop-blur-md">
              <span className="status-dot" />
              <span className="mono-label text-ink-soft">
                BILIBILI / 动漫区UP主
              </span>
            </span>
            <span className="font-mono text-[10px] tracking-[0.14em] text-ink-soft/65">
              LAUG.ROOM / 2026
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 max-w-[11ch] text-[clamp(2.8rem,8.2vw,5.6rem)] font-black leading-[0.99] tracking-[-0.055em] text-ink"
          >
            欢迎来到
            <span className="text-gradient"> laug </span>
            的小屋
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-[15px] leading-7 text-ink-soft sm:text-base sm:leading-8"
          >
            动漫、科技数码、旅行摄影，还有一些想认真做好的作品。
            这里是 <span className="whitespace-nowrap">laug（千咲酱）</span>{" "}
            的小屋，也是我的 B 站频道入口。
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <motion.a
              href={LINKS.bilibili}
              target="_blank"
              rel="noopener noreferrer"
              className="action-primary bilibili-button group px-6 py-4 text-sm font-semibold"
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 24 }}
            >
              <BilibiliIcon className="h-5 w-5" />
              我的B站主页
              <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </motion.a>
            <motion.a
              href="#bilibili-works"
              className="action-secondary group px-5 py-4 text-sm font-semibold"
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 24 }}
            >
              看看最新作品
              <ArrowDownIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </motion.a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-2 border-t border-line/65 pt-5"
          >
            {["动漫", "科技数码", "旅行摄影", "动漫区UP主"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line/80 bg-surface/55 px-3 py-1.5 text-[11px] font-medium text-ink-soft backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={frame}
          initial="hidden"
          animate={entered ? "show" : "hidden"}
          className="relative mx-auto w-full max-w-[23rem] sm:max-w-[28rem] lg:ml-auto"
        >
          <div
            className="absolute -inset-8 rounded-[50%] bg-gradient-to-br from-accent/30 via-accent-alt/15 to-transparent blur-3xl"
            aria-hidden
          />

          <motion.div
            className="surface-card relative z-10 p-3"
            whileHover={reduceMotion ? undefined : { y: -6 }}
            transition={{ type: "spring", stiffness: 240, damping: 24 }}
          >
            <div className="flex items-center justify-between gap-3 px-2 pb-3 pt-1">
              <span className="mono-label flex items-center gap-2 text-ink-soft">
                <BilibiliIcon className="h-3.5 w-3.5 text-accent-strong" />
                LATEST UPLOADS
              </span>
              <span className="font-mono text-[9px] tracking-[0.16em] text-ink-soft/60">
                03 / WORKS
              </span>
            </div>

            <div className="grid aspect-[4/3] grid-cols-5 grid-rows-2 gap-2">
              <div className="group relative col-span-3 row-span-2 overflow-hidden rounded-[calc(var(--radius-card)_-_0.5rem)] border border-line/60">
                <img
                  src={IMAGES.cover1}
                  alt="视频封面：你醒了？现在是2024年"
                  width={1920}
                  height={1080}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  draggable={false}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#180b1b]/72 via-transparent to-transparent"
                  aria-hidden
                />
                <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/25 px-2 py-1 font-mono text-[8px] tracking-[0.12em] text-white/80 backdrop-blur-md">
                  <PlayIcon className="h-2.5 w-2.5" />
                  FEATURED
                </span>
              </div>

              {[
                {
                  src: IMAGES.cover2,
                  alt: "视频封面：为什么你看动漫会哭啊...",
                  index: "02",
                },
                {
                  src: IMAGES.cover3,
                  alt: "视频封面：回到你梦开始的地方",
                  index: "03",
                },
              ].map((cover) => (
                <div
                  key={cover.src}
                  className="group relative col-span-2 overflow-hidden rounded-[calc(var(--radius-card)_-_0.5rem)] border border-line/60"
                >
                  <img
                    src={cover.src}
                    alt={cover.alt}
                    width={2560}
                    height={1440}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.045]"
                    draggable={false}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#180b1b]/55 via-transparent to-transparent"
                    aria-hidden
                  />
                  <span className="absolute bottom-2 left-2 font-mono text-[8px] tracking-[0.16em] text-white/75">
                    {cover.index}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between gap-3 px-1 pb-1 pt-3">
              <span className="mono-label text-ink-soft/60">
                ANIME / TECH / LIFE
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[9px] tracking-[0.12em] text-accent-strong">
                <BilibiliIcon className="h-3.5 w-3.5" />
                BILIBILI
                <SparkleIcon className="h-3 w-3" />
              </span>
            </div>
          </motion.div>

          <div
            className="absolute -left-3 -top-4 z-20 hidden animate-float rounded-xl border border-line/80 bg-surface/85 px-3 py-2 shadow-soft backdrop-blur-lg sm:flex"
            aria-hidden
          >
            <p className="flex items-center gap-2 font-mono text-[9px] tracking-[0.12em] text-ink-soft">
              <SparkleIcon className="h-3.5 w-3.5 text-accent" />
              动漫区UP主
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function LatestWorks() {
  return (
    <section
      id="bilibili-works"
      className="relative scroll-mt-28 border-y border-line/55 bg-surface/30 backdrop-blur-[2px]"
    >
      <div className="mx-auto max-w-page px-5 py-16 sm:px-8 sm:py-24">
        <SectionReveal>
          <SectionHeading
            index="01"
            eyebrow="BILIBILI / 最新作品"
            title="最新作品"
            description="最近的三条投稿。点击卡片，会先展开，再打开 B 站。"
          />

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="inline-flex items-center gap-2 font-mono text-[9px] tracking-[0.14em] text-ink-soft/65">
              <PlayIcon className="h-3 w-3 text-accent-strong" />
              3 VIDEOS / CLICK TO OPEN
            </span>
            <a
              href={LINKS.bilibili}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-1.5 text-xs font-semibold text-accent-strong"
            >
              前往我的B站主页
              <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3 lg:gap-5">
            {VIDEOS.map((video, index) => (
              <ExternalLinkCard
                key={video.href}
                href={video.href}
                title={video.title}
                imageSrc={video.cover}
                imageAlt={video.coverAlt}
                badge="BILIBILI"
                platform="bilibili"
                meta={`播放量 ${video.views}`}
                actionLabel="在 B站打开"
                index={index + 1}
              />
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

function GithubSection({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <SectionShell id="github">
      <SectionReveal>
        <SectionHeading
          index="02"
          eyebrow="GITHUB / 代码与项目"
          title="GitHub"
          description="代码、项目和一些折腾记录。点击项目卡片，同样会先展开再跳转。"
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-[0.82fr_1.18fr] lg:gap-5">
          <motion.a
            href={GITHUB_PROFILE.href}
            target="_blank"
            rel="noopener noreferrer"
            className="surface-card group relative flex h-full flex-col overflow-hidden p-6 sm:p-8"
            whileHover={reduceMotion ? undefined : { y: -5 }}
            whileTap={reduceMotion ? undefined : { scale: 0.985 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            aria-label="访问 Chisalaug 的 GitHub 主页，在新窗口打开"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="mono-label text-accent-strong">
                PROFILE / GITHUB
              </span>
              <GithubIcon className="h-5 w-5 text-ink-soft/55" />
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="github-avatar-ring h-20 w-20 flex-none overflow-hidden rounded-full border border-white/50 p-1 sm:h-24 sm:w-24">
                <img
                  src={GITHUB_PROFILE.avatar}
                  alt={GITHUB_PROFILE.avatarAlt}
                  width={1080}
                  height={1080}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full rounded-full object-cover"
                  draggable={false}
                />
              </div>
              <div className="min-w-0">
                <p className="mono-label text-ink-soft/60">GITHUB</p>
                <h3 className="mt-1.5 truncate text-2xl font-extrabold tracking-tight">
                  {GITHUB_PROFILE.name}
                </h3>
              </div>
            </div>

            <p className="mt-5 max-w-xs text-xs leading-6 text-ink-soft">
              代码、项目和一些折腾记录，都在这里。
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["CODE", "PROJECTS", "NOTES"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-line/75 px-2.5 py-1 font-mono text-[8px] tracking-[0.12em] text-ink-soft/60"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto flex items-center justify-between gap-4 border-t border-line/60 pt-4">
              <span className="text-xs font-semibold text-ink-soft transition-colors group-hover:text-accent-strong">
                访问 GitHub 主页
              </span>
              <span className="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface/70 text-ink-soft transition-all duration-300 group-hover:border-accent/30 group-hover:bg-accent-soft group-hover:text-accent-strong">
                <ArrowUpRightIcon className="h-4 w-4" />
              </span>
            </div>

            <span
              className="pointer-events-none absolute -bottom-8 -right-2 font-display text-[7rem] font-black leading-none text-accent/5"
              aria-hidden
            >
              GH
            </span>
          </motion.a>

          <ExternalLinkCard
            href={GITHUB_PROJECT.href}
            title={GITHUB_PROJECT.title}
            description={GITHUB_PROJECT.description}
            imageSrc={GITHUB_PROJECT.image}
            imageAlt={GITHUB_PROJECT.imageAlt}
            mediaVariant="avatar"
            badge="GITHUB"
            platform="github"
            meta="GitHub 项目"
            actionLabel="打开项目"
            index={1}
          />
        </div>
      </SectionReveal>
    </SectionShell>
  );
}

function PhotographySection() {
  return (
    <SectionShell id="photography">
      <SectionReveal>
        <SectionHeading
          index="03"
          eyebrow="PHOTOGRAPHY / 旅行摄影"
          title="旅行随手拍的"
          description="路上遇到的光、云和城市。每次打开页面，照片顺序都会重新打乱。"
        />

        <div className="mt-5 flex items-center justify-between gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-line/80 bg-surface/65 px-3 py-1.5 backdrop-blur-md">
            <ApertureIcon className="h-3.5 w-3.5 text-accent-strong" />
            <span className="mono-label text-ink-soft">6 PHOTOS / RANDOM</span>
          </span>
          <span className="hidden font-mono text-[9px] tracking-[0.14em] text-ink-soft/60 sm:block">
            CLICK TO EXPAND
          </span>
        </div>

        <div className="mt-6">
          <PhotographyGallery />
        </div>
      </SectionReveal>
    </SectionShell>
  );
}

function AboutSection() {
  return (
    <SectionShell id="about">
      <SectionReveal>
        <SectionHeading
          index="04"
          eyebrow="ABOUT / 自我介绍"
          title="关于 laug"
          description="认识一下这间小屋的主人。"
        />

        <div className="surface-card mt-8 overflow-hidden p-6 sm:p-9">
          <div className="grid gap-8 lg:grid-cols-[15rem_1fr] lg:items-center lg:gap-12">
            <div className="relative mx-auto w-full max-w-[13rem]">
              <div
                className="absolute -inset-5 rounded-full bg-gradient-to-br from-accent/20 via-accent-alt/10 to-transparent blur-2xl"
                aria-hidden
              />
              <div className="relative aspect-square overflow-hidden rounded-full border border-line/80 bg-surface p-1.5 shadow-soft">
                <img
                  src={IMAGES.avatar}
                  alt="laug（千咲酱）的头像"
                  width={300}
                  height={300}
                  className="h-full w-full rounded-full object-cover"
                  draggable={false}
                />
              </div>
              <span className="mx-auto mt-4 flex w-fit items-center gap-1.5 rounded-full border border-line/80 bg-surface/80 px-3 py-1.5 font-mono text-[9px] tracking-[0.12em] text-ink-soft backdrop-blur-md">
                <SparkleIcon className="h-3 w-3 text-accent" />
                LAUG / 千咲酱
              </span>
            </div>

            <div className="min-w-0">
              <div className="flex items-center justify-between gap-4">
                <span className="mono-label text-accent-strong">
                  HELLO, I&apos;M LAUG
                </span>
                <CornerMarkIcon className="h-5 w-5 text-accent/55" />
              </div>
              <p className="mt-5 text-[15px] leading-8 text-ink sm:text-base sm:leading-9">
                {INTRO}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["动漫", "科技数码", "旅游摄影", "动漫区UP主"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line/80 bg-surface-muted/70 px-3 py-1.5 text-[11px] font-medium text-ink-soft"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>
    </SectionShell>
  );
}

function FriendsSection({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <SectionShell id="friends">
      <SectionReveal>
        <SectionHeading
          index="05"
          eyebrow="FRIENDS / 推荐UP主"
          title="友链 / 推荐UP主"
          description="B站没有传统网站友链功能，这个模块作为「推荐UP主 / 友链」展示。"
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {FRIENDS.map((friend, index) => (
            <motion.a
              key={friend.href}
              href={friend.href}
              target="_blank"
              rel="noopener noreferrer"
              className="surface-card friend-card group flex items-center justify-between gap-4 p-5 sm:p-6"
              whileHover={reduceMotion ? undefined : { y: -5 }}
              whileTap={reduceMotion ? undefined : { scale: 0.985 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              aria-label={`访问${friend.name}的B站主页，在新窗口打开`}
            >
              <div className="flex min-w-0 items-center gap-4">
                <span className="grid h-12 w-12 flex-none place-items-center rounded-full border border-accent/15 bg-accent-soft text-accent-strong">
                  <BilibiliIcon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-[9px] tracking-[0.16em] text-ink-soft/55">
                    RECOMMEND / {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1.5 truncate text-lg font-bold tracking-tight text-ink">
                    {friend.name}
                  </h3>
                </div>
              </div>

              <span className="flex flex-none items-center gap-2">
                <span className="hidden font-mono text-[9px] tracking-[0.1em] text-ink-soft/55 sm:block">
                  去B站看看
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface/70 text-ink-soft transition-all duration-300 group-hover:border-accent/30 group-hover:bg-accent-soft group-hover:text-accent-strong">
                  <ArrowUpRightIcon className="h-4 w-4" />
                </span>
              </span>
            </motion.a>
          ))}
        </div>
      </SectionReveal>
    </SectionShell>
  );
}

function ContactFooter() {
  return (
    <footer
      id="contact"
      className="relative z-10 scroll-mt-28 border-t border-line/55 bg-surface/25 backdrop-blur-[2px]"
    >
      <div className="mx-auto max-w-page px-5 pb-8 pt-16 sm:px-8 sm:pt-24">
        <SectionReveal>
          <SectionHeading
            index="06"
            eyebrow="CONTACT / 联系方式"
            title="来打个招呼吧"
            description="QQ、邮箱与 YouTube。网页外链都会在新窗口打开。"
          />

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <CopyContactCard
              label="QQ"
              title="QQ"
              value={CONTACT.qq}
              copyLabel="复制QQ号"
              icon={<QqIcon className="h-4 w-4" />}
            />
            <ContactLinkCard
              label="EMAIL"
              title="邮箱"
              value={CONTACT.email}
              href={`mailto:${CONTACT.email}`}
              actionLabel="发送邮件"
              icon={<MailIcon className="h-4 w-4" />}
            />
            <ContactLinkCard
              label="YOUTUBE"
              title="YouTube"
              value={CONTACT.youtube}
              href={CONTACT.youtube}
              actionLabel="打开 YouTube"
              icon={<YoutubeIcon className="h-4 w-4" />}
              external
            />
            <CopyContactCard
              label="QQ GROUP"
              title="QQ群"
              value={CONTACT.qqGroup}
              copyLabel="复制QQ群号"
              icon={<QqIcon className="h-4 w-4" />}
            />
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-line/60 py-7 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-[10px] tracking-[0.14em] text-ink">
              LAUG的小屋 <span className="text-accent-strong">/ LAUG.ROOM</span>
            </p>
            <p className="text-[11px] leading-5">
              动漫 · 科技数码 · 旅行摄影 · 动漫区UP主
            </p>
            <p className="font-mono text-[9px] tracking-[0.12em] text-ink-soft/60">
              © 2026 LAUG
            </p>
          </div>
        </SectionReveal>
      </div>
    </footer>
  );
}

function CopyContactCard({
  label,
  title,
  value,
  copyLabel,
  icon,
}: {
  label: string;
  title: string;
  value: string;
  copyLabel: string;
  icon: ReactNode;
}) {
  return (
    <div className="surface-card flex min-h-[13.5rem] flex-col p-5">
      <div className="flex items-center justify-between gap-3">
        <span className="mono-label text-ink-soft/60">{label}</span>
        <span className="text-accent-strong">{icon}</span>
      </div>

      <div className="my-auto pt-8">
        <p className="text-xs font-medium text-ink-soft">{title}</p>
        <p className="mt-2 break-all font-mono text-[15px] font-semibold tracking-[0.02em] text-ink">
          {value}
        </p>
      </div>

      <div className="mt-6 flex justify-end">
        <CopyButton value={value} label={copyLabel} />
      </div>
    </div>
  );
}

function ContactLinkCard({
  label,
  title,
  value,
  href,
  actionLabel,
  icon,
  external = false,
}: {
  label: string;
  title: string;
  value: string;
  href: string;
  actionLabel: string;
  icon: ReactNode;
  external?: boolean;
}) {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <motion.a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="surface-card group flex min-h-[13.5rem] flex-col p-5"
      whileHover={reduceMotion ? undefined : { y: -4 }}
      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
      transition={{ type: "spring", stiffness: 320, damping: 26 }}
      aria-label={`${actionLabel}${external ? "，在新窗口打开" : ""}`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="mono-label text-ink-soft/60">{label}</span>
        <span className="text-accent-strong">{icon}</span>
      </div>

      <div className="my-auto pt-8">
        <p className="text-xs font-medium text-ink-soft">{title}</p>
        <p className="mt-2 break-all font-mono text-[13px] font-semibold leading-6 text-ink">
          {value}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between gap-3 border-t border-line/55 pt-3">
        <span className="text-[10px] font-semibold text-ink-soft transition-colors group-hover:text-accent-strong">
          {actionLabel}
        </span>
        <ArrowUpRightIcon className="h-3.5 w-3.5 text-ink-soft/55 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
    </motion.a>
  );
}

function SectionShell({ id, children }: { id: string; children: ReactNode }) {
  return (
    <section id={id} className="relative scroll-mt-28">
      <div className="mx-auto max-w-page px-5 py-16 sm:px-8 sm:py-24">
        {children}
      </div>
    </section>
  );
}
