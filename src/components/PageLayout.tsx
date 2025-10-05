import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

const PageLayout = ({ children, title, subtitle }: PageLayoutProps) => {
  const pageRef = useScrollAnimation();

  return (
    <div className="min-h-screen">

      {/* Page Header */}
      {(title || subtitle) && (
        <section className="relative max-w-7xl mx-auto px-8 py-16">
          <div className="text-center">
            {title && (
              <h1 className="highlight-serif text-serif-4xl md:text-serif-5xl font-semibold text-umber mb-4">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="font-sans text-lg text-warm-gray max-w-2xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </section>
      )}

      {/* Page Content */}
      <div ref={pageRef} className="relative animate-on-scroll">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
