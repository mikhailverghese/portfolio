"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

type ParallaxImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export function ParallaxImage({ src, alt, width, height, className = "" }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"] as const,
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={reduce ? undefined : { y }} className="will-change-transform">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-auto w-full scale-[1.15]"
        />
      </motion.div>
    </div>
  );
}
