import { useScrollAnimation } from '../hooks/useScrollAnimation';

const FeaturedIn = () => {
  const sectionRef = useScrollAnimation();

  const publications = [
    { name: "GitHub", icon: "💻" },
    { name: "Stack Overflow", icon: "📚" }, 
    { name: "Dev.to", icon: "✍️" },
    { name: "LinkedIn", icon: "💼" }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden animate-on-scroll">
      {/* Decorative Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink via-pink/90 to-pink/70"></div>
      
      {/* Decorative Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-cream/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-20 w-32 h-32 bg-cream/10 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 right-10 w-16 h-16 border-2 border-cream/20 rounded-full"></div>
      <div className="absolute top-20 right-1/4 w-3 h-3 bg-cream/30 rounded-full"></div>
      <div className="absolute bottom-20 left-1/4 w-4 h-4 bg-cream/30 rounded-full"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          {/* Decorative line above */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-cream/40"></div>
            <div className="w-2 h-2 bg-cream/60 rounded-full rotate-45"></div>
            <div className="w-2 h-2 bg-cream/60 rounded-full rotate-45"></div>
            <div className="w-2 h-2 bg-cream/60 rounded-full rotate-45"></div>
            <div className="w-12 h-[2px] bg-cream/40"></div>
          </div>
          
          <h2 className="font-old-money-script text-4xl md:text-5xl text-cream mb-3 tracking-wide">
            See my work
          </h2>
          
          <p className="font-serif text-cream/80 text-sm md:text-base tracking-wide">
            Featured across platforms
          </p>
        </div>

        {/* Publications Grid - Badge Style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {publications.map((publication, index) => (
            <div
              key={index}
              className="group relative"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out backwards'
              }}
            >
              {/* Decorative stamp-like border */}
              <div className="absolute -inset-[3px] bg-cream/20 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              
              {/* Main card */}
              <div className="relative bg-cream rounded-lg p-6 shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:bg-cream/95">
                {/* Icon */}
                <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {publication.icon}
                </div>
                
                {/* Publication name */}
                <h3 className="font-serif font-semibold text-umber text-base md:text-lg tracking-wide mb-1">
                  {publication.name}
                </h3>
                
                {/* Decorative underline */}
                <div className="w-8 h-[2px] bg-pink mx-auto mt-2 group-hover:w-full transition-all duration-300"></div>
                
                {/* Corner decoration */}
                <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-pink/30 group-hover:border-pink transition-colors duration-300"></div>
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-pink/30 group-hover:border-pink transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Decorative bottom element */}
        <div className="flex items-center justify-center gap-2 mt-12">
          <div className="w-2 h-2 bg-cream/40 rounded-full"></div>
          <div className="w-2 h-2 bg-cream/60 rounded-full"></div>
          <div className="w-2 h-2 bg-cream/40 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
