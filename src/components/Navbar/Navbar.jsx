import { Link } from "react-router-dom";
import {Menu, X, Search } from "lucide-react";
import {useState} from "react";
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div className="sticky top-0 bg-dark  py-4 px-6 flex justify-between items-center w-full">
      {/* LOGO SECTION */}
      <div className="flex items-center">
        <p className="font-bold text-Orange">TVmov</p>
      </div>
      {/* DESKTOP NAVIGATION */}
      <div className="hidden md:flex mx-auto justify-between items-center gap-8 text-lg text-Orange cursor-pointer font-semibold">
        <Link to="/" className="hover:text-orange-300" >Home</Link>
        <Link to="/movies" className="hover:text-orange-300 transition-colors">Movies</Link >
        <Link className="hover:text-orange-200 transition-colors">TV Shows</Link>
        <Link className="hover:text-orange-200 transition-colors">Animations</Link>
      </div>
      {/* MOBILE NAVIGATION */}
      <button
        className="md:hidden focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X color="#f77f00" size={24} />
        ) : (
          <Menu color="#f77f00" size={24} />
        )}
      </button>
      {/*MOBILE DROP DOWN MENU*/}
      {isOpen && (
        <div className="absolute top-24 right-0 left-0 bg-dark shadow-lg md:hidden z-50 border-t border-amber-100">
          <div className="flex flex-col items-center py-4 space-y-6 text-Orange">
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/">TV Shows</Link>
            <Link to="/">Animation</Link>
            </div>
            </div>
      )}
    </div>
  );
}
export default Navbar;
