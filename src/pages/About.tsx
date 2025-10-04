import { useScrollAnimation } from '../hooks/useScrollAnimation';
import HomeContent from '../components/content/HomeContent';
import WhatWeOffer from '../components/WhatWeOffer';
import BridgingTheGap from '../components/BridgingTheGap';
import FeaturedIn from '../components/FeaturedIn';

const About = () => {
  const aboutRef = useScrollAnimation();

  return (
    <div className="bg-cream">
      {/* Original About Content */}
      <div ref={aboutRef} className="max-w-6xl mx-auto px-6 py-16 animate-on-scroll">
        <HomeContent />
      </div>
      
      {/* New Sections */}
      <WhatWeOffer />
      <BridgingTheGap />
      <FeaturedIn />
    </div>
  );
};

export default About; 