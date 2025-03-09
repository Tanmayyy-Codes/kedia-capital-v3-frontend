import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NewsPage from "./pages/NewsPage";
import CreateNews from "./pages/CreateNews";
import SingleNewsPage from "./pages/SingleNewsPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/create" element={<CreateNews />} />
        <Route path="/news/:id" element={<SingleNewsPage />} />
      </Routes>
    </div>
  );
}

export default App;
