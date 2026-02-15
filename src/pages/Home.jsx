import CapabilitiesPreview from "../sections/home/CapabilitiesPreview";
import CTASection from "../sections/home/CTASection";
import FeaturedWork from "../sections/home/FeaturedWork";
import HeroSection from "../sections/home/HeroSectiom";
import IntroStatement from "../sections/home/IntroStatement";

const Home = () => {
  return (
    // <section className="min-h-screen flex items-center justify-center">
    //   <h1 className="text-5xl font-bold">Home Page</h1>
    // </section>
    <>
    <HeroSection/>
    <IntroStatement/>
    <FeaturedWork/>
    <CapabilitiesPreview/>
    <CTASection/>
    </>
    
  );
};

export default Home;
