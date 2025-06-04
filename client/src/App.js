// src/App.js
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServiceOptions from "./components/ServiceOptions";
import AboutSBUB from "./components/AboutSBUB";
import CountriesList from "./components/CountriesList";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <ServiceOptions />
      <AboutSBUB />
      <CountriesList />
    </div>
  );
}

export default App;
