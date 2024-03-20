/* eslint-disable react/no-unescaped-entities */
import PropTypes from "prop-types";
import { Link } from "react-scroll";

const CarMetricsSection = ({ carMetrics }) => {
  return (
    <>
      <div id="1" className="relative hero min-h-screen bg-insurify-1">
        <div className="hero-content flex-col lg:flex-row">
          <h1 className="text-9xl font-bold pr-20 animate-wiggle animate-infinite">
            🚗💨
          </h1>
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold text-insurify-highlight">
              Zooming Along at {carMetrics.average_speed} MPH!
            </h1>
            <p className="text-insurify-summary-text text-2xl font-bold pt-4">
              {carMetrics.average_speed <= 55 ? (
                <>
                  With an average speed of <span className="underline">{carMetrics.average_speed}</span>{" "}
                  MPH, <span className="text-white">you're showing a 5% improvement over last year. </span>.
                  Your cautious approach qualifies you for lower premiums on your insurance.
                  Great job keeping it secure and steady!
                </>
              ) : carMetrics.average_speed <= 70 ? (
                <>
                  Averaging <span className="underline">{carMetrics.average_speed}</span>{" "}
                  MPH, you're navigating life's journeys with a perfect balance of speed and caution.
                  <span className="text-white"> This cautious approach qualifies you for a 10% reduction in premiums. </span>
                  Keep this great pace!
                </>
              ) : (
                <>
                  With an average speed of <span className="underline">{carMetrics.average_speed}</span>{" "}
                  MPH, you're cruising through life's highways like a pro! While you enjoy the fast lane,
                  did you know <span className="text-white">reducing your average speed by just 5 MPH could lower your risk of accidents and
                    potentially reduce your insurance premiums?</span>
                </>
              )}

            </p>
          </div>
        </div>
        {/* Absolute positioning to place the arrow at the bottom-middle */}
        <Link
          to="2"
          smooth={true}
          duration={1500}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8"
        >
          <img src="/Arrow.png" className="border-none w-8 h-6"></img>
        </Link>
        {/* Absolute positioning to place the arrow2 at the top-middle */}
        <Link
          to="0"
          smooth={true}
          duration={1500}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-8"
        >
          <img src="/Arrow2.png" className="border-none w-8 h-6"></img>
        </Link>
      </div>

      <div id="2" className="relative hero min-h-screen bg-insurify-2">
        <div className="hero-content flex-col lg:flex-row">
          <h1 className="text-9xl font-bold pr-20 animate-bounce">🛡️</h1>
          <div className="max-w-4xl">
            <h1 className="text-6xl font-bold">
              {carMetrics.braking_score <= 70 ? "Brake Hard, Pay Hard!" :
                "Smooth Stops, Smooth Savings!"}
            </h1>
            <p className="text-insurify-summary-text text-2xl font-bold pt-4">
              {carMetrics.braking_score <= 70 ? (
                <>
                  Your low braking score of{" "}
                  <span className="underline">{carMetrics.braking_score}</span>
                  points to frequent hard stops, which bumps up your risk on the
                  road—and your insurance premiums too. Smooth it out to cut costs and risks.
                  If you improve your braking score, <span className="text-white">you could save 5% on your premiums over the next year!</span>
                </>
              ) : (
                <>
                  With a braking score of{" "}
                  <span className="underline">{carMetrics.braking_score}</span>,
                  <span className="text-white"> you're up 15 points since last year! </span>
                  Better braking = lower premiums!
                  Keep calm, stay insured, and enjoy life's adventures with peace
                  of mind!
                </>
              )}
            </p>
          </div>
        </div>
        {/* Absolute positioning to place the arrow at the bottom-middle */}
        <Link
          to="3"
          smooth={true}
          duration={1500}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8"
        >
          <img src="/Arrow.png" className="border-none w-8 h-6"></img>
        </Link>
        {/* Absolute positioning to place the arrow2 at the top-middle */}
        <Link
          to="1"
          smooth={true}
          duration={1500}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-8"
        >
          <img src="/Arrow2.png" className="border-none w-8 h-6"></img>
        </Link>
      </div>

      <div id="3" className="relative hero min-h-screen bg-insurify-3">
        <div className="hero-content flex-col lg:flex-row">
          <h1 className="text-9xl font-bold pr-20 animate-wiggle-more animate-infinite">
            🌟
          </h1>
          <div className="max-w-4xl">
            <h1 className="text-6xl font-bold">
              Miles Traveled: {carMetrics.miles_travelled}. Memories Made:
              Countless!
            </h1>
            <p className="text-insurify-summary-text text-2xl font-bold pt-4">
              Each mile contributes to your driving experience and <span className="text-white">you drove 20% more miles than last year! </span>
              Continue to drive with confidence, knowing that your insurance is
              there to protect the memories yet to come and the journeys ahead.
            </p>
          </div>
        </div>
        {/* Absolute positioning to place the arrow at the bottom-middle */}
        <Link
          to="4"
          smooth={true}
          duration={1500}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8"
        >
          <img src="/Arrow.png" className="border-none w-8 h-6"></img>
        </Link>
        {/* Absolute positioning to place the arrow2 at the top-middle */}
        <Link
          to="2"
          smooth={true}
          duration={1500}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-8"
        >
          <img src="/Arrow2.png" className="border-none w-8 h-6"></img>
        </Link>
      </div>
    </>
  );
};

CarMetricsSection.propTypes = {
  carMetrics: PropTypes.shape({
    average_speed: PropTypes.number.isRequired,
    braking_score: PropTypes.number.isRequired,
    miles_travelled: PropTypes.number.isRequired,
  }).isRequired,
};

export default CarMetricsSection;
