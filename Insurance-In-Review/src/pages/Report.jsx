/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-scroll";

// Metrics
import CarMetricsSection from "../components/CarMetricsSection";
import HomeMetricsSection from "../components/HomeMetricsSection";
import LifeMetricsSection from "../components/LifeMetricsSection";
// Claims
import ClaimsSection from "../components/ClaimsSection";

export default function Report() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [carMetrics, setCarMetrics] = useState(null);
  const [homeMetrics, setHomeMetrics] = useState(null);
  const [lifeMetrics, setLifeMetrics] = useState(null);
  const [claims, setClaims] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }

        setIsLoggedIn(true);

        const userId = localStorage.getItem("userId");

        // Fetch Metric data
        const metricResponse = await axios.get(
          `http://localhost:8080/metrics/get/user/${userId}`
        );
        const metrics_data = metricResponse.data;

        setCarMetrics(metrics_data.car_metrics);
        setHomeMetrics(metrics_data.home_metrics);
        setLifeMetrics(metrics_data.life_metrics);

        const claimsResponse = await axios.get(
          `http://localhost:8080/claims/get/user/${userId}`
        );

        // Fetch Claims data
        const claims_data = claimsResponse.data;

        setClaims(claims_data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [navigate]);

  useEffect(() => {
    document.body.style.overflow = isLoggedIn ? "hidden" : "unset";
  }, [isLoggedIn]);

  return (
    <>
      {isLoggedIn && (
        <div id="0" data-theme="black" className="hero min-h-full relative">
          <div className="absolute top-10 left-10">
            <button onClick={() => navigate(-1)}>
              <img
                src="/BackButton.png"
                alt="Back_Button"
                className="w-auto h-8"
              />
            </button>
          </div>
          <div
            className="hero min-h-screen flex flex-col items-center justify-end xs:invisible laptop:visible"
            style={{
              backgroundImage: "url(/24.png)",
              backgroundSize: "50%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center bottom",
            }}
          />
          <div
            className="hero min-h-screen flex flex-col items-center justify-end xs:visible laptop:invisible xs:pb-20"
            style={{
              backgroundImage: "url(/24.png)",
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
          <div className="hero-content text-center relative z-10">
            <div className="animate-fade-down animate-ease-linear max-w-max mb-20">
              <div className="flex items-center justify-center text-insurify-purple pb-20">
                {" "}
                <img
                  className="tablet:h-8 xs:h-8 mdlg:h-8"
                  src="/InsurifyLogo.png"
                  alt="Insurify_Logo"
                />
                <h1 className="font-bold tablet:text-3xl xs:text-2xl mdlg:text-3xl ml-2 mr-4">
                  Insurify<span className="text-sm pt-6">®</span>
                </h1>
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
          {/* Absolute positioning to place the arrow at the bottom-middle */}
          <Link
            to="1"
            smooth={true}
            duration={1500}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-16"
          >
            <img
              src="/ScrollDown.png"
              className="border-none laptop:max-w-max xs:max-w-screen-xs h-12 animate-fade animate-infinite animate-ease-in-out animate-alternate-reverse animate-fill-backwards"
            ></img>
          </Link>
        </div>
      )}

      {/* Sections */}
      {carMetrics && <CarMetricsSection carMetrics={carMetrics} />}
      {homeMetrics && <HomeMetricsSection homeMetrics={homeMetrics} />}
      {lifeMetrics && <LifeMetricsSection lifeMetrics={lifeMetrics} />}
      {claims && <ClaimsSection claims={claims} />}
    </>
  );
}
