import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";

function App() {
  return (
    <div className="App poppins ">
      <Navbar />
      <HeroSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
}

export default App;
