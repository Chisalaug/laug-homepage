"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

import { ArrowUpRightIcon } from "@/components/icons";
import { Lightbox } from "@/components/lightbox";
import { PHOTOS, type Photo } from "@/lib/site";
import { padNumber } from "@/lib/utils";

function shufflePhotos(source: Photo[]) {
  const next = [...source];
  for (let index = next.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [next[index], next[swapIndex]] = [next[swapIndex], next[index]];
  }
  return next;
}

export function PhotographyGallery() {
  const [photos, setPhotos] = useState<Photo[]>(() => [...PHOTOS]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const reduceMotion = Boolean(useReducedMotion());

  useEffect(() => {
    setPhotos(shufflePhotos(PHOTOS));
  }, []);

  const handleClose = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const handleNavigate = useCallback((direction: -1 | 1) => {
    setActiveIndex((current) => {
      if (current === null) return null;
      return (current + direction + PHOTOS.length) % PHOTOS.length;
    });
  }, []);

  return (
    <>
      <div
        className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:gap-5"
        role="group"
        aria-label="旅行摄影作品，随机顺序展示"
      >
        {photos.map((photo, index) => (
          <motion.button
            key={photo.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group block w-full text-left"
            aria-label={`打开${photo.alt}灯箱`}
            aria-haspopup="dialog"
            whileHover={reduceMotion ? undefined : { y: -6 }}
            whileTap={reduceMotion ? undefined : { scale: 0.985 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
          >
            <div className="photo-tile aspect-[3/4] border border-line/70 shadow-soft">
              <img
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
                draggable={false}
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#160b19]/80 via-transparent to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden
              />
              <span className="photo-badge absolute left-3 top-3 rounded-full px-2.5 py-1 font-mono text-[9px] tracking-[0.14em]">
                PHOTO {padNumber(index + 1)}
              </span>
              <span className="absolute bottom-3 right-3 grid h-8 w-8 place-items-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </span>
              <span className="absolute bottom-3 left-3 font-mono text-[9px] tracking-[0.12em] text-white/65">
                OPEN LIGHTBOX
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      <Lightbox
        photos={photos}
        index={activeIndex}
        onClose={handleClose}
        onNavigate={handleNavigate}
      />
    </>
  );
}
