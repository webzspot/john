import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import WhoIsThisFor from "./components/WhoIsThisFor";
import Curriculum from "./components/Curriculum";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: "#e8e8e8" }}>
      <Navbar />
      <Hero />
      <VideoSection />
      <WhoIsThisFor />
      <Curriculum />
      <Testimonials />
      <Pricing />
    </div>
  );
}