/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-scroll";

const LifeMetricsSection = ({ lifeMetrics }) => {
  const lastCheckup = new Date(lifeMetrics.last_medical_checkup);
  const today = new Date();
  const oneYearAgo = new Date(today.setFullYear(today.getFullYear() - 1));
  return (
    <>
      <div id="l1" className="relative hero min-h-screen bg-insurify-3">
        <div className="hero-content flex-col lg:flex-row">
          <h1 className="text-9xl font-bold laptop:pr-20 xs:pb-4 animate-pulse animate-infinite">
            {lifeMetrics.smoker == "Yes" ? "🍎"
              : "🚭"}
          </h1>
          <div className="max-w-3xl mobile:text-center">
            <h1 className="laptop:text-6xl xs:text-4xl font-bold">{lifeMetrics.smoker == "No" ? "Smoke-Free and Lovin' It!"
              : lastCheckup >= oneYearAgo ? "Healthy, Wealthy, and Wise: Secured for Life!" : "Check-Up Reminder!"}
            </h1>
            <p className="text-insurify-summary-text text-2xl font-bold pt-4">
              {lifeMetrics.smoker == "No" ? (
                <>
                  Saying no to smoking means saying yes to a healthier, happier
                  life. <span className="text-white"> On average, non-smokers save 20% on their life insurance! </span>
                  Keep breathing easy and enjoy the benefits of being
                  smoke-free, both for your health and your wallet!
                </>
              ) : lastCheckup >= oneYearAgo ? (
                <>
                  You had your last health check less than a year ago!
                  Well done on keeping up to date with yourself, <span className="text-white">you've
                    earned a 10% discount on your next premium.</span> Stay health-smart!
                </>
              ) : (
                <>
                  Over a year since your last health check? Schedule now to <span className="text-white">secure
                    up to 10% off your premiums.</span> Your health is your wealth!
                </>
              )}
            </p>
          </div>
        </div>
        {/* Absolute positioning to place the arrow at the bottom-middle */}
        <Link
          to="cl1"
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
    </>
  );
};

export default LifeMetricsSection;
