import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero = () => {
  const textRef = useScrollAnimation();
  const imageRef = useScrollAnimation();

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="rounded-3xl bg-umber text-parchment p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.12)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text column (left) */}
        <div ref={textRef} className="animate-on-scroll-left">
          {/* Meta row */}
          <div className="text-parchment/80 text-sm mb-3">
            Open to Summer 2026 roles
          </div>
          
          {/* Intro heading */}
          <h1 className="font-serif text-4xl md:text-5xl leading-tight">
            Aditi Srivastava
          </h1>
          
          {/* Subtitle/roles */}
          <p className="mt-3 text-parchment/85 max-w-[60ch]">
            Building useful systems with clean code and clear thinking.
          </p>
          
          {/* Buttons row */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link 
              to="/contact"
              className="bg-umber text-parchment px-6 py-3 rounded-full font-medium shadow hover:shadow-md transition-all duration-300 hover:-rotate-1 hover:scale-105 transform"
            >
              Let's chat!
            </Link>
            <Link 
              to="/projects"
              className="border border-umber px-6 py-3 rounded-full font-medium text-umber hover:bg-umber/5 transition-all duration-300 hover:rotate-1 hover:scale-105 transform"
            >
              See my work
            </Link>
          </div>
        </div>

        {/* Image column (right) */}
        <div ref={imageRef} className="relative animate-on-scroll-right">
          {/* Frame */}
          <div className="rounded-3xl overflow-hidden border-4 border-chamoisee rotate-1 shadow-lg">
            <img 
              src="/me.jpg" 
              alt="Aditi Srivastava" 
              className="w-full h-auto object-cover" 
              loading="lazy" 
            />
          </div>
          
          {/* Accent icons */}
          <div className="absolute -top-2 -right-2 text-2xl">✨</div>
          <div className="absolute -bottom-2 -left-2 text-xl">✨</div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 