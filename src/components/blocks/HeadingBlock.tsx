interface HeadingBlockProps {
  level: 'h2' | 'h3';
  children: React.ReactNode;
}

const HeadingBlock = ({ level, children }: HeadingBlockProps) => {
  const Component = level;
  const className = level === 'h2' 
    ? 'text-2xl md:text-3xl font-semibold text-umber dark:text-gray-100'
    : 'text-xl font-semibold text-umber dark:text-gray-100';

  return (
    <Component className={className}>
      {children}
    </Component>
  );
};

export default HeadingBlock;