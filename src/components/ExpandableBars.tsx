import { useState, useEffect } from 'react';

interface ExpandableBarProps {
  title: string;
  subtitle: string;
  personality: string;
  details: string[];
  color: string;
  icon: string;
}

const ExpandableBar = ({ title, subtitle, personality, details, color, icon }: ExpandableBarProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [animateDetails, setAnimateDetails] = useState(false);

  useEffect(() => {
    if (isExpanded) {
      const timer = setTimeout(() => setAnimateDetails(true), 200);
      return () => clearTimeout(timer);
    } else {
      setAnimateDetails(false);
    }
  }, [isExpanded]);

  return (
    <div 
      className={`relative rounded-2xl shadow-sm cursor-pointer transition-all duration-700 hover:shadow-pink-gradient hover:-translate-y-2 hover:scale-[1.02] ${color} overflow-hidden`}
      onClick={() => setIsExpanded(!isExpanded)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background Blob */}
      <div className={`absolute inset-0 bg-gradient-to-br from-pink/5 to-transparent transition-all duration-1000 ${isHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-100'}`}></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-4 right-4 w-2 h-2 bg-pink/30 rounded-full transition-all duration-1000 ${isHovered ? 'animate-bounce opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0s' }}></div>
        <div className={`absolute top-8 right-12 w-1 h-1 bg-pink/40 rounded-full transition-all duration-1000 ${isHovered ? 'animate-bounce opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}></div>
        <div className={`absolute top-12 right-8 w-1.5 h-1.5 bg-pink/20 rounded-full transition-all duration-1000 ${isHovered ? 'animate-bounce opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}></div>
      </div>

      {/* Main Bar */}
      <div className="relative flex items-center justify-between px-8 py-8">
        <div className="flex items-center space-x-6">
          <div className={`text-4xl transition-all duration-500 ${isHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}`}>
            {icon}
          </div>
          <div>
            <h3 className="font-serif text-2xl text-umber font-semibold mb-1 transition-colors duration-300">
              {title}
            </h3>
            <p className="font-sans text-sm text-warm-gray font-medium">
              {subtitle}
            </p>
          </div>
        </div>
        <div className={`transform transition-all duration-500 ${isExpanded ? 'rotate-45 scale-110' : 'rotate-0 scale-100'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isHovered ? 'bg-pink/30' : 'bg-pink/20'}`}>
            <svg className="w-4 h-4 text-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
        </div>
      </div>

      {/* Expandable Content */}
      <div className={`overflow-hidden transition-all duration-700 ease-out ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-8 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Personality */}
            <div className={`space-y-15 transition-all duration-700 ${animateDetails ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <div className="flex items-center space-x-3">
              </div>
              <div className="relative pl-10 pr-10">
                <p className="font-sans text-l text-warm-gray leading-relaxed relative z-10">
                  {personality}
                </p>
                {/* Decorative quote marks with creative tilt */}
                <div className="absolute -top-5 -left-2 text-5xl text-pink/20 font-serif transform -rotate-12 transition-transform duration-500 hover:rotate-0">"</div>
                <div className="absolute -bottom-6 right-5 text-5xl text-pink/20 font-serif transform rotate-12 transition-transform duration-500 hover:-rotate-0">"</div>
              </div>
            </div>
            
            {/* Right Column - Details */}
            <div className={`space-y-4 transition-all duration-700 ${animateDetails ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink rounded-full animate-pulse"></div>
                <h4 className="font-serif text-lg text-umber font-semibold">What I Bring</h4>
              </div>
              <ul className="space-y-3">
                {details.map((detail, index) => (
                  <li 
                    key={index} 
                    className={`flex items-start space-x-3 transition-all duration-500 ${animateDetails ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="w-1.5 h-1.5 bg-pink rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                    <span className="font-sans text-sm text-warm-gray leading-relaxed group-hover:text-pink transition-colors duration-300">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Bottom decorative line */}
          <div className={`mt-8 h-px bg-gradient-to-r from-transparent via-pink/30 to-transparent transition-all duration-700 ${animateDetails ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
        </div>
      </div>
    </div>
  );
};

const ExpandableBars = () => {
  const bars = [
    {
      title: "About Me",
      subtitle: "The person behind the code",
      personality: "I'm naturally curious and love diving deep into complex problems. When I'm not coding, you'll find me exploring new technologies, reading about system design, or experimenting with the latest AI tools. I believe great software comes from understanding both the technical and human sides of problems.",
      details: [
        "Passionate about clean, maintainable code",
        "Love learning new technologies and frameworks",
        "Strong problem-solving and analytical skills",
        "Collaborative team player with leadership experience",
        "Detail-oriented with a focus on user experience"
      ],
      color: "bg-gradient-to-r from-pink/20 to-pink/10 hover:from-pink/30 hover:to-pink/20",
      icon: "👋"
    },
    {
      title: "Open to Summer 2026 Roles",
      subtitle: "Ready for the next adventure",
      personality: "I'm excited to bring my passion for technology to a dynamic team where I can grow and make meaningful contributions. I thrive in environments that value innovation, collaboration, and continuous learning. Looking for opportunities where I can solve real-world problems and build something impactful.",
      details: [
        "Software Engineering Internships",
        "Backend Development roles",
        "AI/ML Engineering opportunities",
        "Startup and tech company environments",
        "Remote or hybrid work arrangements"
      ],
      color: "bg-gradient-to-r from-pink/15 to-pink/5 hover:from-pink/25 hover:to-pink/15",
      icon: "🚀"
    },
    {
      title: "What I'm Building",
      subtitle: "Current projects and passions",
      personality: "I love building tools that make developers' lives easier and applications more powerful. Currently exploring how AI can enhance traditional software development workflows.",
      details: [
        "AI-assisted development tools",
        "Scalable backend systems",
        "Developer productivity applications",
        "Open source contributions",
        "Personal portfolio and learning projects"
      ],
      color: "bg-gradient-to-r from-pink/10 to-pink/5 hover:from-pink/20 hover:to-pink/10",
      icon: "🛠️"
    }
  ];

  return (
    <div className="space-y-6 w-full">
      {bars.map((bar, index) => (
        <ExpandableBar
          key={index}
          title={bar.title}
          subtitle={bar.subtitle}
          personality={bar.personality}
          details={bar.details}
          color={bar.color}
          icon={bar.icon}
        />
      ))}
    </div>
  );
};

export default ExpandableBars;