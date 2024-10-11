import SliderHome from "@/components/sliderHome";
import Hero from "@/components/hero";
import HomeParallax from "@/components/homeParallax";
import HomeTabs from "@/components/homeTabs";
import FAQ from "@/components/faq";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div>
        <Hero />
      </div>
      <div className="mx-auto ">
        <HomeParallax />
      </div>
      <div className="container px-4 py-6 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-5 text-center">
          <div className="space-y-5">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-6xl">
              A library you’ll want <br /> to get lost in
            </h1>
            <p className="max-w-3xl text-gray-500 md:text-xl dark:text-gray-400">
              Browse our global catalog featuring millions of bestsellers, new
              releases, and classics — with new audiobooks and ebooks added
              every week.
            </p>
          </div>
        </div>
      </div>
      <div className="container max-w-full max-auto overflow-hidden">
        <HomeTabs />
      </div>
      <div className="container">
        <FAQ />
      </div>
    </section>
  );
}
