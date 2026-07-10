import BlogSection from "../section/BlogSection";
import HeroSlider from "../section/HeroSlider";
import HowWeDo from "../section/HowWeDo";
import OurApproach from "../section/OurApproach";
import WhatWeDo from "../section/WhatWeDo";

const Homepage = () => {
  return (
    <div>
      <HeroSlider />
      <BlogSection />
      <OurApproach />
      <WhatWeDo />
      <HowWeDo />
    </div>
  );
};

export default Homepage;
