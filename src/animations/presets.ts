// Shared motion constants, so every section moves with the same feel.
export const duration = {
  fast: 0.3,
  base: 0.7,
  slow: 1.2,
} as const;

export const ease = {
  out: "power3.out",
  inOut: "power2.inOut",
} as const;

export const stagger = {
  base: 0.12,
} as const;

export const motionQuery = {
  allowed: "(prefers-reduced-motion: no-preference)",
  reduced: "(prefers-reduced-motion: reduce)",
} as const;
