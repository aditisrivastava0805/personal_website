interface TextBlockProps {
  children: React.ReactNode;
}

const TextBlock = ({ children }: TextBlockProps) => {
  return (
    <p className="text-[15px] leading-7 text-gray-700 dark:text-gray-300">
      {children}
    </p>
  );
};

export default TextBlock;