import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Navbar } from "@/components/ui/mini-navbar";
import { Footer } from "@/components/ui/footer-section";
import { RequestAccessModal } from "@/components/ui/request-access-modal";
import { HomePage } from "@/pages/home";
import { FoundationLabPage } from "@/pages/foundation-lab";
import { TheSystemPage } from "@/pages/the-system";
import { BlogPage } from "@/pages/blog";

function ScrollToHashElement() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null;
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  return (
    <BrowserRouter>
      <ScrollToHashElement />
      <div className="min-h-screen w-full bg-background relative antialiased pt-24 pb-12">
        <Navbar onRequestAccess={openModal} />
        <Routes>
          <Route path="/" element={<HomePage onRequestAccess={openModal} />} />
          <Route path="/labs/foundation" element={<FoundationLabPage onRequestAccess={openModal} />} />
          <Route path="/the-system" element={<TheSystemPage onRequestAccess={openModal} />} />
          <Route path="/blog" element={<BlogPage onRequestAccess={openModal} />} />
        </Routes>
        <BackgroundBeams />
        <Footer />
        <RequestAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </BrowserRouter>
  );
}

export default App;
