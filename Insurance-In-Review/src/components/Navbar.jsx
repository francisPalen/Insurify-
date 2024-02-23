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

    // If theme changes to black, set the stroke color of SVG menu button to white
    if (val === "black") {
      document.querySelector(".menu-btn-svg").setAttribute("stroke", "white");
    } else {
      document.querySelector(".menu-btn-svg").setAttribute("stroke", "black");
    }
  };

  return (
    <header className="bg-base-100 sticky top-0 z-50">
      <div className="navbar-container pb-2">
        <div className="navbar shadow-l mx-auto h-21 pl-14 px-0 flex items-center justify-between">
          <div className="navbar-start flex items-center">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 menu-btn-svg laptop:mr-0 xs:mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-neutral-700 rounded-box w-52"
              >
                <li>
                  <NavLink
                    to="/your-policy"
                    activeClassName="active"
                    className={`lg:text-base text-xs navlink ${
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
                    className={`lg:text-base text-xs navlink ${
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
                    className={`lg:text-base text-xs navlink ${
                      theme === "black" ? "text-white" : "text-black"
                    }`}
                  >
                    {" "}
                    Help{" "}
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="mobile:pl-8 md:pl-52 laptop:pl-0 xs:pl-12">
              <NavLink
                to="/"
                className="btn btn-ghost text-4xl text-insurify-purple pb-2 flex items-center"
              >
                <img
                  className="tablet:h-12 mobile:h-8 mdlg:h-10"
                  src="/InsurifyLogo.png"
                  alt="InsurifyLogo"
                />
                <h1 className="font-bold tablet:text-4xl mobile:text-xl mdlg:text-3xl">
                  Insurify<span className="text-xs pt-6">®</span>
                </h1>
              </NavLink>
            </div>
          </div>

          <div className="navbar-end laptop:pr-20 mobile:pr-0 mobile:pt-12 mobile:ml-16 tablet:pr-0 tablet:pt-12 tablet:ml-16 laptop:pt-0 laptop:ml-0 tablet:mb-10 laptop:mb-0 sm:mb-12 mdlg:ml-0">
            <NavLink to="/view-report" activeClassName="active">
              <img
                className="relative h-15 mr-12 mobile:hidden tablet:block"
                src="/2024 Report Button.png"
                alt=""
              />
            </NavLink>

            <div className="dropdown dropdown-end mr-4 mobile:hidden laptop:block">
              <label tabIndex={0} className="btn">
                Themes
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content mt-1 w-52 max-h-96 overflow-y-auto menu menu-compact p-2 bg-neutral-400 shadow rounded-box"
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
            <div>
              <NavLink
                to="/login"
                className={"btn btn-outline btn-md laptop:mr-4 laptop:ml-2 mobile:ml-2"}
                activeClassName="active"
              >
                Log in
              </NavLink>
              <NavLink
                to="https://myaccountrwd.allstate.com/anon/registration/user-identification?intcid=%2Fhome%2Fhome%7CNavigationHeader%7CRegisterNewAccount"
                className={
                  "btn bg-insurify-purple text-white mr-2 mobile:invisible laptop:visible"
                }
                activeClassName="active"
              >
                Get Started
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
