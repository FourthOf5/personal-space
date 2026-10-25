"use client";

import type { ComponentPropsWithoutRef } from "react";
import { useReveal } from "@/animations/hooks/use-reveal";

type RevealGroupProps = ComponentPropsWithoutRef<"div">;

// Client boundary for useReveal, so feature components can stay server components.
export const RevealGroup = (props: RevealGroupProps) => {
  const ref = useReveal<HTMLDivElement>();

  return <div ref={ref} {...props} />;
};
