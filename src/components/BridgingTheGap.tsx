import { useScrollAnimation } from '../hooks/useScrollAnimation';

const BridgingTheGap = () => {
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();

  return (
    <section className="relative max-w-7xl mx-auto px-8 py-20">

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <div ref={leftRef} className="animate-on-scroll-left space-y-8">
          {/* Title */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-pink rounded-full"></div>
              <h2 className="highlight-serif text-serif-4xl md:text-serif-5xl font-semibold text-umber leading-tight">
                Bridging the
                <span className="block highlight-script text-pink text-script-3xl md:text-script-4xl pink-underline">
                  Gap
                </span>
              </h2>
            </div>
            <p className="font-sans text-lg text-warm-gray leading-relaxed max-w-lg">
              Between innovative ideas and production-ready systems. I transform complex problems into elegant, scalable solutions.
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-pink rounded-full flex items-center justify-center">
                <span className="text-cream text-sm font-sans font-semibold">01</span>
              </div>
              <div>
                <h3 className="font-script text-xl text-umber mb-2">Discovery</h3>
                <p className="font-sans text-warm-gray text-sm leading-relaxed">
                  Understanding your vision, requirements, and technical constraints to create the perfect solution.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-chamoisee rounded-full flex items-center justify-center">
                <span className="text-cream text-sm font-sans font-semibold">02</span>
              </div>
              <div>
                <h3 className="font-script text-xl text-umber mb-2">Development</h3>
                <p className="font-sans text-warm-gray text-sm leading-relaxed">
                  Building robust, scalable systems with clean code and modern best practices.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-umber rounded-full flex items-center justify-center">
                <span className="text-cream text-sm font-sans font-semibold">03</span>
              </div>
              <div>
                <h3 className="font-script text-xl text-umber mb-2">Deployment</h3>
                <p className="font-sans text-warm-gray text-sm leading-relaxed">
                  Seamless deployment with monitoring, maintenance, and ongoing support.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div ref={rightRef} className="relative animate-on-scroll-right">
          {/* Main Image Container */}
          <div className="relative">
            {/* Curved Line Element */}
            <div className="absolute -top-8 -left-8 w-24 h-24 border-2 border-pink rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-pink rounded-full"></div>
            </div>

            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/me.jpeg" 
                alt="Aditi Srivastava working" 
                className="w-full h-[400px] object-cover" 
                loading="lazy" 
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink/20 to-umber/20"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-chamoisee rounded-full flex items-center justify-center">
              <span className="text-cream text-2xl">⚡</span>
            </div>
            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-pink rounded-full flex items-center justify-center">
              <span className="text-cream text-lg">✨</span>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="mt-8 text-center">
            <h3 className="font-serif text-2xl text-umber mb-2">
              Of
              <span className="text-pink"> Innovation</span>
              <span className="highlight-script text-script-xl text-pink">& Your Vision—</span>
            </h3>
            <div className="flex items-center justify-center space-x-2 mt-4">
              <div className="w-12 h-px bg-pink/30"></div>
              <div className="w-2 h-2 bg-pink rounded-full"></div>
              <div className="w-12 h-px bg-pink/30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BridgingTheGap;
