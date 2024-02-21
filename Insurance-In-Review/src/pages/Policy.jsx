export default function Policy() {
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
            <div className="max-w-md">
              <h1 className="text-7xl font-bold text-insurify-purple">
                Your <span className="text-insurify-grey">Policy</span>
              </h1>
              <p className="py-6 text-insurify-grey text-xl">
                Welcome “their name”! To show your current insurance policy
                please click the download PDF button below or print it directly
                to your local printer.
              </p>
              <div className="max-w-md flex justify-center items-center">
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
          }}
        >
          <div className="hero bg-white">
            <div className="hero-content text-center">
              <div className="max-w-screen-lg">
                <h1 className="text-5xl font-bold text-insurify-grey pt-20">
                  Policy Overview
                </h1>
                <p className="text-insurify-grey text-opacity-60 text-3xl pb-14 pt-10">
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
