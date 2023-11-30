export default function Home() {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/Grid.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-5"></div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="/Mobile App Example.png"
              className="max-w-sm rounded-lg shadow-4xl w-60 ml-40"
            />
            <div>
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
              <button className="btn btn-md bg-insurify-purple text-white rounded-box ml-48">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
