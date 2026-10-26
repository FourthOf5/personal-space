import Image from "next/image";
import { siteConfig } from "@/config/site";
import { welcomeContent } from "../welcome.content";

export const WelcomeHeader = () => (
  <header
    data-reveal
    className="border-hairline relative z-10 flex w-full flex-wrap items-start justify-between gap-x-6 gap-y-3 border-b pb-6"
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
      <p className="text-ink text-[0.6875rem] font-semibold tracking-[0.24em] uppercase sm:text-xs">
        {welcomeContent.label}
      </p>
    </div>
    <p className="text-muted text-[0.6875rem] tracking-[0.22em] uppercase sm:text-xs">
      {welcomeContent.edition}
    </p>
  </header>
);
