import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNewsStore } from "../store/news";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const NewsCard = ({
  id,
  image,
  highlights,
  title,
  description,
  content,
  action,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { deleteNews, updateNews } = useNewsStore();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title,
    imageurl: image,
    description,
    content,
    keyHighlights: highlights ? highlights.join(", ") : "",
    action,
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const trimText = (text, limit) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  };

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this news article?")) {
      setLoading(true);
      const result = await deleteNews(id);
      setLoading(false);

      if (result.success) {
        // You may want to show a success notification here
      } else {
        // Handle error
        setError(result.message);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Convert comma-separated highlights to array
    const keyHighlightsArray = formData.keyHighlights
      ? formData.keyHighlights.split(",").map((item) => item.trim())
      : [];

    const updatedNews = {
      ...formData,
      keyHighlights: keyHighlightsArray,
    };

    const result = await updateNews(id, updatedNews);
    setLoading(false);

    if (result.success) {
      setIsModalOpen(false);
      // You may want to show a success notification here
    } else {
      setError(result.message);
    }
  };

  return (
    <>
      <div className="bg-gray-100 rounded-2xl shadow-xl overflow-hidden relative group">
        {/* Action buttons */}
        <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={handleEdit}
            className="bg-blue-500 p-2 hover:cursor-pointer rounded-full text-white hover:bg-blue-600 transition shadow-md"
          >
            <MdEdit />
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 p-2 rounded-full hover:cursor-pointer text-white hover:bg-red-600 transition shadow-md"
          >
            <MdDelete />
          </button>
        </div>

        <img
          src={image}
          alt="News Thumbnail"
          className="w-full h-52 object-cover"
        />

        {/* Content container */}
        <div className="flex flex-col h-full p-4 pb-16">
          {" "}
          {/* Added padding at bottom to make space for button */}
          <div className="flex-grow">
            <h2 className="text-lg font-bold mt-2">{title}</h2>
            <p className="text-sm text-gray-600 mt-1">
              {trimText(description, 20)}
            </p>
          </div>
        </div>

        {/* Fixed "Explore" button */}
        <button
          onClick={() => navigate(`/news/${id}`)}
          className="absolute bottom-0 left-0 right-0 bg-blue-600 hover:cursor-pointer text-white px-4 py-2 rounded-b-lg hover:bg-blue-700 w-full"
        >
          Explore
        </button>
      </div>

      {/* Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-200 bg-opacity-20 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Edit News Article</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Title */}
                <div>
                  <label className="block text-gray-700 font-medium">
                    Title
                  </label>
                  <input
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                {/* Image URL */}
                <div>
                  <label className="block text-gray-700 font-medium">
                    Image URL
                  </label>
                  <input
                    name="imageurl"
                    value={formData.imageurl}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-gray-700 font-medium">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  ></textarea>
                </div>

                {/* Content Editor */}
                <div>
                  <label className="block text-gray-700 font-medium">
                    Content
                  </label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  ></textarea>
                </div>

                {/* Key Highlights */}
                <div>
                  <label className="block text-gray-700 font-medium">
                    Key Highlights (comma-separated)
                  </label>
                  <input
                    name="keyHighlights"
                    value={formData.keyHighlights}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter key points, separated by commas"
                  />
                </div>

                {/* Action */}
                <div>
                  <label className="block text-gray-700 font-medium">
                    Action
                  </label>
                  <textarea
                    name="action"
                    value={formData.action}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  ></textarea>
                </div>

                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  >
                    {loading ? "Updating..." : "Update News Article"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsCard;
