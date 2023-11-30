import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation(); // TO be used later

  return (
    <div>
      <div className="navbar-container">
        <div className="navbar bg-white rounded-box shadow-md mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-44">
                <li>
                  <NavLink to="/your-policy" activeClassName="active">
                    Your Policy
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/view-report" activeClassName="active">
                    View Report
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/claims" activeClassName="active">
                    Claims
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/aboutus" activeClassName="active">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/help" activeClassName="active">
                    Help
                  </NavLink>
                </li>
              </ul>
            </div>
            <NavLink
              to="/"
              className="btn btn-ghost text-xl text-insurify-purple"
            >
              <img className="h-6" src="/InsurifyLogo.png" alt="" />
              Insurify
            </NavLink>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-insurify-roboto text-neutral">
              <li>
                <NavLink to="/your-policy" activeClassName="active">
                  Your Policy
                </NavLink>
              </li>
              <li>
                <NavLink to="/view-report" activeClassName="active">
                  View Report
                </NavLink>
              </li>
              <li>
                <NavLink to="/claims" activeClassName="active">
                  Claims
                </NavLink>
              </li>
              <li>
                <NavLink to="/aboutus" activeClassName="active">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/help" activeClassName="active">
                  Help
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <NavLink
              to="/login"
              className="btn btn-outline"
              activeClassName="active"
            >
              Log in
            </NavLink>
            <NavLink
              to="/get-started"
              className="btn bg-insurify-purple"
              activeClassName="active"
            >
              Get Started
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
