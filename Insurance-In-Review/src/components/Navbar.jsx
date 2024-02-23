import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// Nav bar themes
const THEMES = ["light", "black"];

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeChange = (e) => {
    const val = e.target.getAttribute("data-set-theme");
    setTheme(val);
  };

  return (
    <header className="bg-base-100 sticky top-0 z-50">
      <div className="navbar-container pb-2">
        <div className="navbar shadow-l mx-auto h-21 pl-14 px-0 flex items-center justify-between">
          <div className="navbar-start flex items-center">
            <NavLink
              to="/"
              className="btn btn-ghost text-4xl text-insurify-purple pb-2 flex items-center"
            >
              <img
                className="h-12"
                src="/InsurifyLogo.png"
                alt="InsurifyLogo"
              />
              <h1 className="font-bold">
                Insurify<span className="text-xs pt-6">®</span>
              </h1>
            </NavLink>
            <ul className="menu menu-horizontal px-1 pt-2 text-base text-neutral-800 flex items-center">
              <li>
                <NavLink
                  to="/your-policy"
                  activeClassName="active"
                  className={`navlink ${
                    theme === "black" ? "text-white" : "text-black"
                  }`}
                >
                  Your Policy 🔒
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/aboutus"
                  activeClassName="active"
                  className={`navlink ${
                    theme === "black" ? "text-white" : "text-black"
                  }`}
                >
                  {" "}
                  About Us{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/help"
                  activeClassName="active"
                  className={`navlink ${
                    theme === "black" ? "text-white" : "text-black"
                  }`}
                >
                  {" "}
                  Help{" "}
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end pr-20">
            <NavLink to="/view-report" activeClassName="active">
              <img
                className="h-15 mr-12"
                src="/2024 Report Button.png"
                alt=""
              />
            </NavLink>

            <div className="dropdown dropdown-end mr-4">
              <label tabIndex={0} className="btn">
                {THEMES.length} Themes
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content mt-1 w-52 max-h-96 overflow-y-auto menu menu-compact p-2  bg-neutral-400 shadow rounded-box"
              >
                {THEMES.map((theme, i) => (
                  <li key={theme + i}>
                    <button
                      data-set-theme={theme}
                      onClick={handleThemeChange}
                      className="font-medium capitalize"
                    >
                      {i + 1 + ". " + theme}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <NavLink
              to="/login"
              className={`btn btn-outline mr-4 ${
                theme === "black" ? "text-white" : "text-black"
              }`}
              activeClassName="active"
            >
              Log in
            </NavLink>
            <NavLink
              to="https://myaccountrwd.allstate.com/anon/registration/user-identification?intcid=%2Fhome%2Fhome%7CNavigationHeader%7CRegisterNewAccount"
              className={`btn ${
                theme === "black" ? "text-white" : "text-black"
              } bg-insurify-purple mr-2`}
              activeClassName="active"
            >
              Get Started
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
