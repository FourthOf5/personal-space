import { Marker } from "@/components/ui/marker";
import { welcomeContent } from "../welcome.content";

export const WelcomeFooter = () => (
  <footer
    data-reveal
    className="border-hairline relative z-10 flex w-full flex-col items-start justify-between gap-4 border-t pt-6 pb-2 sm:flex-row sm:items-center"
  >
    <p className="text-muted text-[9px] tracking-[0.2em] uppercase sm:text-[10px]">
      {welcomeContent.colophon}
    </p>
    <div className="flex items-center gap-2">
      <Marker shape="dot" className="size-2" />
      <p className="text-ink text-[11px] font-medium tracking-[0.2em] uppercase sm:text-xs">
        {welcomeContent.edition}
      </p>
    </div>
  </footer>
);
