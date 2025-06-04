// src/App.js
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServiceOptions from "./components/ServiceOptions";
import AboutSBUB from "./components/AboutSBUB";
import CountriesList from "./components/CountriesList";
import TrustedClientsStats from "./components/TrustedClients";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <ServiceOptions />
      <AboutSBUB />
      <CountriesList />
      <TrustedClientsStats />
      <Footer />

    </div>
  );
}

export default App;
