import React from "react";

export default function Skills() {
  return (
    <section id="Skills">
    <div className="bg-white">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h2 className="sm:text-4xl text-3xl font-medium title-font text-darkblue mb-4">
            Skills
          </h2>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <ul className="list-disc mx-auto text-lighterblue text-base leading-relaxed xl:w-2/4 lg:w-3/4">
            <li className="mb-3">Figma</li>
            <li className="mb-3">Adobe Illustrator</li>
            <li className="mb-3">Adobe Photoshop</li>
            <li className="mb-3">Java</li>
            <li className="mb-3">Python</li>
            <li className="mb-3">C</li>
            <li className="mb-3">CAD</li>
            <li className="mb-3">Fusion</li>
          </ul>
        </div>
      </div>
    </div>
    </section>
  );
}