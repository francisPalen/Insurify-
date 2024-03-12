/* eslint-disable react/no-unescaped-entities */
import ViewReportBanner from "../components/ViewReportBanner";

function ViewReport() {
  return (
    <div>
      <div data-theme="black" className="hero min-h-full relative">
        <div // First carousel
          className="hero min-h-screen flex flex-col items-center justify-end"
          style={{
            backgroundImage: "url(/24.png)",
            backgroundSize: "50%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center bottom",
          }}
        />
        <div className="hero-content text-center relative z-10">
          <div className="animate-fade-down animate-ease-linear max-w-max pb-32">
            <div className="flex items-center justify-center text-insurify-purple mb-8">
              <img
                className="tablet:h-8 mobile:h-4 mdlg:h-6"
                src="/InsurifyLogo.png"
                alt="InsurifyLogo"
              />
              <h1 className="font-bold tablet:text-3xl mobile:text-xl mdlg:text-3xl ml-2 mr-4">
                Insurify<span className="text-xs pt-6">®</span>
              </h1>
            </div>
            <h1 className="text-7xl text-insurify-purple font-extrabold relative z-10">
              Year in Review
            </h1>
            <h1 className="text-7xl text-insurify-grey-2 font-extrabold relative z-10">
              2024
            </h1>
            <h1 className="text-7xl text-white font-extrabold relative z-10">
              Report
            </h1>
          </div>
        </div>
      </div>
      <ViewReportBanner />
      <div data-theme="black" className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="/CircleAbstract.png" className="rounded-lg shadow-2xl"/>
          <div className="animate-fade-right animate-delay-700 animate-ease-in max-w-full pl-44">
            <h1 className="text-6xl text-insurify-grey-2 font-extrabold">
              Find Out What's in Your
            </h1>
            <h1 className="text-6xl text-insurify-grey-2 font-extrabold pb-6 pl-60">
              Report
            </h1>
            <details className="collapse bg-base-200">
              <summary className="collapse-title text-xl font-medium">
                Click me to read more...
              </summary>
              <div className="collapse-content">
                <ul>
                  <li>
                    - Claims Overview: Summarize claims filed and payouts for
                    Car, Life,
                    <br /> and Home insurance. Highlight trends in claim types
                    and customer satisfaction.
                  </li>
                  <li>
                    - Policy Performance: Evaluate policy renewals, premiums,
                    <br /> and coverage adjustments. Assess customer retention
                    and policy effectiveness.
                  </li>
                  <li>
                    - Market Insights: Discuss industry trends, regulatory
                    changes,
                    <br /> and emerging risks. Provide insights into consumer
                    behavior and preferences.
                  </li>
                </ul>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewReport;
