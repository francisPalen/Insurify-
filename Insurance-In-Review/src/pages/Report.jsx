/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-scroll";

export default function Report() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [carMetrics, setCarMetrics] = useState("");
  const [homeMetrics, setHomeMetrics] = useState("");
  const [lifeMetrics, setLifeMetrics] = useState("");

  useEffect(() => {
    // Check if the user is logged in
    const token = localStorage.getItem("token");
    if (!token) {
      // If not logged in, navigate to login page
      navigate("/login");
    } else {
      // If logged in, set isLoggedIn to true
      setIsLoggedIn(true);

      // Fetch metrics data
      const userId = localStorage.getItem("userId");
      axios
        .get(`http://localhost:8080/metrics/get/user/${userId}`)
        .then((response) => {
          const data = response.data;
          setCarMetrics(data.car_metrics);
          setHomeMetrics(data.home_metrics);
          setLifeMetrics(data.life_metrics);
        })
        .catch((error) => {
          console.error("Error fetching metrics data:", error);
        });
    }
  }, [navigate]);

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
            duration={500}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8"
          >
            <img src="/Arrow.png" className="border-none w-8 h-6"></img>
          </Link>
        </div>
      )}

      {carMetrics && (
        <div id="1" className="relative hero min-h-screen bg-insurify-1">
          <div className="hero-content flex-col lg:flex-row">
            <h1 className="text-9xl font-bold pr-20">🚗💨</h1>
            <div className="max-w-3xl">
              <h1 className="text-6xl font-bold">
                Zooming Along at {carMetrics.average_speed} MPH!
              </h1>
              <p className="text-insurify-summary-text text-2xl font-bold pt-4">
                With an average speed of {carMetrics.average_speed} miles per
                hour, you're cruising through life's highways like a pro! Keep
                that momentum going!
              </p>
            </div>
          </div>
          {/* Absolute positioning to place the arrow at the bottom-middle */}
          <Link
            to="2"
            smooth={true}
            duration={500}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8"
          >
            <img src="/Arrow.png" className="border-none w-8 h-6"></img>
          </Link>
          {/* Absolute positioning to place the arrow2 at the top-middle */}
          <Link
            to="0"
            smooth={true}
            duration={500}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-8"
          >
            <img src="/Arrow2.png" className="border-none w-8 h-6"></img>
          </Link>
        </div>
      )}

      {carMetrics && (
        <div id="2" className="relative hero min-h-screen bg-insurify-2">
          <div className="hero-content flex-col lg:flex-row">
            <h1 className="text-9xl font-bold pr-20">🛡️</h1>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold">
                Keep Calm and Insure On: Low Incident Edition!
              </h1>
              <p className="text-insurify-summary-text text-2xl font-bold pt-4">
                With a braking score of {carMetrics.braking_score}, you're
                proving that staying protected is the name of the game! Keep
                calm, stay insured, and enjoy life's adventures with peace of
                mind!
              </p>
            </div>
          </div>
          {/* Absolute positioning to place the arrow at the bottom-middle */}
          <Link
            to="3"
            smooth={true}
            duration={500}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8"
          >
            <img src="/Arrow.png" className="border-none w-8 h-6"></img>
          </Link>
          {/* Absolute positioning to place the arrow2 at the top-middle */}
          <Link
            to="1"
            smooth={true}
            duration={500}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-8"
          >
            <img src="/Arrow2.png" className="border-none w-8 h-6"></img>
          </Link>
        </div>
      )}

      {carMetrics && (
        <div id="3" className="relative hero min-h-screen bg-insurify-3">
          <div className="hero-content flex-col lg:flex-row">
            <h1 className="text-9xl font-bold pr-20">🌟</h1>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold">
                Miles Traveled: {carMetrics.miles_travelled}. Memories Made:
                Countless!
              </h1>
              <p className="text-insurify-summary-text text-2xl font-bold pt-4">
                Whether it's miles of smiles or miles of adventures, you've
                conquered them all! Here's to celebrating{" "}
                {carMetrics.miles_travelled} miles of unforgettable experiences.
                Keep driving and making memories!
              </p>
            </div>
          </div>
          {/* Absolute positioning to place the arrow at the bottom-middle */}
          <Link
            to="4"
            smooth={true}
            duration={500}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8"
          >
            <img src="/Arrow.png" className="border-none w-8 h-6"></img>
          </Link>
          {/* Absolute positioning to place the arrow2 at the top-middle */}
          <Link
            to="2"
            smooth={true}
            duration={500}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-8"
          >
            <img src="/Arrow2.png" className="border-none w-8 h-6"></img>
          </Link>
        </div>
      )}

      {homeMetrics && (
        <div id="4" className="relative hero min-h-screen bg-insurify-1">
          <div className="hero-content flex-col lg:flex-row">
            <h1 className="text-9xl font-bold pr-20">🕵️‍♂️</h1>
            <div className="max-w-2xl">
              <h1 className="text-6xl font-bold">Thief, Thief, Go Away!</h1>
              <p className="text-insurify-summary-text text-2xl font-bold pt-4">
                With just {homeMetrics.fire_incidents} fire incident
                {homeMetrics.fire_incidents > 1 ? "s" : ""}, you've shown those
                pesky thieves who's boss! Keep your valuables close and your
                insurance closer, and let's keep those fire incidents at bay!
              </p>
            </div>
          </div>
          {/* Absolute positioning to place the arrow at the bottom-middle */}
          <Link
            to="5"
            smooth={true}
            duration={500}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8"
          >
            <img src="/Arrow.png" className="border-none w-8 h-6"></img>
          </Link>
          {/* Absolute positioning to place the arrow2 at the top-middle */}
          <Link
            to="3"
            smooth={true}
            duration={500}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-8"
          >
            <img src="/Arrow2.png" className="border-none w-8 h-6"></img>
          </Link>
        </div>
      )}

      {homeMetrics && (
        <div id="5" className="relative hero min-h-screen bg-insurify-2">
          <div className="hero-content flex-col lg:flex-row">
            <h1 className="text-9xl font-bold pr-20">🔄</h1>
            <div className="max-w-6xl">
              <h1 className="text-6xl font-bold">
                Turning Incidents into Non-Incidents, One at a Time!
              </h1>
              <p className="text-insurify-summary-text text-2xl font-bold pt-4">
                With just {homeMetrics.theft_incidents} theft incident
                {homeMetrics.theft_incidents > 1 ? "s" : ""}, you're mastering
                the art of prevention and protection! Keep turning those
                incidents into non-incidents, and let's keep your home sweet
                home safe and secure!
              </p>
            </div>
          </div>
          {/* Absolute positioning to place the arrow at the bottom-middle */}
          <Link
            to="6"
            smooth={true}
            duration={500}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8"
          >
            <img src="/Arrow.png" className="border-none w-8 h-6"></img>
          </Link>
          {/* Absolute positioning to place the arrow2 at the top-middle */}
          <Link
            to="4"
            smooth={true}
            duration={500}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-8"
          >
            <img src="/Arrow2.png" className="border-none w-8 h-6"></img>
          </Link>
        </div>
      )}

      {lifeMetrics && (
        <div id="6" className="relative hero min-h-screen bg-insurify-3">
          <div className="hero-content flex-col lg:flex-row">
            <h1 className="text-9xl font-bold pr-20">🚭</h1>
            <div className="max-w-3xl">
              <h1 className="text-6xl font-bold">Smoke-Free and Lovin' It!</h1>
              <p className="text-insurify-summary-text text-2xl font-bold pt-4">
                Saying no to smoking means saying yes to a healthier, happier
                life! Keep breathing easy and enjoy the benefits of being
                smoke-free, both for your health and your wallet!
              </p>
            </div>
          </div>
          {/* Absolute positioning to place the arrow2 at the top-middle */}
          <Link
            to="5"
            smooth={true}
            duration={500}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-8"
          >
            <img src="/Arrow2.png" className="border-none w-8 h-6"></img>
          </Link>
        </div>
      )}
    </>
  );
}
