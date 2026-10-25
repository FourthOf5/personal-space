import { welcomeContent } from "../welcome.content";

// "Hello," in heavy grotesk, with an italic serif "stranger." right-aligned beneath it.
export const Wordmark = () => (
  <h1 className="relative w-full select-none">
    <span
      data-reveal
      className="font-grotesk tracking-monumental text-ink block text-[18vw] leading-[0.8] font-bold sm:text-[17vw] lg:text-[15.5vw]"
    >
      {welcomeContent.greeting.lead}
    </span>
    <span className="mt-1 flex w-full justify-end sm:mt-2 lg:mt-3">
      <span
        data-reveal
        className="text-ink pr-0 font-serif text-[22vw] leading-[0.78] font-light tracking-tighter italic sm:pr-4 sm:text-[20vw] lg:pr-8 lg:text-[18.5vw]"
      >
        {welcomeContent.greeting.accent}
      </span>
    </span>
  </h1>
);
