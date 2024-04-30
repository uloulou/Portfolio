import React from "react";

export default function Navbar() {
  return (
    <header className="bg-white md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="#about" className="title-font font-medium text-darkblue mb-4 md:mb-0 md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700">
          About
        </a>
        <a href="#skills" className="mr-5 hover:text-darkpurple">
          Skills
        </a>
      </div>
    </header>
  );
}