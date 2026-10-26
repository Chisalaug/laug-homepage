"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CloseIcon,
} from "@/components/icons";
import type { Photo } from "@/lib/site";
import { padNumber } from "@/lib/utils";

type LightboxProps = {
  photos: Photo[];
  index: number | null;
  onClose: () => void;
  onNavigate: (direction: -1 | 1) => void;
};

export function Lightbox({
  photos,
  index,
  onClose,
  onNavigate,
}: LightboxProps) {
  const [mounted, setMounted] = useState(false);
  const reduceMotion = Boolean(useReducedMotion());
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const isOpen = index !== null && Boolean(photos[index]);
  const activePhoto = isOpen ? photos[index as number] : null;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        onNavigate(-1);
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        onNavigate(1);
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const nodes = dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
      );
      const focusable = Array.from(nodes).filter(
        (node) => node.getClientRects().length > 0,
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const current = document.activeElement;

      if (event.shiftKey && (current === first || !dialogRef.current.contains(current))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && current === last) {
        event.preventDefault();
        first.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      if (previousFocus?.isConnected) previousFocus.focus();
    };
  }, [isOpen, onClose, onNavigate]);

  if (!mounted) return null;

  const total = photos.length;
  const currentIndex = index as number;

  return createPortal(
    <AnimatePresence>
      {isOpen && activePhoto ? (
        <motion.div
          ref={dialogRef}
          key="lightbox"
          className="fixed inset-0 z-[120] flex touch-none items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`摄影作品 ${currentIndex + 1} / ${total}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.15 : 0.26, ease: "easeOut" }}
        >
          <button
            type="button"
            className="lightbox-backdrop absolute inset-0 h-full w-full cursor-zoom-out"
            onClick={onClose}
            tabIndex={-1}
            aria-label="关闭灯箱"
          />

          <motion.div
            className="relative z-10 flex max-h-[94svh] w-full max-w-6xl flex-col"
            initial={
              reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 18 }
            }
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0.18 : 0.44,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex items-center justify-between gap-3 pb-3">
              <p className="mono-label min-w-0 truncate text-white/55">
                PHOTOGRAPHY / {padNumber(currentIndex + 1)}
              </p>

              <div className="flex flex-none items-center gap-2">
                <button
                  type="button"
                  className="lightbox-control h-11 w-11 touch-manipulation"
                  onClick={() => onNavigate(-1)}
                  aria-label="上一张摄影作品"
                >
                  <ArrowLeftIcon className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  className="lightbox-control h-11 w-11 touch-manipulation"
                  onClick={() => onNavigate(1)}
                  aria-label="下一张摄影作品"
                >
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
                <button
                  ref={closeButtonRef}
                  type="button"
                  className="lightbox-control ml-0.5 h-11 w-11 touch-manipulation"
                  onClick={onClose}
                  aria-label="关闭灯箱"
                >
                  <CloseIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="lightbox-image-wrap flex min-h-[220px] items-center justify-center overflow-hidden rounded-[var(--radius-card)] p-2 sm:p-3">
              <motion.img
                key={activePhoto.src}
                src={activePhoto.src}
                alt={activePhoto.alt}
                width={activePhoto.width}
                height={activePhoto.height}
                className="max-h-[72svh] w-auto max-w-full object-contain"
                initial={
                  reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.985 }
                }
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: reduceMotion ? 0.15 : 0.32, ease: "easeOut" }}
                draggable={false}
              />
            </div>

            <div className="flex items-center justify-between gap-4 pt-3">
              <p className="text-xs text-white/45">
                <span className="hidden sm:inline">
                  点击背景或按 Esc 关闭 · ← → 切换
                </span>
                <span className="sm:hidden">点击背景或右上角 × 关闭</span>
              </p>
              <p className="flex-none font-mono text-[11px] tracking-[0.16em] text-white/55">
                {padNumber(currentIndex + 1)} / {padNumber(total)}
              </p>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
