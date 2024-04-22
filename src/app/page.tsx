import Image from "next/image";
import Header from "./Components/Header"
import HeroSection from "./Components/HeroSection"
import AboutSection from "./Components/AboutSection"
import WhySection from "./Components/WhySection"
import CreativeSection from "./Components/CreativeSection"
import Footer from "./Components/Footer"

export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection/>
      <AboutSection/>
      <WhySection/>
      <CreativeSection/>
      <Footer/>
    </main>
  );
}



// colors:

// background: #FF553E;

