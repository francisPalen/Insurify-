/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Report() {
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

  // Render report page only if logged in
  return (
    <>
      {isLoggedIn && (
        <div data-theme="black" className="hero min-h-full relative">
          <div
            className="hero min-h-screen flex flex-col items-center justify-end"
            style={{
              backgroundImage: "url(/24.png)",
              backgroundSize: "50%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center bottom",
            }}
          />
          <div className="hero-content text-center relative z-10">
            <div className="animate-fade-down animate-ease-linear max-w-max mb-20">
              <div className="flex items-center justify-center text-insurify-purple pb-20">
                {" "}
                <a href="/">
                  <img
                    className="tablet:h-8 mobile:h-4 mdlg:h-6"
                    src="/InsurifyLogo.png"
                    alt="InsurifyLogo"
                  />
                </a>
                <a href="/">
                  <h1 className="font-bold tablet:text-3xl mobile:text-xl mdlg:text-3xl ml-2 mr-4">
                    Insurify<span className="text-xs pt-6">®</span>
                  </h1>
                </a>
              </div>
              <div className="">
                <h1 className="text-4xl text-insurify-purple font-extrabold relative z-10 pb-2">
                  Let's Review your
                </h1>
                <h1 className="text-8xl text-insurify-grey-2 font-extrabold relative z-10">
                  2024
                </h1>
                <h1 className="text-5xl text-white font-extrabold relative z-10">
                  Year in Review
                </h1>
                <h1 className="text-5xl text-white font-extrabold relative z-10">
                  Report
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
