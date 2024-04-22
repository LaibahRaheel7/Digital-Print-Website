import Image from "next/image";
import Header from "./Components/Header"
import HeroSection from "./Components/HeroSection"
import AboutSection from "./Components/AboutSection"
import WhySection from "./Components/WhySection"
import CreativeSection from "./Components/CreativeSection"
import Gallery from "./Components/Gallery"
import Subscription from "./Components/Subscription"
import Contact from "./Components/Contact"
import Testimonial from "./Components/Testimonial"
import Footer from "./Components/Footer"

export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection/>
      <AboutSection/>
      <WhySection/>
      <CreativeSection/>
      <Gallery/>
      <Subscription/>
      <Contact/>
      <Testimonial/>
      <Footer/>
    </main>
  );
}



// colors:

// background: #FF553E;

