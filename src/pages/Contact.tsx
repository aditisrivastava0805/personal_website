import PageLayout from '../components/PageLayout';
import SectionCard from '../components/SectionCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const contactRef = useScrollAnimation();

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "aditi@utexas.edu",
      href: "mailto:aditi@utexas.edu",
      description: "Best way to reach me for professional inquiries"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/aditi-srivastava",
      href: "https://linkedin.com/in/aditi-srivastava",
      description: "Professional network and career updates"
    },
    {
      icon: "📄",
      title: "Resume",
      value: "Download Resume (PDF)",
      href: "/Aditi_Srivastava_Resume.pdf",
      description: "Detailed experience and qualifications"
    },
    {
      icon: "🎓",
      title: "University",
      value: "University of Texas at Austin",
      href: null,
      description: "Computer Science Student"
    }
  ];

  const opportunities = [
    {
      title: "Summer 2026 Internships",
      description: "Software engineering internships focused on backend development, DevOps, or platform engineering. Particularly interested in roles involving AI/ML integration and modern cloud infrastructure."
    },
    {
      title: "Collaboration Opportunities",
      description: "Open source projects, hackathons, or research collaborations in areas like accessibility technology, developer tools, or systems programming."
    },
    {
      title: "Networking",
      description: "Always happy to connect with fellow developers, especially those working in platform engineering, DevOps, or AI-assisted development tools."
    }
  ];

  return (
    <PageLayout 
      title="Contact" 
      subtitle="Let's connect and discuss opportunities."
    >
      <div ref={contactRef} className="max-w-7xl mx-auto px-8 py-16 animate-on-scroll">
        <div className="space-y-12">
          {/* Call to Action */}
          <SectionCard>
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-2 h-2 bg-pink rounded-full"></div>
                <p className="font-sans text-sm text-warm-gray tracking-wider uppercase">
                  Open to Summer 2026 internship and full-time opportunities
                </p>
                <div className="w-2 h-2 bg-pink rounded-full"></div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-8 h-px bg-pink/30"></div>
                <div className="w-1 h-1 bg-pink rounded-full"></div>
                <div className="w-8 h-px bg-pink/30"></div>
              </div>
              <p className="font-sans text-warm-gray leading-relaxed max-w-2xl mx-auto">
                I'm always interested in discussing new opportunities, collaborating on interesting projects, or just connecting with fellow developers and engineers.
              </p>
            </div>
          </SectionCard>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactMethods.map((method, index) => (
              <SectionCard key={index}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{method.icon}</span>
                    <h3 className="font-serif text-xl text-umber">{method.title}</h3>
                  </div>
                  
                  {method.href ? (
                    <a 
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="font-sans text-chamoisee hover:text-pink transition-colors text-lg hover:underline"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="font-sans text-chamoisee text-lg">{method.value}</p>
                  )}
                  
                  <p className="font-sans text-sm text-warm-gray">
                    {method.description}
                  </p>
                </div>
              </SectionCard>
            ))}
          </div>

          {/* What I'm Looking For */}
          <SectionCard>
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink rounded-full"></div>
                <h3 className="font-serif text-2xl text-umber">What I'm Looking For</h3>
              </div>
              <div className="space-y-6">
                {opportunities.map((opp, index) => (
                  <div key={index} className="space-y-3">
                    <h4 className="font-sans text-lg font-semibold text-umber">{opp.title}</h4>
                    <p className="font-sans text-warm-gray leading-relaxed">
                      {opp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </SectionCard>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-4">
              <div className="w-16 h-px bg-umber/30"></div>
              <span className="highlight-script text-script-xl text-pink">Let's build something amazing together</span>
              <div className="w-16 h-px bg-umber/30"></div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact; 