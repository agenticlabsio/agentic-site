"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

type AnimationType = "fadeUp" | "fadeLeft" | "fadeRight" | "scale" | "blur";

const animationMap: Record<AnimationType, string> = {
  fadeUp: "revealUp",
  fadeLeft: "revealLeft",
  fadeRight: "revealRight",
  scale: "revealScale",
  blur: "revealBlur",
};

export default function Animate({
  children,
  type = "fadeUp",
  delay = 0,
  duration = 0.7,
  className = "",
  style = {},
  once = true,
}: {
  children: ReactNode;
  type?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        animation: visible
          ? `${animationMap[type]} ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s both`
          : "none",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
