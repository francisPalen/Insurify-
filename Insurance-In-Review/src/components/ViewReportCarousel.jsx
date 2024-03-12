export default function ViewReportCarousel() {
  return (
    <div data-theme="black" className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse animate-fade-down animate-delay-700">
        <img
          src="/Umbrella.png"
          className="max-w-xs rounded-lg shadow-2xl"
        />
        <div>
          <p className="py-6 text-insurify-green text-base font-semibold">
            <span className="font-extrabold font-insurify-inter text-7xl ">2</span>024 Insurify Year in Review is a celebration of the year gone by
            and an invitation to join in on the fun. It’s all about the two-way
            connections that bring millions of insurers and customers together
            through insurance every day. We know that no two insurers are alike,
            so 2024 Year in Review encourages you to gaze into your insurance
            policies and show it off to the world.
          </p>
          <a href="/report">
          <button className="btn btn-primary bg-insurify-purple text-white ml-72">
            Click here for your 2024 Year in Review
          </button>
          </a>
        </div>
      </div>
    </div>
  );
}
