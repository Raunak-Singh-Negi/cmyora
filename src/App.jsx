import { Routes, Route } from "react-router-dom";

import PageLayout from "./components/layout/PageLayout";

import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./styles/global.css";
import "./styles/layout.css";
import "./styles/animations.css";

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </PageLayout>
  );
}

export default App;