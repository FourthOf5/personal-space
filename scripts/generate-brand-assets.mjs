import { readFile, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";

// Use the image renderer already installed with Next.js.
const require = createRequire(import.meta.url);
const sharp = createRequire(require.resolve("next/package.json"))("sharp");
const root = new URL("../", import.meta.url);
const logo = await readFile(new URL("public/brand/logo.svg", root), "utf8");

// Every export shares the refined outline, with extra weight at favicon sizes.
const iconSvg = (strokeWidth) =>
  logo.replace(/stroke-width="[^"]+"/, `stroke-width="${strokeWidth}"`);

const renderPng = (svg, size) =>
  sharp(Buffer.from(svg), { density: 384 }).resize(size, size).png().toBuffer();

await writeFile(new URL("public/brand/logo.png", root), await renderPng(logo, 1024));
await writeFile(
  new URL("public/brand/favicon.png", root),
  await renderPng(iconSvg(18), 64),
);

// SVG favicons adapt to the browser's light or dark tab bar, with no background.
const favicon = iconSvg(18).replace(
  "  <g ",
  "  <style>@media (prefers-color-scheme: dark) { g { stroke: #f5f3ef; } }</style>\n  <g ",
);
await writeFile(new URL("src/app/icon.svg", root), favicon);

// ICO stores individually rendered sizes so the 16px version gets a legible line.
const sizes = [16, 32, 48];
const entries = await Promise.all(
  sizes.map((size) => renderPng(iconSvg(size === 16 ? 22 : 18), size)),
);
const directory = Buffer.alloc(6 + sizes.length * 16);
directory.writeUInt16LE(1, 2);
directory.writeUInt16LE(sizes.length, 4);
let offset = directory.length;

entries.forEach((png, index) => {
  const entry = 6 + index * 16;
  directory.writeUInt8(sizes[index], entry);
  directory.writeUInt8(sizes[index], entry + 1);
  directory.writeUInt16LE(1, entry + 4);
  directory.writeUInt16LE(32, entry + 6);
  directory.writeUInt32LE(png.length, entry + 8);
  directory.writeUInt32LE(offset, entry + 12);
  offset += png.length;
});

await writeFile(
  new URL("src/app/favicon.ico", root),
  Buffer.concat([directory, ...entries]),
);
