import AboutSection from "../section/Homepage/AboutSection";
import BlogSection from "../section/Homepage/BlogSection";
import HeroSlider from "../section/Homepage/HeroSlider";
import HowWeDo from "../section/Homepage/HowWeDo";
import OurApproach from "../section/Homepage/OurApproach";
import OurTeam from "../section/Homepage/OurTeam";
import Testimonials from "../section/Homepage/Testimonials";
import WhatWeDo from "../section/Homepage/WhatWeDo";

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
