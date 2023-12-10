import React from "react";
import SwiperComponent from "./components/Swiper";

const Home = () => {
  return (
    <div className="relative w-screen min-w-[700px]">
      <SwiperComponent />
      <main className="w-full h-screen text-[17px] md:text-[22px] px-5 md:px-10">
        {/* Prima section */}
        <section className="flex flex-col w-full h-auto md:gap-1 ">
          <h1 className="font-semibold text-white text-[2.7em] md:text-[1.4em] font-sans">
            Un assaggio della stagione autunno 2023
          </h1>
          <p className="text-[#A0A0A0] text-[1.5em] md:text-[0.8em]">
            Guarda gratuitamente i primi tre episodi di questi simulcast dell
            autunno 2023!
          </p>

          {/* Slider */}
          <div class="snap-x mx-auto snap-mandatory h-screen flex w-full overflow-scroll">
            <div class="snap-start bg-amber-200 w-1/2 md:w-1/4 flex-shrink-0 h-screen flex items-center justify-center text-8xl">
              1
            </div>
            <div class="snap-start bg-teal-200 w-1/2 md:w-1/4 flex-shrink-0  h-screen flex items-center justify-center text-8xl">
              2
            </div>
            <div class="snap-start bg-cyan-200 w-1/2 md:w-1/4 flex-shrink-0 h-screen flex items-center justify-center text-8xl">
              3
            </div>
            <div class="snap-start bg-fuchsia-200 w-1/2 md:w-1/4 flex-shrink-0 h-screen flex items-center justify-center text-8xl">
              4
            </div>

            <div class="snap-start bg-amber-200 w-1/2 md:w-1/4 flex-shrink-0 h-screen flex items-center justify-center text-8xl">
              1
            </div>
            <div class="snap-start bg-teal-200 w-1/2 md:w-1/4 flex-shrink-0  h-screen flex items-center justify-center text-8xl">
              2
            </div>
            <div class="snap-start bg-cyan-200 w-1/2 md:w-1/4 flex-shrink-0 h-screen flex items-center justify-center text-8xl">
              3
            </div>
            <div class="snap-start bg-fuchsia-200 w-1/2 md:w-1/4 flex-shrink-0 h-screen flex items-center justify-center text-8xl">
              4
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
