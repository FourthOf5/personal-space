import { RevealGroup } from "@/animations/components/reveal-group";
import { Footnote } from "./footnote";
import { SideSpine } from "./side-spine";
import { WelcomeFooter } from "./welcome-footer";
import { WelcomeHeader } from "./welcome-header";
import { Wordmark } from "./wordmark";

export const WelcomeScreen = () => (
  <RevealGroup className="relative flex min-h-screen flex-col justify-between overflow-x-hidden p-6 sm:p-10 md:p-16 lg:p-20">
    <SideSpine />
    <WelcomeHeader />
    <main className="relative z-10 my-auto flex w-full flex-col justify-center py-12 sm:py-20 lg:py-24">
      <Wordmark />
      <Footnote />
    </main>
    <WelcomeFooter />
  </RevealGroup>
);
