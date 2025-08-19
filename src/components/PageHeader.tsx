interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2 text-umber dark:text-gray-100">
        {title}
      </h1>
      {subtitle && (
        <p className="text-[15px] leading-7 text-chamoisee dark:text-gray-300">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default PageHeader;