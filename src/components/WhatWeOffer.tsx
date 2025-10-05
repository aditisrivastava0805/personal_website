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

      <div className="relative">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-2 h-2 bg-pink rounded-full"></div>
            <h2 className="highlight-script text-script-4xl md:text-script-5xl font-semibold text-umber leading-tight">
              What I
              <span className="block highlight-serif text-serif-3xl md:text-serif-4xl text-umber">
                Offer
              </span>
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
      </div>
    </section>
  );
};

export default WhatWeOffer;
