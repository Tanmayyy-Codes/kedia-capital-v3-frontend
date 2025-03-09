import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              About Market Insight
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guiding your financial decisions with timely, actionable insights
              in a volatile global market.
            </p>
          </div>

          {/* Mission & Values */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-blue-700 mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-700 mb-4">
                  In today's rapidly changing financial landscape, making
                  informed decisions requires more than just data—it requires
                  insight, context, and foresight.
                </p>
                <p className="text-gray-700">
                  We're committed to providing you with comprehensive analysis
                  of global market trends, helping you navigate economic
                  uncertainties, and identifying strategic opportunities in
                  challenging times.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-blue-700 mb-4">
                  Our Approach
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">
                      <strong>Data-Driven Analysis:</strong> We base our
                      insights on rigorous research and market data
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">
                      <strong>Actionable Intelligence:</strong> We provide clear
                      next steps, not just information
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">
                      <strong>Global Perspective:</strong> We analyze
                      interconnected markets across regions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">
                      <strong>Timely Updates:</strong> We deliver insights when
                      you need them most
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Team & Expertise */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
              Our Team of Experts
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-60 bg-blue-600">
                  <img
                    src="person1.png"
                    alt="Financial Analyst"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Financial Analysts
                  </h3>
                  <p className="text-gray-600">
                    Our seasoned financial analysts decode market signals and
                    identify emerging trends before they become mainstream news.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-60 bg-blue-600">
                  <img
                    src="person2.png"
                    alt="Financial Analyst"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Economic Researchers
                  </h3>
                  <p className="text-gray-600">
                    Our researchers analyze macroeconomic factors and policy
                    changes to forecast their impact on various market sectors.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-60 bg-blue-600">
                  <img
                    src="person3.png"
                    alt="Financial Analyst"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Industry Specialists
                  </h3>
                  <p className="text-gray-600">
                    Our industry specialists provide deep insights into
                    sector-specific opportunities and challenges in the global
                    market.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What We Cover */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
              What We Cover
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-5 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Stock Markets</h3>
                <p className="text-gray-600">
                  Analysis of equity market trends and individual stock
                  movements
                </p>
              </div>
              <div className="p-5 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Forex & Commodities
                </h3>
                <p className="text-gray-600">
                  Currency fluctuations and commodity market developments
                </p>
              </div>
              <div className="p-5 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Geopolitical Events
                </h3>
                <p className="text-gray-600">
                  Political changes and their impact on global markets
                </p>
              </div>
              <div className="p-5 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Economic Indicators
                </h3>
                <p className="text-gray-600">
                  Analysis of economic data and central bank policies
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-blue-700 text-white rounded-2xl p-10">
            <h2 className="text-3xl font-bold mb-4">
              Stay Ahead of Market Movements
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join thousands of investors who rely on our insights to navigate
              financial markets and make informed decisions.
            </p>
            <button className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">
              Subscribe to Our Newsletter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
