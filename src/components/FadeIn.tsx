"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
};

export default function FadeIn({
  children,
  className = "",
  delayMs = 0,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setVisible(true);
      return;
    }

    let revealed = false;
    const reveal = () => {
      if (revealed) return;
      revealed = true;
      setVisible(true);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -24px 0px" }
    );

    observer.observe(node);

    // Fallback: if already in view or observer is delayed, reveal soon
    const fallback = window.setTimeout(() => {
      const rect = node.getBoundingClientRect();
      const inView =
        rect.top < window.innerHeight * 0.95 && rect.bottom > 0;
      if (inView) reveal();
    }, 80);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-5 opacity-0"
      } ${className}`}
      style={{ transitionDelay: visible ? `${delayMs}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
