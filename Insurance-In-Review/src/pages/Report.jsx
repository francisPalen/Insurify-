/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-scroll";
import CarMetricsSection from "../components/CarMetricsSection";
import HomeMetricsSection from "../components/HomeMetricsSection";
import LifeMetricsSection from "../components/LifeMetricsSection";

export default function Report() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [carMetrics, setCarMetrics] = useState(null);
  const [homeMetrics, setHomeMetrics] = useState(null);
  const [lifeMetrics, setLifeMetrics] = useState(null);

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
        const response = await axios.get(
          `http://localhost:8080/metrics/get/user/${userId}`
        );
        const data = response.data;

        setCarMetrics(data.car_metrics);
        setHomeMetrics(data.home_metrics);
        setLifeMetrics(data.life_metrics);
      } catch (error) {
        console.error("Error fetching metrics data:", error);
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
          {/* Absolute positioning to place the arrow at the bottom-middle */}
          <Link
            to="1"
            smooth={true}
            duration={1500}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8"
          >
            <img src="/Arrow.png" className="border-none w-8 h-6"></img>
          </Link>
        </div>
      )}

      {carMetrics && <CarMetricsSection carMetrics={carMetrics} />}
      {homeMetrics && <HomeMetricsSection homeMetrics={homeMetrics} />}
      {lifeMetrics && <LifeMetricsSection lifeMetrics={lifeMetrics} />}
    </>
  );
}
