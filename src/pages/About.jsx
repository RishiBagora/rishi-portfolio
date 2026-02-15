import AboutHero from "../sections/about/AboutHero";
import PersonalStatement from "../sections/about/PersonalStatement";
import PhilosophySection from "../sections/about/PhilosophySection";
import ExperienceHighlights from "../sections/about/ExperienceHighlights";
import TechStackSection from "../sections/about/TechStackSection";
import MiniCTA from "../sections/about/MiniCTA";

const About = () => {
  return (
    <>
      <AboutHero />
      {/* <PersonalStatement /> */}
      <PhilosophySection />
      <ExperienceHighlights />
      <TechStackSection />
      <MiniCTA />
    </>
  );
};

export default About;
