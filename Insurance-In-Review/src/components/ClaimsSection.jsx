/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Link } from "react-scroll";

// Function to convert accident date to date without time
function convertAccidentDate(accidentDate) {
  const dateWithoutTime = new Date(accidentDate).toISOString().split("T")[0];
  return dateWithoutTime;
}

const ClaimsSection = ({ claims }) => {
  // Convert the accident date to date without time
  const dateWithoutTime = convertAccidentDate(claims.accident_date);

  return (
    <>
      <div id="7" className="relative hero min-h-screen bg-insurify-1">
        <div className="hero-content flex-col lg:flex-row">
          <h1 className="text-9xl font-bold laptop:pr-20 xs:pb-4 animate-wiggle animate-infinite">
            {claims.claims_made === false ? "📋" : "💰"}
          </h1>
          <div className="max-w-3xl mobile:text-center">
            <h1 className="laptop:text-6xl xs:text-4xl font-bold">
              {claims.claims_made === false
                ? "Oh no... You've made a Claim :("
                : "No Claims have been made this Year!"}
            </h1>
            <p className="text-insurify-summary-text text-2xl font-bold pt-4">
              {claims.claims_made === false ? (
                <>
                  You had an accident on{" "}
                  <span className="text-insurify-purple">
                    {dateWithoutTime}
                  </span>{" "}
                  and we are glad that you are okay!
                  <br></br>
                  <span className="text-white">
                    {" "}
                    But now you have lost your 'No Claims Bonus'...{" "}
                  </span>
                  Not to worry, we can help you to prevent future setbacks - {" "}
                  <a
                    href="https://www.allstate.com/claims"
                    className="text-insurify-purple italic font-bold"
                  >
                    {" "} Learn More
                  </a>
                </>
              ) : (
                <>
                  Thank you for staying safe! Now{" "}
                  <span className="text-white">
                    {" "}
                    you've earned a{" "}
                    <span className="text-insurify-purple">10%</span> discount
                    on your next premium.{" "}
                  </span>
                  Keep this up and you will add another year of no claims bonus!{" "}
                </>
              )}
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
          <img
            src="/ScrollToTop.png"
            className="border-none w-18 h-8 animate-bounce"
          ></img>
        </Link>
        {/* Absolute positioning to place the arrow2 at the top-middle */}
        <Link
          to="6"
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

export default ClaimsSection;
