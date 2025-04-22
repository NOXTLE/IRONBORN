import React from "react";

const SectionWrapper = ({ children, header, title, id }) => {
  return (
    <div>
      <section id={id} className=" min-h-screen flex flex-col gap-10 ">
        <div className="pad40 bg-slate-950 py-10 flex flex-col gap-4 justify-center items-center ">
          <p className={"lg:text-xl"}>{header}</p>
          <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            {title[0]}
            <span className="uppercase text-blue-400"> {title[1]} </span>{" "}
            {title[2]}
          </h2>
        </div>
        <div className="col-wrap self-center max-w-[900px]  w-full flex flex-column mx-auto gap-10 justify-center  padX-20 text-center">
          {children}
        </div>
      </section>
    </div>
  );
};

export default SectionWrapper;
