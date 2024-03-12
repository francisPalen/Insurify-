/* eslint-disable react/no-unescaped-entities */

import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Account() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in
    const token = localStorage.getItem("token");
    if (!token) {
      // If not logged in, navigate to login page
      navigate("/login");
    } else {
      // If logged in, set isLoggedIn to true
      setIsLoggedIn(true);
    }
  }, [navigate]);

  const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem("token");
    // Navigate to login page
    navigate("/login");
    // Reload window (optional)
    window.location.reload();
  };

  return (
    <div>
      {isLoggedIn && (
        <div
          // Top Carousel
          className="hero min-h-screen relative bg-white"
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="hero-overlay bg-opacity-10" />
          <div className="hero min-h-screen flex">
            <div className="hero-content text-center mb-40 max-w-full flex">
              <div className="max-w-full">
                <div className="justify-center items-start laptop:h-screen w-screen">
                  <div className="my-20 max-w-full mx-32 flex justify-between items-center border-b border-insurify-grey-2">
                    <h1 className="mr-2 laptop:text-3xl mobile:text-2xl font-bold">
                      <span className="text-insurify-grey">
                        Insurify Account
                      </span>
                    </h1>
                    <button
                      className="md:btn btn-md bg-insurify-purple text-white font-extrabold rounded-box ml-54 w-40 relative mobile:mb-10 mobile:bg-insurify-purple mobile:text-white"
                      onClick={handleLogout} // Add onClick event for logout
                    >
                      Logout
                    </button>
                  </div>
                  <div className="flex w-screen">
                    <div className=" w-1/6 h-screen ml-32 border-r-2 border-insurify-grey-2">
                      <nav className="h-screen w-full flex flex-col justify-between">
                        <div className="text-left">
                          <img
                            src="User Icon.png"
                            alt="User Icon"
                            className="rounded-full laptop:h-28 laptop:w-28 mobile:h-32 mobile:w-32"
                          />
                          <br />
                          <span className=" text-2xl text-insurify-grey font-bold">
                            Your Name
                          </span>
                          <br />
                          <span className=" text-md text-insurify-grey-2 font-bold">
                            emailaddress@gmail.com
                          </span>

                          <a
                            href="#"
                            className="flex items-left py-10 text-2xl text-insurify-grey-2 font-bold hover:text-insurify-purple"
                          >
                            Personal Information
                          </a>
                          <NavLink
                            to="https://myaccountrwd.allstate.com/anon/account/recover/options?intcid=%2Fhome%2Fhome%7CNavigationHeader%7CForgotPassword"
                            className="flex items-left text-2xl text-insurify-grey-2 font-bold hover:text-insurify-purple"
                          >
                            Reset Password
                          </NavLink>
                        </div>
                      </nav>
                    </div>
                    <div className="w-5/6 h-screen text-insurify-grey-2">
                      <div className="flex flex-col px-5 text-left  mr-28">
                        <div className="min-w-screen">
                          <h1 className="mr-2 laptop:text-3xl mobile:text-2xl font-bold">
                            <span className="text-insurify-grey">
                              Personal Information
                            </span>
                          </h1>
                          <h2 className="mr-2 laptop:text-xl font-bold mt-5 mobile:text-lg">
                            <span className="text-insurify-grey-2">
                              Manage your personal information, including your
                              phone numbers and email address where you can be
                              contacted.
                            </span>
                          </h2>
                        </div>
                      </div>
                      <div className="flex flex-col px-5 text-left mr-28 mt-12">
                        <div className="min-w-screen flex">
                          <div className="w-1/3">
                            <div className="grid min-h-20 flex-grow card bg-white rounded-box place-items-center border border-l-insurify-dark">
                              <div className="p-4">
                                <h1 className="text-2xl text-insurify-grey font-bold text-left">
                                  Name
                                </h1>
                                <br></br>
                                <p className="text-left laptop:text-2xl mobile:text-xs">
                                  Your name
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="divider divider-horizontal"></div>
                          <div className="w-1/3">
                            <div className="grid min-h-20 flex-grow card bg-white rounded-box place-items-center border border-l-insurify-dark">
                              <div className="p-4">
                                <h1 className="text-2xl text-insurify-grey font-bold text-left">
                                  Date of Birth
                                </h1>
                                <br></br>
                                <p className="text-left laptop:text-2xl mobile:text-xs">
                                  Your DOB
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col px-5 text-left  mr-28 mt-12">
                        <div className="min-w-screen flex">
                          <div className="w-1/3">
                            <div className="grid min-h-20 flex-grow card bg-white rounded-box place-items-center border border-l-insurify-dark">
                              <div className="p-4">
                                <h1 className="text-2xl text-insurify-grey font-bold text-left">
                                  Country/Region
                                </h1>
                                <br></br>
                                <p className="text-left laptop:text-2xl mobile:text-xs">
                                  United Kingdom
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="divider divider-horizontal"></div>
                          <div className="w-1/3">
                            <div className="grid min-h-20 flex-grow card bg-white rounded-box place-items-center border border-l-insurify-dark">
                              <div className="p-4">
                                <h1 className="text-2xl text-insurify-grey font-bold text-left">
                                  Language
                                </h1>
                                <br></br>
                                <p className="text-left laptop:text-2xl mobile:text-xs">
                                  English
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col px-5 text-left  mr-28 mt-12">
                        <div className="min-w-screen flex">
                          <div className="w-1/3">
                            <div className="grid min-h-20 flex-grow card bg-white rounded-box place-items-center border border-l-insurify-dark">
                              <div className="p-4">
                                <h1 className="text-2xl text-insurify-grey font-bold text-left">
                                  Contact Details
                                </h1>
                                <br></br>
                                <p className="text-left laptop:text-2xl mobile:text-xs">
                                  youremail@gmail.com
                                </p>
                                <p className="text-left laptop:text-2xl mobile:text-xs">
                                  Tel: 08783747373
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
