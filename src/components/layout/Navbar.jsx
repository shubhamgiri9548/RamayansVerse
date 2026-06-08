import { Link, NavLink } from "react-router-dom";

function Navbar() {
    
  return (
    <header className="sticky top-0 z-50 bg-black text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link
          to="/"
          className="text-2xl font-bold text-yellow-500"
        >
          RamayanaVerse
        </Link>

        <nav className="flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow-500" : "text-gray-300"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/seasons"
            className={({ isActive }) =>
              isActive ? "text-yellow-500" : "text-gray-300"
            }
          >
            Seasons
          </NavLink>

          <NavLink
            to="/characters"
            className={({ isActive }) =>
              isActive ? "text-yellow-500" : "text-gray-300"
            }
          >
            Characters
          </NavLink>

          {/* NEW: Interactive Journey Route */}
          <NavLink
            to="/yatra"
            className={({ isActive }) =>
              `transition-colors duration-200 hover:text-yellow-400 ${
                isActive ? "text-yellow-500 font-semibold" : "text-gray-300"
              }`
            }
          >
            Yatra (Map)
          </NavLink>

        </nav>
      </div>
    </header>
  );
}

export default Navbar;

