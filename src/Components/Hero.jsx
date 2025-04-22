import React from "react";
import musicFile from "./Music.mp3";
const Hero = () => {
  return (
    <section className=" mx-auto min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[900px] self-center pad20">
      <div className="flex flex-col gap-4">
        <p className="text-lg lg:text-2xl">IT'S TIME TO GET</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-9xl">
          IRON<span className="text-blue-400">BORN</span>
        </h1>
      </div>
      <p className="text-[14px] lg:text-2xl">
        I hereby acknowledge that I may become{" "}
        <span className="text-blue-400 font-medium">unbelievably IronBorn</span>{" "}
        and accept all risks of becoming the local{" "}
        <span className="text-blue-400 font-medium">mass monstrosity</span>,
        afflicted with severe body dysmorphia, and struggling to fit through
        doors due to excessive gains.
      </p>

      <button
        onClick={async () => {
          await new Audio(musicFile).play();
          window.location.href = "#generate";
        }}
        id="hero-btn"
        className=" blueShadow hover:cursor-pointer px-8 py-4 rounded-lg border-blue-400  text-2xl 
       "
      >
        Accept & Begin
      </button>
    </section>
  );
};

export default Hero;
