import { Link, useNavigate } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setIsSearchOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  
  return (
    <div className="fixed top-0 left-0 z-40 bg-dark py-4 px-6 flex justify-between items-center w-full">
      {/* LOGO SECTION */}
      <div className="flex items-center">
        <p className="font-bold text-Orange">TVmov</p>
      </div>
      
      {/* DESKTOP NAVIGATION */}
      <div className="hidden md:flex mx-auto justify-between items-center gap-8 text-lg text-Orange cursor-pointer font-semibold">
        <Link to="/" className="hover:text-orange-300 transition-colors">
          Home
        </Link>
        <Link
          to="/content/movies"
          className="hover:text-orange-300 transition-colors"
        >
          Movies
        </Link>
        <Link
          to="/content/tv"
          className="hover:text-orange-300 transition-colors"
        >
          TV Shows
        </Link>
        <Link
          to="/content/animatedMovies"
          className="hover:text-orange-300 transition-colors"
        >
          Animations
        </Link>
      </div>

      {/* DESKTOP SEARCH */}
      <div className="hidden md:block relative">
        <form onSubmit={handleSearch} className="flex items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="bg-gray-900 text-white px-4 py-2 rounded-l-md focus:outline-none w-full"
          />
          <button
            type="submit"
            className="bg-Orange hover:bg-orange-300 px-4 py-2 rounded-r-md transition-colors"
          >
            <Search size={18} />
          </button>
        </form>
      </div>

      {/* MOBILE CONTROLS */}
      <div className="flex md:hidden items-center space-x-4">
        <button 
          onClick={toggleSearch} 
          className="text-Orange focus:outline-none"
          aria-label="Search"
        >
          <Search size={20} />
        </button>
        
        <button
          className="focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X color="#f77f00" size={24} />
          ) : (
            <Menu color="#f77f00" size={24} />
          )}
        </button>
      </div>

      {/* MOBILE SEARCH BAR*/}
      {isSearchOpen && (
        <div className="absolute top-16 left-0 right-0 px-4 py-3 bg-dark md:hidden z-50">
          <form onSubmit={handleSearch} className="flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search movies or TV shows..."
              className="bg-gray-900 text-white px-4 py-2  focus:outline-none rounded-l-md w-full"
              autoFocus
            />
            <button
              type="submit"
              className="bg-Orange hover:bg-orange-300 px-4 py-2 rounded-r-md transition-colors"
            >
              <Search size={18} />
            </button>
          </form>
        </div>
      )}

      {/*MOBILE DROP DOWN MENU*/}
      {isOpen && (
        <div className="absolute top-16 right-0 left-0 bg-dark shadow-lg md:hidden z-50">
          <div
            className="flex flex-col items-center py-4 space-y-6 text-Orange"
            onClick={() => setIsOpen(false)}
          >
            <Link to="/" className="text-Orange">
              Home
            </Link>
            <Link
              to="/content/movies"
              className="text-Orange hover:text-orange-300"
            >
              Movies
            </Link>
            <Link
              to="/content/tv"
              className="text-Orange hover:text-orange-300"
            >
              TV Shows
            </Link>
            <Link
              to="/content/animatedMovies"
              className="text-Orange hover:text-orange-300"
            >
              Animations
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
