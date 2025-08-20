interface ToggleBlockProps {
  title: string;
  children: React.ReactNode;
}

const ToggleBlock = ({ title, children }: ToggleBlockProps) => {
  return (
    <div className="rounded-lg border border-chamoisee/30 dark:border-gray-800 p-3 bg-accent">
      <div className="w-full flex items-center gap-2 text-left mb-3">
        <span className="text-chamoisee dark:text-gray-400">▼</span>
        <span className="text-[15px] font-medium text-umber dark:text-gray-100">
          {title}
        </span>
      </div>
      <div className="ml-6">
        {children}
      </div>
    </div>
  );
};

export default ToggleBlock;