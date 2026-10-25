import { siteConfig } from "@/config/site";

export const welcomeContent = {
  label: `${siteConfig.name} — ${siteConfig.role}`,
  edition: "Edition 001 / 2026",
  greeting: { lead: "Hello,", accent: "stranger." },
  footnote: "We'll get to know each other better soon.",
  colophon: "Designed with Stitch. Built with Codex.",
} as const;
