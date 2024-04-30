export default function Navbar() {
    // Function to handle click events on links
    const handleClick = (e) => {
      // Prevent the default behavior of the anchor tag
      e.preventDefault();
      // Get the target element's href attribute
      const target = e.target.getAttribute("href");
      // Scroll to the target element smoothly
      document.querySelector(target).scrollIntoView({
        behavior: "smooth"
      });
    };
  
    return (
      <header className="bg-white md:sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a href="#about" className="title-font font-medium text-darkblue mb-4 md:mb-0 md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700">
            About
          </a>
          <a href="#skills" onClick={handleClick} className="mr-5 hover:text-darkpurple">
            Skills
          </a>
        </div>
      </header>
    );
  }