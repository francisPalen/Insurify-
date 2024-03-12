import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// Nav bar themes
const THEMES = ["light", "black"];

const Navbar = () => {
  const [theme] = useState(() => {
    // Check local storage for theme preference
    const storedTheme = localStorage.getItem("black");
    // If there's a stored theme and it's valid, return it, otherwise return "light"
    return THEMES.includes(storedTheme) ? storedTheme : "black";
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in based on token presence
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    // Set the theme in the local storage
    localStorage.setItem("theme", theme);
    // Apply the theme to the document
    document.documentElement.setAttribute("data-theme", theme);
    // If theme changes to black, set the stroke color of SVG menu button to white
    if (theme === "black") {
      document.querySelector(".menu-btn-svg").setAttribute("stroke", "white");
    } else {
      document.querySelector(".menu-btn-svg").setAttribute("stroke", "black");
    }
  }, [theme]);

  const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem("token");
    // Navigate to login page
    navigate("/login");
    // Update login state
    setIsLoggedIn(false);
    window.location.reload();
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
                    style={
                      !isLoggedIn
                        ? { pointerEvents: "none", color: "#999" }
                        : {}
                    }
                  >
                    {isLoggedIn ? "Your Policy" : "Your Policy 🔒"}
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
            <NavLink
              to={!isLoggedIn ? null : "/view-report"}
              activeClassName="active"
            >
              <img
                className="relative h-15 mr-12 mobile:hidden tablet:block"
                src={
                  isLoggedIn
                    ? "/ReportButtonWhite.png"
                    : "/ReportButtonLocked.png"
                }
                alt=""
                style={!isLoggedIn ? { pointerEvents: "none" } : {}}
              />
            </NavLink>
            <div>
              {isLoggedIn ? (
                <details className="dropdown dropdown-bottom dropdown-end dropdown-hover">
                  <summary className="m-1 mr-2 pb-6 mobile:invisible laptop:visible">
                    <img className="w-12" role="button" src="/UserIconLight.png" />
                  </summary>
                  <ul className="p-2 shadow menu dropdown-content z-[1] bg-neutral-600 rounded-box w-44">
                    <li>
                      <a href="/account">Your Account</a>
                    </li>
                    <li>
                      <a onClick={handleLogout}>Logout</a>
                    </li>
                  </ul>
                </details>
              ) : (
                <div>
                  <NavLink
                    to="/login"
                    className={
                      "btn btn-outline btn-md laptop:mr-4 laptop:ml-2 mobile:ml-2"
                    }
                    activeClassName="active"
                  >
                    Login
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
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
