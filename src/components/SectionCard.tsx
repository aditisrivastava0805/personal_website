interface SectionCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const SectionCard = ({ children, className = '', hover = true }: SectionCardProps) => {
  return (
    <div className={`
      relative bg-white/90 backdrop-blur-sm rounded-2xl border border-umber/10 p-8 shadow-sm
      ${hover ? 'hover:shadow-pink-gradient hover:-translate-y-1 hover:border-pink/20 transition-all duration-300' : ''}
      ${className}
    `}>
      {/* Subtle pink accent corner */}
      <div className="absolute top-4 right-4 w-1 h-1 bg-pink/40 rounded-full"></div>
      {children}
    </div>
  );
};

export default SectionCard;
