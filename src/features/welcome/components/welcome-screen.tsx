import { RevealGroup } from "@/animations/components/reveal-group";
import { Footnote } from "./footnote";
import { SideSpine } from "./side-spine";
import { WelcomeFooter } from "./welcome-footer";
import { WelcomeHeader } from "./welcome-header";
import { Wordmark } from "./wordmark";

export const WelcomeScreen = () => (
  <RevealGroup className="relative flex min-h-screen flex-col justify-between overflow-x-hidden px-6 pt-5 pb-6 sm:px-10 sm:pb-10 md:px-16 md:pb-16 lg:px-20 lg:pb-20">
    <SideSpine />
    <WelcomeHeader />
    <main className="relative z-10 my-auto flex w-full flex-col justify-center py-12 sm:py-20 lg:py-24">
      <Wordmark />
      <Footnote />
    </main>
    <WelcomeFooter />
  </RevealGroup>
);
