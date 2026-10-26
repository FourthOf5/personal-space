"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/animations/gsap";
import { duration, ease, motionQuery, stagger } from "@/animations/presets";

// Fades and lifts every `[data-reveal]` descendant into view, staggered.
// Elements start hidden via CSS (see globals.css) to avoid a flash before hydration;
// with reduced motion the hook is a no-op and the CSS leaves them visible.
export const useReveal = <T extends HTMLElement>() => {
  const scope = useRef<T>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(motionQuery.allowed, () => {
        gsap.fromTo(
          "[data-reveal]",
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: duration.base,
            ease: ease.out,
            stagger: stagger.base,
          },
        );
      });
      return () => mm.revert();
    },
    { scope },
  );

  return scope;
};
