import { Marker } from "@/components/ui/marker";
import { welcomeContent } from "../welcome.content";

const spineTextClass = "text-[10px] font-medium tracking-[0.28em] text-muted uppercase";

// Vertical running title pinned to the left edge on desktop.
export const SideSpine = () => (
  <aside
    aria-hidden
    className="pointer-events-none fixed top-1/2 left-8 z-20 hidden -translate-y-1/2 rotate-180 items-center gap-6 select-none [writing-mode:vertical-rl] lg:flex"
  >
    <span className={spineTextClass}>{welcomeContent.label}</span>
    <Marker shape="dot" className="size-1.5" />
    <span className={spineTextClass}>{welcomeContent.edition}</span>
  </aside>
);
