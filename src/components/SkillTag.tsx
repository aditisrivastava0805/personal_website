interface SkillTagProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'neutral';
  size?: 'sm' | 'md' | 'lg';
}

const SkillTag = ({ children, variant = 'neutral', size = 'md' }: SkillTagProps) => {
  const baseClasses = 'inline-flex items-center rounded-full font-sans font-medium transition-all duration-200 hover:scale-105';
  
  const variantClasses = {
    primary: 'bg-umber text-cream hover:bg-umber/90',
    secondary: 'bg-chamoisee text-cream hover:bg-chamoisee/90',
    accent: 'bg-pink text-cream hover:bg-pink/90',
      neutral: 'bg-umber/10 text-umber hover:bg-pink/20 hover:text-pink'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}>
      {children}
    </span>
  );
};

export default SkillTag;
