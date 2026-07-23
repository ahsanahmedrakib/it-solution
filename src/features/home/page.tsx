import { HeroSlider, AboutSection, BlogSection, OurApproach, WhatWeDo, HowWeDo, Testimonials, OurTeam } from "./_components";

export default function Homepage() {
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
}