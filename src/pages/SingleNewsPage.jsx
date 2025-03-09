import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNewsStore } from "../store/news";

const SingleNewsPage = () => {
  const { id } = useParams();
  const { singleNews, fetchNewsById } = useNewsStore();

  useEffect(() => {
    fetchNewsById(id);
  }, [id, fetchNewsById]);

  if (!singleNews) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-lg font-medium text-gray-700">
            Loading article...
          </p>
        </div>
      </div>
    );
  }

  // Format the date in a more readable way
  const formattedDate = new Date(singleNews.createdAt).toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen pt-8 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <a href="/" className="hover:text-blue-600 transition-colors">
                Home
              </a>
            </li>
            <li className="flex items-center">
              <svg
                className="h-4 w-4 mx-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <a href="/news" className="hover:text-blue-600 transition-colors">
                News
              </a>
            </li>
            <li className="flex items-center">
              <svg
                className="h-4 w-4 mx-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="truncate max-w-xs">{singleNews.title}</span>
            </li>
          </ol>
        </nav>

        {/* Header Section */}
        <header className="mb-8">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-blue-800 bg-blue-100 rounded-full">
            Financial News
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            {singleNews.title}
          </h1>
          <div className="flex items-center mt-4 space-x-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-sm font-bold">
                {singleNews.author
                  ? singleNews.author.charAt(0).toUpperCase()
                  : "F"}
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  {singleNews.author || "Financial Analyst"}
                </p>
                <p className="text-xs text-gray-500">{formattedDate}</p>
              </div>
            </div>
            <div className="flex space-x-2 text-gray-500">
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Featured Image with gradient overlay */}
        <div className="relative mb-12 rounded-xl overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
          <img
            src={singleNews.imageurl}
            alt={singleNews.title}
            className="w-full object-cover h-96 transform transition-transform hover:scale-105 duration-700"
          />
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12 border border-gray-100">
          {/* Key Highlights Section */}
          <div className="mb-8 bg-gradient-to-r from-blue-50 to-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zm-1 9a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              Key Highlights
            </h2>
            <ul className="space-y-3">
              {singleNews.keyHighlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 mt-1 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {index + 1}
                  </span>
                  <span className="ml-3 text-gray-700">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-gray-700 first-letter:text-5xl first-letter:font-bold first-letter:text-blue-600 first-letter:mr-1 first-letter:float-left">
              {singleNews.content}
            </p>
          </article>
        </div>

        {/* Related Articles Section (placeholder) */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Related Articles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="h-40 bg-gray-200"></div>
                <div className="p-4">
                  <p className="text-xs text-gray-500 mb-1">March 5, 2025</p>
                  <h4 className="font-medium text-gray-900 mb-2">
                    Related Financial News Headline
                  </h4>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    A brief summary of the related article content that might
                    interest readers looking for more information.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Stay informed</h3>
              <p className="text-blue-100">
                Get the latest financial news delivered to your inbox
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full md:w-64 px-4 py-3 placeholder:text-gray-800 text-gray-800 bg-blue-600 font-medium rounded-l-lg focus:outline-none"
              />
              <button className="bg-blue-900 hover:bg-blue-950 px-4 py-3 rounded-r-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNewsPage;
