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
              With an average speed of{" "}
              <span className="underline">
                {carMetrics.average_speed}
              </span>{" "}
              miles per hour, you're cruising through life's highways like a
              pro! Keep that momentum going!
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
              Keep Calm and Insure On: Low Incident Edition!
            </h1>
            <p className="text-insurify-summary-text text-2xl font-bold pt-4">
              With a braking score of{" "}
              <span className="underline">{carMetrics.braking_score}</span>,
              you're proving that staying protected is the name of the game!
              Keep calm, stay insured, and enjoy life's adventures with peace
              of mind!
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
              Whether it's miles of smiles or miles of adventures, you've
              conquered them all! Here's to celebrating{" "}
              <span className="underline">{carMetrics.miles_travelled}</span>{" "}
              miles of unforgettable experiences. Keep driving and making
              memories!
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
