
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0b1120]/95 backdrop-blur-md border-b border-gray-800">

      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">

        <Link to="/" className="text-3xl font-bold text-white">
          DINKY<span className="text-shadow-gray-600">.</span>
        </Link>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenu(!menu)}
        >
          ☰
        </button>

        <div className={`${menu ? "flex" : "hidden"} md:flex flex-col md:flex-row gap-6 absolute md:static top-full left-0 w-full md:w-auto bg-[#0b1120] md:bg-transparent p-6 md:p-0`}>

          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Skills", "/skills"],
            ["Projects", "/projects"],
            ["Contact", "/contact"]
          ].map((item) => (
            <NavLink
              key={item[0]}
              to={item[1]}
              end={item[1] === "/"}
              onClick={() => setMenu(false)}
              className={({ isActive }) =>
                `hover:text-blue-00 transition ${
                  isActive ? "text-gray-400" : "text-gray-300"
                }`
              }
            >
              {item[0]}
            </NavLink>
          ))}

        </div>

      </div>
    </nav>
  );
}

export default Navbar;
