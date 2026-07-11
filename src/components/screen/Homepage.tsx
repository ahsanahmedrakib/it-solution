import AboutSection from "../section/AboutSection";
import BlogSection from "../section/BlogSection";
import HeroSlider from "../section/HeroSlider";
import HowWeDo from "../section/HowWeDo";
import OurApproach from "../section/OurApproach";
import OurTeam from "../section/OurTeam";
import Testimonials from "../section/Testimonials";
import WhatWeDo from "../section/WhatWeDo";

const Homepage = () => {
  return (
    <div>
      <HeroSlider />
      <AboutSection />
      <BlogSection />
      <OurApproach />
      <WhatWeDo />
      <HowWeDo />
      <Testimonials />
      <OurTeam />
    </div>
  );
};

export default Homepage;
