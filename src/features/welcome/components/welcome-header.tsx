import Image from "next/image";
import { siteConfig } from "@/config/site";
import { welcomeContent } from "../welcome.content";

export const WelcomeHeader = () => (
  <header
    data-reveal
    className="border-hairline relative z-10 flex w-full items-start justify-between gap-6 border-b pt-2 pb-6"
  >
    <div className="flex items-center gap-3">
      <Image
        src="/brand/logo.svg"
        alt={`${siteConfig.name} logo`}
        width={48}
        height={48}
        className="size-12 shrink-0"
        priority
      />
      <p className="text-ink text-[11px] font-semibold tracking-[0.24em] uppercase sm:text-xs">
        {welcomeContent.label}
      </p>
    </div>
    <p className="text-muted text-[11px] tracking-[0.22em] uppercase sm:text-xs">
      {welcomeContent.edition}
    </p>
  </header>
);
