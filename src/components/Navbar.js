import React from "react";

export default function Navbar({ onPageChange }) {
  return (
    <header className="bg-blue-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <button onClick={() => onPageChange("about")} className="mr-5 hover:text-white focus:outline-none">
            About
          </button>
          <button onClick={() => onPageChange("skills")} className="mr-5 hover:text-white focus:outline-none">
            Skills
          </button>
        </nav>
      </div>
    </header>
  );
}