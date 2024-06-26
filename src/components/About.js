import React from "react";

export default function About() {
  return (
    <section id="About">
    <div className="bg-white">
      <div className="container mx-auto flex px-30 py-40 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-blue mb-2">
            Hello, I'm U Lam Lou.
          </h1>
          <h3 className="title-font text-4xl md:text-5xl mb-4 font-bold text-darkblue">
            About Me
            <br className="hidden lg:inline-block" /> UX Researcher and Graphic
            Designer
          </h3>
          <p className="mb-8 leading-relaxed text-lighterblue text-lg">
            B.S. Cognitive Science w/spec. Design and Interaction at UC San Diego.<br/>
            Currently working in Healthcare Robotics Lab.<br/>
            Previously an instructional assistant in COGS 100 and Design 1.<br/>
            Worked as a graphic designer for Comfort Tone, an acapella group at UC San Diego.<br/>
          </p>
        </div>
      </div>
    </div>
    </section>
  );
}
