export default function Home() {
  return (
    <div>
      <div // Top Carousel
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/Grid.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-5" />
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="/Top Carousel Mobile Example.png"
              className="max-w-sm rounded-lg shadow-4xl w-100 ml-40"
            />
            <div>
              <img
                src="/Protection Msg.png"
                className="max-w-sm rounded-lg shadow-4xl w-30 -ml-2"
              />
              <h1 className="mr-24 text-7xl font-bold text-insurify-purple">
                Insurance
              </h1>
              <h1 className="mb-5 text-7xl font-bold text-insurify-grey">
                Year in Review
              </h1>
              <p className="mb-5 text-insurify-grey text-xl">
                Welcome to your Insurance Snapshot! In a glance, see your <br />
                coverage highlights. Your peace of mind is our priority. Cheers
                to <br /> simplicity, security, and a future safeguarded
                effortlessly!
              </p>
              <button className="btn btn-md bg-insurify-purple text-white rounded-box ml-40 w-40">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div // Bottom Carousel
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(/Circle ABSTRACT.png)",
            background:
              "linear-gradient(0deg, rgba(94, 23, 235, 0.9), #ffffff 40%)",
          }}
        >
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="/InsurifyMobileLight.png"
              className="max-w-sm rounded-lg shadow-4xl w-60"
            />
            <div>
              <h1 className="pr-32 text-5xl font-bold text-insurify-grey">
                One App, One Location, Everything you need
              </h1>
              <p className="mb-5 pt-10 text-insurify-grey text-xl text-opacity-50">
                Mobilize Your Peace of Mind: Simplicity, Security, and Seamless{" "}
                <br />
                Safeguarding, All in One Snapshot! - Discover the app that will{" "}
                <br />
                centralise all your needs and more.
              </p>
              <button className="btn btn-md bg-insurify-purple text-white rounded-box ml-54 w-40">
                get the app
              </button>
            </div>
          </div>
        </div>
      </div>
      <img src="Footer Banner.png" />
    </div>
  );
}
