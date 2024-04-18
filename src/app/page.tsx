import Image from "next/image";
import Header from "./Components/Header"
import HeroSection from "./Components/HeroSection"
import AboutSection from "./Components/AboutSection"
// import WhySection from "./Components/WhySection"
import Footer from "./Components/Footer"

export default function Home() {
  return (
    <main className="h-screen">
      <Header/>
      <HeroSection/>
      <AboutSection/>
      {/* <WhySection/> */}
      <Footer/>
    </main>
  );
}



// colors:

// background: #FF553E;

