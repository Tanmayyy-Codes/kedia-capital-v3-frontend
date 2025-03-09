import Navbar from "../components/Navbar";

const Hero = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center py-24">
        <div className="container mx-auto max-w-6xl px-4 z-10">
          <div className="space-y-6 text-center">
            <div className="flex flex-col items-center justify-center">
              {/* HERO HEADING with gradient text */}
              <h1 className="mx-auto py-2 text-3xl font-bold leading-tight md:text-6xl">
                Stay Ahead of Market Shifts <br />{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Know the Impact, Take Action
                </span>
              </h1>

              {/* Glass card for subheading */}
              <div className="mt-6 backdrop-blur-sm bg-white/30 p-6 rounded-xl border border-gray-200 shadow-sm">
                <p className="text-md font-medium mx-auto max-w-4xl text-gray-800 md:text-xl">
                  Every global event sends ripples through the financial
                  markets. Get real-time insights, expert analyses, and
                  strategic forecasts to navigate uncertainties, seize
                  opportunities, and make informed decisions before the market
                  moves.
                </p>
              </div>
            </div>

            {/* HERO WAITLIST FORM with gradient button */}
            <div className="mx-auto max-w-lg py-6">
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button
                  type="submit"
                  className="flow-row flex w-full items-center justify-center gap-x-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 p-3 font-semibold text-white transition-all duration-200 hover:from-blue-600 hover:to-blue-700 hover:shadow-lg hover:cursor-pointer md:w-[200px]"
                >
                  Join the Newsletter
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Stats bar - finance themed */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 border border-gray-200 shadow-sm">
            <div className="text-center p-4">
              <p className="text-sm text-gray-500 uppercase font-medium">
                Market Index
              </p>
              <p className="text-xl font-bold text-blue-600">S&P 500</p>
              <p className="text-green-500 font-medium">+1.2%</p>
            </div>
            <div className="text-center p-4 border-t md:border-t-0 md:border-l md:border-r border-gray-200">
              <p className="text-sm text-gray-500 uppercase font-medium">
                Daily Insights
              </p>
              <p className="text-xl font-bold text-blue-600">250+</p>
              <p className="text-gray-500 font-medium">Expert Analysis</p>
            </div>
            <div className="text-center p-4 border-t md:border-t-0 border-gray-200">
              <p className="text-sm text-gray-500 uppercase font-medium">
                Global Markets
              </p>
              <p className="text-xl font-bold text-blue-600">24/7</p>
              <p className="text-gray-500 font-medium">Coverage</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;





