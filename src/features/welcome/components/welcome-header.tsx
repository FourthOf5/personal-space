import { Marker } from "@/components/ui/marker";
import { welcomeContent } from "../welcome.content";

export const WelcomeHeader = () => (
  <header
    data-reveal
    className="border-hairline relative z-10 flex w-full items-start justify-between gap-6 border-b pt-2 pb-6"
  >
    <div className="flex items-center gap-3">
      <Marker className="size-2.5" />
      <p className="text-ink text-[11px] font-semibold tracking-[0.24em] uppercase sm:text-xs">
        {welcomeContent.label}
      </p>
    </div>
    <p className="text-muted text-[11px] tracking-[0.22em] uppercase sm:text-xs">
      {welcomeContent.edition}
    </p>
  </header>
);
