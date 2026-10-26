@AGENTS.md

## Styling units

Use `rem` instead of `px` for all sizing: font sizes, spacing, widths, heights, borders-radius, letter-spacing, media queries, and any other length value. This keeps the UI scaling with the user's browser font-size setting.

- Prefer Tailwind's built-in scale (`text-xs`, `p-4`, `w-64`, …), which is already `rem`-based.
- When an arbitrary value is needed, write it in rem: `text-[0.625rem]`, not `text-[10px]`.
- In plain CSS (`globals.css`, etc.), use `rem` as well, e.g. `font-size: 0.875rem`.
- `px` is acceptable only where a fixed device-pixel size is the point, such as 1px hairline borders/dividers, and in GSAP/JS values that animate pixel offsets.
