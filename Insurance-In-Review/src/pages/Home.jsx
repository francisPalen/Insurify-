export default function Home() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/Grid Background.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Insurance <br />
            Year in Review
          </h1>
          <p className="mb-5">
            Welcome to your Insurance Snapshot! In a glance, see your coverage
            highlights. Your peace of mind is our priority. Cheers to
            simplicity, security, and a future safeguarded effortlessly!
          </p>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
}
