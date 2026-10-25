import type { ComponentPropsWithoutRef } from "react";

type MarkerProps = ComponentPropsWithoutRef<"span"> & {
  shape?: "square" | "dot";
};

// Small vermilion accent mark. Size comes from the caller (e.g. `size-2`).
export const Marker = ({ shape = "square", className = "", ...props }: MarkerProps) => (
  <span
    aria-hidden
    className={`bg-vermilion inline-block ${shape === "dot" ? "rounded-full" : ""} ${className}`}
    {...props}
  />
);
