/* eslint-disable react/no-unescaped-entities */
import PropTypes from "prop-types"; 
import { Link } from "react-scroll";

const HomeMetricsSection = ({ homeMetrics }) => {
  return (
    <>
      <div id="4" className="relative hero min-h-screen bg-insurify-1">
        <div className="hero-content flex-col lg:flex-row">
          <h1 className="text-9xl font-bold pr-20 animate-ping animate-duration-1000">
            🕵️‍♂️
          </h1>
          <div className="max-w-2xl">
            <h1 className="text-6xl font-bold">Thief, Thief, Go Away!</h1>
            <p className="text-insurify-summary-text text-2xl font-bold pt-4">
              With just{" "}
              <span className="underline">{homeMetrics.theft_incidents}</span>{" "}
              theft incident
              {homeMetrics.theft_incidents > 1 ? "s" : ""}, you've shown those
              pesky thieves who's boss! Keep your valuables close and your
              insurance closer, and let's keep those theft incidents at bay!
            </p>
          </div>
        </div>
        {/* Absolute positioning to place the arrow at the bottom-middle */}
        <Link
          to="5"
          smooth={true}
          duration={1500}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8"
        >
          <img src="/Arrow.png" className="border-none w-8 h-6"></img>
        </Link>
        {/* Absolute positioning to place the arrow2 at the top-middle */}
        <Link
          to="3"
          smooth={true}
          duration={1500}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-8"
        >
          <img src="/Arrow2.png" className="border-none w-8 h-6"></img>
        </Link>
      </div>

      <div id="5" className="relative hero min-h-screen bg-insurify-2">
        <div className="hero-content flex-col lg:flex-row">
          <h1 className="text-9xl font-bold pr-20 animate-rotate-x animate-infinite">
            🔄
          </h1>
          <div className="max-w-6xl">
            <h1 className="text-6xl font-bold">
              Turning Incidents into Non-Incidents, One at a Time!
            </h1>
            <p className="text-insurify-summary-text text-2xl font-bold pt-4">
              With just{" "}
              <span className="underline">{homeMetrics.fire_incidents}</span>{" "}
              fire incident
              {homeMetrics.fire_incidents > 1 ? "s" : ""}, you're mastering
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
          duration={1500}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8"
        >
          <img src="/Arrow.png" className="border-none w-8 h-6"></img>
        </Link>
        {/* Absolute positioning to place the arrow2 at the top-middle */}
        <Link
          to="4"
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

HomeMetricsSection.propTypes = {
  homeMetrics: PropTypes.shape({
    theft_incidents: PropTypes.number.isRequired,
    fire_incidents: PropTypes.number.isRequired,
  }).isRequired,
};

export default HomeMetricsSection;
