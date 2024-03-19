/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-scroll";

const LifeMetricsSection = () => {
  return (
    <>
      <div id="6" className="relative hero min-h-screen bg-insurify-3">
        <div className="hero-content flex-col lg:flex-row">
          <h1 className="text-9xl font-bold pr-20 animate-pulse animate-infinite">
            🚭
          </h1>
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold">Smoke-Free and Lovin' It!</h1>
            <p className="text-insurify-summary-text text-2xl font-bold pt-4">
              Saying no to smoking means saying yes to a healthier, happier
              life! Keep breathing easy and enjoy the benefits of being
              smoke-free, both for your health and your wallet!
            </p>
          </div>
        </div>
        {/* Absolute positioning to place the arrow at the bottom-middle */}
        <Link
          to="0"
          smooth={true}
          duration={1500}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8"
        >
          <img src="/ScrollToTop.png" className="border-none w-18 h-8 animate-bounce"></img>
        </Link>
        {/* Absolute positioning to place the arrow2 at the top-middle */}
        <Link
          to="5"
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

export default LifeMetricsSection;
