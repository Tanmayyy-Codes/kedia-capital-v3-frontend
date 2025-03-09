import { create } from "zustand";

export const useNewsStore = create((set) => ({
  news: [],
  singleNews: null, // Separate state for single news article
  setNews: (news) => set({ news }),
  setSingleNews: (news) => set({ singleNews: news }),

  fetchNews: async () => {
    const res = await fetch("https://kedia-capital-v3.onrender.com/api/news");
    const data = await res.json();
    console.log("fetch all news -", data);
    set({ news: data.data });
  },

  fetchNewsById: async (nid) => {
    const res = await fetch(`https://kedia-capital-v3.onrender.com/api/news/${nid}`);
    const data = await res.json();
    console.log("fetch news by id - ", data);
    if (data.success) {
      set({ singleNews: data.data }); // Store only single news
    } else {
      set({ singleNews: null }); // Handle not found case
    }
  },

  createNews: async (newNews) => {
    if (
      !newNews.title ||
      !newNews.imageurl ||
      !newNews.description ||
      !newNews.content
    ) {
      return { success: false, message: "Please fill in all required fields." };
    }
    const res = await fetch("https://kedia-capital-v3.onrender.com/api/news", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNews),
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    set((state) => ({ news: [...state.news, data.data] }));
    return { success: true, message: "News created successfully" };
  },

  deleteNews: async (nid) => {
    const res = await fetch(`https://kedia-capital-v3.onrender.com/api/news/${nid}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    set((state) => ({
      news: state.news.filter((newsItem) => newsItem._id !== nid),
    }));
    return { success: true, message: data.message };
  },

  updateNews: async (nid, updatedNews) => {
    const res = await fetch(`https://kedia-capital-v3.onrender.com/api/news/${nid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedNews),
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    set((state) => ({
      news: state.news.map((newsItem) =>
        newsItem._id === nid ? data.data : newsItem
      ),
    }));

    return { success: true, message: data.message };
  },
}));
