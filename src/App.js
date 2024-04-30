import React, { useState } from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";

export default function App() {
  const [currentPage, setCurrentPage] = useState("about");

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar onPageChange={handlePageChange} />
      {currentPage === "about" && <About />}
      {currentPage === "skills" && <Skills />}
    </main>
  );
}