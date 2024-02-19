export default function AboutUs() {
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
              <h1 className="mr-2 text-7xl font-bold text-insurify-purple">
                About
              </h1>
              <h1 className="text-7xl font-bold text-insurify-grey">
                Insurify
              </h1>

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
              <div className="max-w-max">
                <h1 className="text-5xl font-bold text-insurify-grey pt-20">
                  Our Vision
                </h1>
                <p className="text-insurify-grey text-opacity-60 text-3xl pb-8 pt-10">
                  Just like your ‘Spotify Wrapped’, we seen an opportunity to
                  come up with a creative and simplistic design to provide that
                  same review but for insurance, allowing customers to have
                  access to the summary of their coverage. Our goal is to create
                  a culture of risk awareness and resilience, where customers
                  feel confident in their insurance coverage, knowing that it is
                  tailored to their specific needs and enabling them to make
                  informed decisions on their coverage, based on changing life
                  circumstances and risk profiles.
                </p>
                <p className="text-insurify-grey text-opacity-60 text-3xl pb-14">
                  We aim to provide this service to all insurance companies
                  around the world so that everyone has the opportunity to feel
                  safe and confident in their coverages!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="Footer Banner.png" className="relative" />
    </div>
  );
}
