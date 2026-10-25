import type { Metadata } from "next";
import { fontVariables } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} — ${siteConfig.role}`,
  description: siteConfig.description,
};

const RootLayout = ({ children }: LayoutProps<"/">) => (
  <html lang="en" className={`${fontVariables} h-full antialiased`}>
    <body className="selection:bg-ink selection:text-canvas flex min-h-full flex-col font-sans">
      {/* Reveal targets are hidden by CSS until GSAP runs; without JS they must stay visible. */}
      <noscript>
        <style>{"[data-reveal]{opacity:1!important}"}</style>
      </noscript>
      {children}
    </body>
  </html>
);

export default RootLayout;
