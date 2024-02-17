import { NavLink } from "react-router-dom";

function Navbar() {
  //const location = useLocation(); TO be used later

  return (
    <div>
      <div className="navbar-container">
        <div className="navbar bg-white shadow-l mx-auto h-21 pl-14">
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
              className="btn btn-ghost text-4xl text-insurify-purple mb-2"
            >
              <img className="h-12" src="/InsurifyLogo.png" alt="" />
              <h1>Insurify</h1>
              <p className="text-xs pt-6">®</p>
            </NavLink>
            <ul className="menu menu-horizontal px-1 font-insurify-roboto text-neutral text-base">
              <li>
                <NavLink to="/your-policy" activeClassName="active">
                  Your Policy
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
          <div className="navbar-end pr-20">
            <NavLink to="/view-report" activeClassName="active">
              <img
                className="h-15 mr-20"
                src="/2024 Report Button.png"
                alt=""
              />
            </NavLink>
            <NavLink
              to="/login"
              className="btn btn-outline mr-4 text-black"
              activeClassName="active"
            >
              Log in
            </NavLink>
            <NavLink
              to="/get-started"
              className="btn bg-insurify-purple text-white mr-2"
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
