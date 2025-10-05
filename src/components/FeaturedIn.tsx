import { useScrollAnimation } from '../hooks/useScrollAnimation';

const FeaturedIn = () => {
  const sectionRef = useScrollAnimation();

  const publications = [
    "GitHub",
    "Stack Overflow", 
    "Dev.to",
    "LinkedIn"
  ];

  return (
    <section ref={sectionRef} className="relative py-16 animate-on-scroll">
      {/* Pink Bar Background */}
      <div className="absolute inset-0 bg-pink"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-8">
        <div className="text-center mb-8">
          <h2 className="font-script text-2xl md:text-3xl text-cream mb-2">
            See my work
          </h2>            
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {publications.map((publication, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="bg-cream/10 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 group-hover:bg-cream/20 group-hover:scale-105">
                <h3 className="font-sans font-semibold text-cream text-sm md:text-base tracking-wide">
                  {publication}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center space-x-2">
            <div className="w-8 h-px bg-cream/50"></div>
            <div className="w-2 h-2 bg-cream rounded-full"></div>
            <div className="w-8 h-px bg-cream/50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
