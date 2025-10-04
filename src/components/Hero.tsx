import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero = () => {
  const textRef = useScrollAnimation();
  const imageRef = useScrollAnimation();

  return (
    <section className="relative max-w-7xl mx-auto px-8 py-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-pink/35 via-pink/20 to-pink/8 rounded-full blur-3xl floating-gradient"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-pink/30 via-pink/18 to-pink/6 rounded-full blur-2xl floating-gradient-2"></div>
        <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-gradient-to-bl from-pink/25 via-pink/15 to-pink/5 rounded-full blur-2xl floating-gradient"></div>
      </div>
      
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
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-umber leading-tight">
              Building
              <span className="block highlight-script text-pink text-script-4xl md:text-script-5xl lg:text-script-6xl pink-underline">
                useful systems
              </span>
            </h1>
            <p className="font-sans text-lg text-warm-gray max-w-lg leading-relaxed">
              with clean code and clear thinking.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link 
              to="/contact"
              className="group relative bg-umber text-cream px-8 py-4 font-sans font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <span className="relative z-10">Let's chat!</span>
              <div className="absolute inset-0 bg-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link 
              to="/projects"
              className="group relative border-2 border-pink text-umber px-8 py-4 font-sans font-medium transition-all duration-300 hover:bg-pink hover:text-cream"
            >
              <span className="relative z-10">See my work</span>
              <div className="absolute inset-0 bg-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>

        {/* Right Column - Image */}
        <div ref={imageRef} className="relative animate-on-scroll-right">
          <div className="relative">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/me.jpeg" 
                alt="Aditi Srivastava" 
                className="w-full h-[500px] object-cover" 
                loading="lazy" 
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-umber/20 to-transparent"></div>
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