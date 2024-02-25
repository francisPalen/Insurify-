/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-scroll";

export default function Help() {
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
        <div className="hero-overlay bg-opacity-10" />
        <div className="justify-center items-start laptop:h-screen w-screen">
          <div className="hero-content text-center my-40 max-w-full">
            <div className="max-w-full">
              <h1 className="mr-2 laptop:text-7xl mobile:text-5xl font-bold">
                <span className="text-insurify-purple">Help </span>
                <span className="text-insurify-grey">Centre</span>
              </h1>
              <h2 className="mr-2 laptop:text-5xl mobile:text-3xl font-bold mt-10">
                <span className="text-insurify-grey">How can we help you?</span>
              </h2>
              <div className="laptop:flex justify-center mobile:grid grid-cols-2 mobile:mt-6 laptop:space-x-4 laptop:mt-20">
                <Link to="FAQ" smooth={true}>
                  <button className="mobile:h-20">
                    <img
                      src="FAQcircle.png"
                      alt="FAQ circle"
                      className="rounded-full laptop:h-52 laptop:w-52 mobile:h-32 mobile:w-32"
                    />
                  </button>
                </Link>
                <Link to="Account" smooth={true}>
                  <button>
                    <img
                      src="Accountcircle.png"
                      alt="Account circle"
                      className="rounded-full laptop:h-52 laptop:w-52 mobile:h-32 mobile:w-32"
                    />
                  </button>
                </Link>
                <Link to="Privacy" smooth={true}>
                  <button>
                    <img
                      src="Privacycircle.png"
                      alt="Privacy circle"
                      className="rounded-full laptop:h-52 laptop:w-52 mobile:h-32 mobile:w-32"
                    />
                  </button>
                </Link>
                <Link to="Contact" smooth={true}>
                  <button>
                    <img
                      src="Contactcircle.png"
                      alt="Contact circle"
                      className="rounded-full laptop:h-52 laptop:w-52 mobile:h-32 mobile:w-32"
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="FAQ"
        // 2nd Carousel
        className="hero min-h-screen relative"
        style={{
          backgroundImage:
            "url(/Grid.png), linear-gradient(0deg, rgba(94, 23, 235, 0.9), #ffffff 50%)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-opacity-10" />
        <div className="justify-center items-start laptop:h-screen w-screen">
          <div className="hero-content text-center my-12 max-w-full">
            <div className="max-w-full">
              <h1 className="mr-2 laptop:text-5xl mobile:text-3xl font-bold">
                <span className="text-insurify-grey">FAQ's</span>
              </h1>
              <h2 className="mr-2 laptop:text-3xl font-bold mt-5 mobile:text-xl">
                <span className="text-insurify-grey-2">
                  Here are some frequently asked questions about Insurify.
                </span>
              </h2>
            </div>
          </div>
          <div className="flex justify-center text-insurify-grey-2">
            <div className="flex w-11/12">
              <div className="grid grid-cols-3 gap-4">
                <div className="w-full">
                  <div
                    tabIndex={0}
                    className="collapse collapse-arrow border bg-insurify-grey"
                  >
                    <div className="collapse-title laptop:text-4xl mobile:text-xs font-bold text-white">
                      Why do I need a 'Year in Review'?
                    </div>
                    <div className="collapse-content laptop:text-3xl mobile:text-xs text-insurify-grey-2">
                      <p>
                        The 'Year in Review' is feature to give you an insight
                        into your coverage in an easy to understand and creative
                        summary page.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div
                    tabIndex={0}
                    className="collapse collapse-arrow border bg-insurify-grey"
                  >
                    <div className="collapse-title laptop:text-4xl mobile:text-xs font-bold text-white">
                      Why do I need a 'Year in Review'?
                    </div>
                    <div className="collapse-content laptop:text-3xl mobile:text-xs text-insurify-grey-2">
                      <p>
                        The 'Year in Review' is feature to give you an insight
                        into your coverage in an easy to understand and creative
                        summary page.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div
                    tabIndex={0}
                    className="collapse collapse-arrow border bg-insurify-grey"
                  >
                    <div className="collapse-title laptop:text-4xl mobile:text-xs font-bold text-white">
                      Why do I need a 'Year in Review'?
                    </div>
                    <div className="collapse-content laptop:text-3xl mobile:text-xs text-insurify-grey-2">
                      <p>
                        The 'Year in Review' is feature to give you an insight
                        into your coverage in an easy to understand and creative
                        summary page.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div
                    tabIndex={0}
                    className="collapse collapse-arrow border bg-insurify-grey"
                  >
                    <div className="collapse-title laptop:text-4xl mobile:text-xs font-bold text-white">
                      Why do I need a 'Year in Review'?
                    </div>
                    <div className="collapse-content laptop:text-3xl mobile:text-xs text-insurify-grey-2">
                      <p>
                        The 'Year in Review' is feature to give you an insight
                        into your coverage in an easy to understand and creative
                        summary page.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div
                    tabIndex={0}
                    className="collapse collapse-arrow border bg-insurify-grey"
                  >
                    <div className="collapse-title laptop:text-4xl mobile:text-xs font-bold text-white">
                      Why do I need a 'Year in Review'?
                    </div>
                    <div className="collapse-content laptop:text-3xl mobile:text-xs text-insurify-grey-2">
                      <p>
                        The 'Year in Review' is feature to give you an insight
                        into your coverage in an easy to understand and creative
                        summary page.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="max-w-full">
                  <div
                    tabIndex={0}
                    className="collapse collapse-arrow border bg-insurify-grey"
                  >
                    <div className="collapse-title laptop:text-4xl mobile:text-xs font-bold text-white">
                      Why do I need a 'Year in Review'?
                    </div>
                    <div className="collapse-content laptop:text-3xl mobile:text-xs text-insurify-grey-2">
                      <p>
                        The 'Year in Review' is feature to give you an insight
                        into your coverage in an easy to understand and creative
                        summary page.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="Account"
        // 3rd Carousel
        className="hero min-h-screen relative"
        style={{
          backgroundImage:
            "url(/Grid.png), linear-gradient(0deg, rgba(94, 23, 235, 0.9), #ffffff 50%)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-opacity-10" />
        <div className="justify-center items-start laptop:h-screen w-screen">
          <div className="hero-content text-center my-12 max-w-full">
            <div className="max-w-full">
              <h1 className="mr-2 laptop:text-5xl mobile:text-3xl font-bold">
                <span className="text-insurify-grey">Account</span>
              </h1>
              <h2 className="mr-2 laptop:text-3xl mobile:text-xl font-bold mt-5">
                <span className="text-insurify-grey-2">
                  Here are some general account queries that most users need.
                </span>
              </h2>
            </div>
          </div>
          <div className="flex justify-center text-insurify-grey-2">
            <div className="flex w-11/12">
              <div className="w-1/3">
                <h1 className="mr-2 laptop:text-4xl mobile:text-lg font-bold text-center mb-5">
                  <span className="text-insurify-purple">
                    Forgotten Password?
                  </span>
                </h1>
                <div className="grid min-h-20 flex-grow card bg-white rounded-box place-items-center border border-l-insurify-dark">
                  <div className="p-4">
                    <p className="text-center laptop:text-3xl mobile:text-xs">
                      No worries! Resetting your password is very easy.
                    </p>
                    <br></br>
                    <br></br>
                    <p className="text-center laptop:text-3xl mobile:text-xs">
                      Just click{" "}
                      <span className="text-insurify-grey italic font-bold">
                        here
                      </span>{" "}
                      and you will be taken to the ‘Reset Password’ page where
                      you will be shown how to reset/change your password.
                    </p>
                  </div>
                </div>
              </div>
              <div className="divider divider-horizontal"></div>
              <div className="w-1/3">
                <h1 className="mr-2 laptop:text-4xl mobile:text-lg font-bold text-center mb-5">
                  <span className="text-insurify-purple">
                    Accessing Your Account
                  </span>
                </h1>
                <div className="grid min-h-20 flex-grow card bg-white rounded-box place-items-center border border-l-insurify-dark">
                  <div className="p-4">
                    <p className="text-center laptop:text-3xl mobile:text-xs">
                      Accessing your account to view your details can be done by
                      clicking the small user icon that you see on the top right
                      corner beside your name.
                    </p>
                    <br></br>
                    <br></br>
                    <p className="text-center laptop:text-4xl mobile:text-xs">
                      You can click{" "}
                      <span className="text-insurify-grey italic font-bold">
                        here
                      </span>{" "}
                      to take you there!
                    </p>
                  </div>
                </div>
              </div>
              <div className="divider divider-horizontal"></div>
              <div className="w-1/3">
                <h1 className="mr-2 laptop:text-4xl mobile:text-lg font-bold text-center mb-5">
                  <span className="text-insurify-purple">Security of Data</span>
                </h1>
                <div className="grid min-h-20 flex-grow card bg-white rounded-box place-items-center border border-l-insurify-dark">
                  <div className="p-4">
                    <p className="text-center laptop:text-3xl mobile:text-xs">
                      Accessing your account to view your details can be done by
                      clicking the small user icon that you see on the top right
                      corner beside your name.
                    </p>
                    <br></br>
                    <br></br>
                    <p className="text-center laptop:text-4xl mobile:text-xs">
                      You can click{" "}
                      <span className="text-insurify-grey italic font-bold">
                        here
                      </span>{" "}
                      to take you there!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="Privacy"
        // 4th Carousel
        className="hero min-h-screen relative"
        style={{
          backgroundImage:
            "url(/Grid.png), linear-gradient(0deg, rgba(94, 23, 235, 0.9), #ffffff 50%)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-opacity-10" />
        <div className="justify-center items-start laptop:h-screen w-screen">
          <div className="hero-content text-center my-12 max-w-full">
            <div className="max-w-full">
              <h1 className="mr-2 laptop:text-5xl mobile:text-3xl font-bold">
                <span className="text-insurify-grey">Privacy</span>
              </h1>
              <h2 className="mr-2 laptop:text-3xl mobile:text-xl font-bold mt-5">
                <span className="text-insurify-grey-2">
                  At Insurify, here is how we protect your data and respect your
                  privacy.
                </span>
              </h2>
            </div>
          </div>
          <div className="flex justify-center text-insurify-grey-2">
            <div className="flex w-11/12 items-center mobile:flex-col laptop:flex-row">
              <div className="w-1/3">
                <h1 className="mr-2 laptop:text-4xl mobile:text-xl font-bold text-center mb-5">
                  <span className="text-insurify-purple">Security of Data</span>
                </h1>
                <div className="grid min-h-20 flex-grow card bg-white rounded-box place-items-center border border-l-insurify-dark">
                  <div className="p-4">
                    <ul className="list-disc text-center laptop:text-3xl mobile:text-xs ml-6">
                      <li>
                        To display statistics based off your current policies,
                        creating an informative and simple review
                      </li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="divider divider-horizontal"></div>
              <div className="w-1/3">
                <h1 className="mr-2 laptop:text-4xl mobile:text-xl font-bold text-center mb-5 mobile:pt-4">
                  <span className="text-insurify-purple">
                    How we use your Data
                  </span>
                </h1>
                <div className="grid min-h-20 flex-grow card bg-white rounded-box place-items-center border border-l-insurify-dark">
                  <div className="grid min-h-20 flex-grow card bg-white rounded-box place-items-center border border-l-insurify-dark">
                    <div className="p-4">
                      <ul className="list-disc text-center laptop:text-3xl mobile:text-xs ml-6">
                        <li>
                          To display statistics based off your current policies,
                          creating an informative and simple review
                        </li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divider divider-horizontal"></div>
              <div className="w-1/3">
                <h1 className="mr-2 laptop:text-4xl mobile:text-xl font-bold text-center mb-5 mobile:pt-4">
                  <span className="text-insurify-purple">
                    Types of Data we use
                  </span>
                </h1>
                <div className="grid min-h-20 flex-grow card bg-white rounded-box place-items-center border border-l-insurify-dark">
                  <div className="p-4">
                    <ul className="shrink-0 list-disc text-center laptop:text-3xl mobile:text-xs ml-6">
                      <li>
                        To display statistics based off your current policies,
                        creating an informative and simple review
                      </li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="Contact"
        // 4th Carousel
        className="hero min-h-screen relative"
        style={{
          backgroundImage:
            "url(/Grid.png), linear-gradient(0deg, rgba(94, 23, 235, 0.9), #ffffff 50%)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-opacity-10" />
        <div className="justify-center items-start laptop:h-screen w-screen">
          <div className="hero-content text-center py-12 max-w-full">
            <div className="max-w-full">
              <h1 className="mr-2 laptop:text-5xl mobile:text-3xl font-bold">
                <span className="text-insurify-grey">Contact Us</span>
              </h1>
              <h2 className="mr-2 laptop:text-3xl mobile:text-xl font-bold mt-12">
                <span className="text-insurify-grey-2">
                  Couldn’t find the answers you were looking for?
                </span>
                <br></br>
                <span className="text-insurify-grey-2">
                  Contact us directly using whichever option suits you best!
                </span>
              </h2>
              <div className="flex flex-nowrap justify-center max-w-screen-1600 mt-16">
                <div className="laptop:text-4xl mobile:text-xl font-bold text-justify-center mr-20">
                  <span className="font-bold text-insurify-purple">Phone</span>
                  <span className="laptop:text-3xl mobile:text-sm font-bold text-insurify-grey">
                    <p>(+44) 7653577890</p>
                  </span>
                </div>
                <div className="laptop:text-4xl mobile:text-xl font-bold text-justify-center">
                  <span className="font-bold text-insurify-purple">Email</span>
                  <span className="laptop:text-3xl mobile:text-sm text-insurify-grey">
                    <p>info@insurify.ie</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
