// import NewsCard from "./../components/NewsCard";
// import Navbar from "./../components/Navbar";
// import { useNewsStore } from "../store/news";
// import { useEffect } from "react";

// const NewsPage = () => {
//   const { fetchNews, news } = useNewsStore();

//   useEffect(() => {
//     fetchNews();
//   }, [fetchNews]);
//   console.log("News - ", news);

//   return (
//     <>
//       <Navbar />
//       <div className="bg-white min-h-screen px-6 md:px-16 py-10 max-w-[90rem] mx-auto">
//         <header className="flex justify-between items-center mb-10">
//           <h1 className="text-4xl font-bold">News</h1>
//         </header>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {news.map((news) => (
//             <NewsCard
//               key={news._id}
//               id={news._id}
//               image={news.imageurl}
//               highlights={news.keyHighlights}
//               title={news.title}
//               description={news.description}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default NewsPage;

import React, { useState, useEffect } from "react";
import NewsCard from "./../components/NewsCard";
import Navbar from "./../components/Navbar";
import { useNewsStore } from "../store/news";

const NewsPage = () => {
  const { fetchNews, news, fetchNewsById } = useNewsStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true);
        await fetchNews();
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError("Failed to load news articles");
        setLoading(false);
      }
    };

    loadNews();
  }, [fetchNews]);

  // This ensures the news item is fully loaded when editing
  const handleCardEdit = async (newsId) => {
    try {
      await fetchNewsById(newsId);
    } catch (err) {
      console.error("Error fetching news for edit:", err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen px-6 md:px-16 py-10 max-w-[90rem] mx-auto">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold">News</h1>
          <button
            onClick={() => (window.location.href = "create")}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add News
          </button>
        </header>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        ) : news.length === 0 ? (
          <div className="text-center py-10">
            <h3 className="text-lg font-medium text-gray-600">
              No news articles available
            </h3>
            <p className="text-gray-500 mt-2">
              Add your first news article to get started
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((newsItem) => (
              <NewsCard
                key={newsItem._id}
                id={newsItem._id}
                image={newsItem.imageurl}
                content={newsItem.content}
                action={newsItem.action}
                highlights={newsItem.keyHighlights}
                title={newsItem.title}
                description={newsItem.description}
                onEdit={() => handleCardEdit(newsItem._id)}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default NewsPage;
