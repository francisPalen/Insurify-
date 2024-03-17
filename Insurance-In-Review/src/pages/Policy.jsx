import { useState, useEffect } from "react";
import axios from "axios";

export default function Policy() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState(""); // State to store user's first name

  useEffect(() => {
    // Check if user is logged in based on token presence
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    // Fetch user data if logged in
    if (isLoggedIn) {
      fetchUserData();
    }
  }, [isLoggedIn]);

  // Function to fetch user data
  const fetchUserData = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `http://localhost:8080/user/get/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        const userData = response.data;
        console.log("User data:", userData);
        setUserName(userData.first_name);
      } else {
        throw new Error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  return (
    <div>
      <div
        // Top Carousel
        className="hero min-h-screen relative"
        style={{
          backgroundImage:
            "url(/Grid.png), linear-gradient(0deg, rgba(94, 23, 235, 0.9), #ffffff 50%)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-opacity-5" />
        <div className="hero min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-xl">
              <h1 className="laptop:text-7xl mobile:text-5xl font-bold text-insurify-purple">
                Your <span className="text-insurify-grey">Policy</span>
              </h1>
              <p className="py-6 text-insurify-grey laptop:text-xl mobile:text-md font-bold w-full animate-fade-down">
                Welcome {userName}! To show your current insurance policy please
                click the download PDF button below or print it directly to your
                local printer.
              </p>
              <div className="max-w-lg flex justify-center items-center laptop:ml-8">
                <button className="btn btn-md bg-insurify-purple text-white font-extrabold rounded-box mr-4 w-40">
                  Download PDF
                </button>
                <button className="btn btn-md bg-insurify-dark text-white font-extrabold rounded-box ml-4 w-40">
                  Print
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div // Bottom Carousel
          className="hero"
          style={{
            backgroundImage: "url(/Circle ABSTRACT.png)",
            background:
              "linear-gradient(0deg, rgba(94, 23, 235, 0.9), #ffffff 30%)",
          }}
        >
          <div className="hero">
            <div className="hero-content text-center">
              <div className="max-w-screen-lg">
                <h1 className="laptop:text-5xl mobile:text-3xl font-bold text-insurify-grey pt-20">
                  Policy Overview
                </h1>
                <p className="text-insurify-grey text-opacity-60 laptop:text-3xl mobile:text-lg pb-14 pt-10">
                  In your policy document, you can expect to see a comprehensive
                  summary of all your insurance policies. This document outlines
                  the types of of coverage you have, including detailed
                  information of everything involved within each policy.
                  Instructions on how to make changes to your policies or make
                  claims, along with making changes to payment schedules if you
                  think you need to. Contact information is also provided so
                  that you can reach out and get in a call to explain any
                  concerns or questions needing answers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
