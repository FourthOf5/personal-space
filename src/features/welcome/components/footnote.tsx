import { welcomeContent } from "../welcome.content";

export const Footnote = () => (
  <div data-reveal className="mt-12 flex flex-col items-center sm:mt-20 lg:mt-24">
    <div className="bg-vermilion mb-6 h-0.5 w-12" />
    <p className="text-ink max-w-4xl text-center font-serif text-2xl leading-[1.25] tracking-tight italic sm:text-3xl md:text-4xl lg:text-[2.75rem]">
      {welcomeContent.footnote}
    </p>
  </div>
);
