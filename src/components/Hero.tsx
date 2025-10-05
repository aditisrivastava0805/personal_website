import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero = () => {
  const textRef = useScrollAnimation();
  const imageRef = useScrollAnimation();

  return (
    <section className="relative max-w-7xl mx-auto px-8 py-16">
      
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column - Text */}
        <div ref={textRef} className="animate-on-scroll-left space-y-8">
          {/* Meta Text */}
          <div className="flex items-center space-x-4">
            <div className="w-2 h-2 bg-pink rounded-full"></div>
            <p className="font-sans text-sm text-warm-gray tracking-wider uppercase">
              Open to Summer 2026 roles
            </p>
            <div className="w-2 h-2 bg-pink rounded-full"></div>
          </div>
          
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="highlight-serif text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold text-umber leading-none">
              Aditi
              <span className="block highlight-script text-pink text-5xl md:text-6xl lg:text-7xl xl:text-9xl pink-underline ">
                Srivastava
              </span>
            </h1>
            <p className="font-serif text-lg text-warm-gray max-w-lg leading-relaxed mt-8">
              Building meaningful, efficient, and scalable systems.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link 
              to="/contact"
              className="group relative bg-umber text-cream px-8 py-4 font-sans font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <span className="font-sans relative z-10 tracking-wide">Let's chat!</span>
              <div className="absolute inset-0 bg-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link 
              to="/projects"
              className="group relative border-2 border-pink text-umber px-8 py-4 font-sans font-medium transition-all duration-300 hover:bg-pink hover:text-cream"
            >
              <span className="font-sans relative z-10 tracking-wide">See my work</span>
              <div className="absolute inset-0 bg-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>

        {/* Right Column - Image */}
        <div ref={imageRef} className="relative animate-on-scroll-right">
          <div className="relative group cursor-pointer transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-pink-gradient">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/me.jpeg" 
                alt="Aditi Srivastava" 
                className="w-full h-[500px] object-cover transition-all duration-500 group-hover:scale-110" 
                loading="lazy" 
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-umber/20 to-transparent transition-opacity duration-500 group-hover:opacity-0"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-pink rounded-full flex items-center justify-center">
              <span className="text-cream text-xl">✨</span>
            </div>
            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-pink rounded-full"></div>
            <div className="absolute top-1/4 -right-4 w-6 h-6 bg-pink/60 rounded-full"></div>
            <div className="absolute bottom-1/4 -left-4 w-4 h-4 bg-pink/40 rounded-full"></div>
            
            {/* Curved Line Element */}
            <div className="absolute top-1/2 -left-8 w-16 h-16 border-2 border-pink rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-pink rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 