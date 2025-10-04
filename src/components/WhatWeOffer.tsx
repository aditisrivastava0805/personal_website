import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const WhatWeOffer = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const sectionRef = useScrollAnimation();

  const services = [
    {
      title: "Full-Stack Development",
      description: "End-to-end web applications with modern frameworks and clean architecture. From database design to user interface implementation.",
      icon: "💻"
    },
    {
      title: "AI & Machine Learning",
      description: "Intelligent systems and automation tools. Building AI-powered solutions that enhance productivity and user experience.",
      icon: "🤖"
    },
    {
      title: "DevOps & Infrastructure",
      description: "Scalable cloud infrastructure, CI/CD pipelines, and deployment automation. Ensuring reliable and efficient software delivery.",
      icon: "⚙️"
    }
  ];

  return (
    <section ref={sectionRef} className="relative max-w-7xl mx-auto px-8 py-20 animate-on-scroll">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-56 h-56 bg-gradient-to-br from-pink/28 via-pink/16 to-pink/6 rounded-full blur-2xl floating-gradient"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-tr from-pink/25 via-pink/12 to-pink/4 rounded-full blur-xl floating-gradient-2"></div>
      </div>

      <div className="relative">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-2 h-2 bg-pink rounded-full"></div>
            <h2 className="highlight-script text-script-4xl md:text-script-5xl text-umber">
              What I Offer
            </h2>
            <div className="w-2 h-2 bg-pink rounded-full"></div>
          </div>
          <p className="font-sans text-warm-gray max-w-2xl mx-auto leading-relaxed">
            Comprehensive software solutions that bridge the gap between innovative ideas and production-ready systems.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden"
            >
              {/* Service Bar */}
              <div
                className="relative bg-gradient-to-r from-umber/5 to-pink/5 border border-umber/10 cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-pink/30 hover:bg-gradient-to-r hover:from-pink/10 hover:to-pink/5"
                onClick={() => setExpandedItem(expandedItem === index ? null : index)}
              >
                <div className="flex items-center justify-between p-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">{service.icon}</span>
                    <h3 className="font-sans text-lg font-semibold text-umber">
                      {service.title}
                    </h3>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink rounded-full"></div>
                    <span className="text-pink text-xl transition-transform duration-300 group-hover:rotate-45">
                      +
                    </span>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedItem === index && (
                  <div className="px-6 pb-6 animate-on-scroll-fade">
                    <div className="border-t border-umber/10 pt-4">
                      <p className="font-sans text-warm-gray leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="font-sans text-sm text-warm-gray mb-4">Ready to work together?</p>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 h-px bg-pink/30"></div>
            <div className="w-2 h-2 bg-pink rounded-full"></div>
            <span className="highlight-script text-script-lg text-pink">Let's build something amazing</span>
            <div className="w-2 h-2 bg-pink rounded-full"></div>
            <div className="w-8 h-px bg-pink/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
