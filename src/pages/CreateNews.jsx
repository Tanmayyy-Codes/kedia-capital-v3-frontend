// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useNewsStore } from "./../store/news";

// const CreateNews = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const createNews = useNewsStore((state) => state.createNews);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const onSubmit = async (data) => {
//     setLoading(true);
//     setMessage("");

//     if (data.keyHighlights) {
//       data.keyHighlights = data.keyHighlights.split(",").map((h) => h.trim());
//     }

//     console.log(data);
//     const response = await createNews(data);
//     setLoading(false);

//     if (response.success) {
//       setMessage(response.message);
//     } else {
//       setMessage(response.message);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
//       <h2 className="text-2xl font-semibold mb-4">Create a News Article</h2>
//       {message && (
//         <p
//           className={`mb-4 text-${
//             message.includes("successfully") ? "green" : "red"
//           }-500`}
//         >
//           {message}
//         </p>
//       )}
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//         {/* Title */}
//         <div>
//           <label className="block text-gray-700 font-medium">Title</label>
//           <input
//             {...register("title", { required: "Title is required" })}
//             className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           {errors.title && (
//             <p className="text-red-500 text-sm">{errors.title.message}</p>
//           )}
//         </div>

//         {/* Image URL */}
//         <div>
//           <label className="block text-gray-700 font-medium">Image URL</label>
//           <input
//             {...register("imageurl", { required: "Image URL is required" })}
//             className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           {errors.imageurl && (
//             <p className="text-red-500 text-sm">{errors.imageurl.message}</p>
//           )}
//         </div>

//         {/* Description */}
//         <div>
//           <label className="block text-gray-700 font-medium">Description</label>
//           <textarea
//             {...register("description", {
//               required: "Description is required",
//             })}
//             className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           ></textarea>
//           {errors.description && (
//             <p className="text-red-500 text-sm">{errors.description.message}</p>
//           )}
//         </div>

//         {/* Content Editor */}
//         <div>
//           <label className="block text-gray-700 font-medium">Content</label>
//           <textarea
//             {...register("content", {
//               required: "Content is required",
//             })}
//             className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           ></textarea>
//           {errors.content && (
//             <p className="text-red-500 text-sm">{errors.content.message}</p>
//           )}
//         </div>

//         {/* Key Highlights */}
//         <div>
//           <label className="block text-gray-700 font-medium">
//             Key Highlights (comma-separated)
//           </label>
//           <input
//             {...register("keyHighlights")}
//             className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             placeholder="Enter key points, separated by commas"
//           />
//         </div>

//         {/* Action */}
//         <div>
//           <label className="block text-gray-700 font-medium">Action</label>
//           <textarea
//             {...register("action", {
//               required: "Action is required",
//             })}
//             className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           ></textarea>
//           {errors.action && (
//             <p className="text-red-500 text-sm">{errors.action.message}</p>
//           )}
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
//         >
//           {loading ? "Submitting..." : "Submit News Article"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateNews;

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNewsStore } from "./../store/news";

const CreateNews = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const createNews = useNewsStore((state) => state.createNews);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    setMessage("");

    if (data.keyHighlights) {
      data.keyHighlights = data.keyHighlights.split(",").map((h) => h.trim());
    }

    console.log(data);
    const response = await createNews(data);
    setLoading(false);

    if (response.success) {
      setMessage(response.message);
      reset(); // Clear form on success
    } else {
      setMessage(response.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-blue-800 bg-blue-100 rounded-full">
            Admin Dashboard
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Create News Article
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Share the latest financial insights with your audience. Complete the
            form below to publish a new article.
          </p>
        </div>

        {/* Alert Message */}
        {message && (
          <div
            className={`mb-8 p-4 rounded-lg ${
              message.includes("successfully")
                ? "bg-green-50 border-l-4 border-green-500 text-green-700"
                : "bg-red-50 border-l-4 border-red-500 text-red-700"
            }`}
          >
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                {message.includes("successfully") ? (
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                )}
              </svg>
              <p className="font-medium">{message}</p>
            </div>
          </div>
        )}

        {/* Form Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
          {/* Progress Steps */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 text-white flex justify-between">
            <div className="flex items-center">
              <div className="bg-white text-blue-600 w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
              <span className="ml-2 font-medium">Article Details</span>
            </div>
            <div className="flex items-center opacity-60">
              <div className="bg-white/30 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
              <span className="ml-2 font-medium">Review & Publish</span>
            </div>
          </div>

          {/* Form Body */}
          <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Article Title
                </label>
                <input
                  {...register("title", { required: "Title is required" })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter a compelling headline"
                />
                {errors.title && (
                  <p className="mt-1 text-red-600 text-sm flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {errors.title.message}
                  </p>
                )}
              </div>

              {/* Image URL */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Featured Image URL
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    URL
                  </span>
                  <input
                    {...register("imageurl", {
                      required: "Image URL is required",
                    })}
                    className="flex-1 p-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
                {errors.imageurl && (
                  <p className="mt-1 text-red-600 text-sm flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {errors.imageurl.message}
                  </p>
                )}
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Brief Description
                </label>
                <textarea
                  {...register("description", {
                    required: "Description is required",
                  })}
                  rows="3"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Write a short summary of the article (will appear in previews)"
                ></textarea>
                {errors.description && (
                  <p className="mt-1 text-red-600 text-sm flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {errors.description.message}
                  </p>
                )}
              </div>

              {/* Key Highlights */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Key Highlights
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <input
                    {...register("keyHighlights")}
                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Market trends, Economic impact, Future outlook"
                  />
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  Separate multiple highlights with commas
                </p>
              </div>

              {/* Content */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Main Content
                </label>
                <div className="border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                  <div className="bg-gray-50 px-4 py-2 border-b border-gray-300 flex items-center space-x-2">
                    {["B", "I", "U"].map((btn) => (
                      <button
                        key={btn}
                        type="button"
                        className="p-1 rounded hover:bg-gray-200 text-gray-700 font-medium"
                      >
                        {btn}
                      </button>
                    ))}
                    <div className="h-4 border-r border-gray-300 mx-1"></div>
                    {["Paragraph", "Quote", "List"].map((btn) => (
                      <button
                        key={btn}
                        type="button"
                        className="p-1 rounded hover:bg-gray-200 text-gray-700 text-sm"
                      >
                        {btn}
                      </button>
                    ))}
                  </div>
                  <textarea
                    {...register("content", {
                      required: "Content is required",
                    })}
                    rows="8"
                    className="w-full p-3 border-none focus:outline-none"
                    placeholder="Write your article content here..."
                  ></textarea>
                </div>
                {errors.content && (
                  <p className="mt-1 text-red-600 text-sm flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {errors.content.message}
                  </p>
                )}
              </div>

              {/* Action */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Call to Action
                </label>
                <textarea
                  {...register("action", {
                    required: "Action is required",
                  })}
                  rows="3"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="What should readers do with this information?"
                ></textarea>
                {errors.action && (
                  <p className="mt-1 text-red-600 text-sm flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {errors.action.message}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="mt-8 flex items-center justify-end space-x-4">
              <button
                type="button"
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors hover:cursor-pointer"
                onClick={() => reset()}
              >
                Clear Form
              </button>
              {/* <button
                type="button"
                className="px-4 py-2 border border-blue-600 rounded-lg text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              >
                Save Draft
              </button> */}
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 hover:cursor-pointer bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors shadow-md flex items-center"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Publishing...
                  </>
                ) : (
                  <>
                    Publish Article
                    <svg
                      className="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Tips Card */}
        <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-4">
          <h3 className="text-lg font-medium text-blue-800 mb-2 flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zm-1 9a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            Tips for Effective Financial Articles
          </h3>
          <ul className="text-blue-700 text-sm space-y-1">
            <li>
              • Use clear, concise language to explain complex financial
              concepts
            </li>
            <li>
              • Include relevant data and statistics to support your points
            </li>
            <li>• Offer actionable advice that readers can implement</li>
            <li>• Consider different perspectives and market scenarios</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreateNews;
