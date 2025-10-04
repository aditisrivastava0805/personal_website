import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  showBackground?: boolean;
}

const PageLayout = ({ children, title, subtitle, showBackground = true }: PageLayoutProps) => {
  const pageRef = useScrollAnimation();

  return (
    <div className={`${showBackground ? 'bg-cream' : ''} min-h-screen`}>
      {/* Background Elements */}
      {showBackground && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-pink/30 via-pink/18 to-pink/6 rounded-full blur-3xl floating-gradient"></div>
          <div className="absolute bottom-20 left-20 w-56 h-56 bg-gradient-to-tr from-pink/25 via-pink/15 to-pink/4 rounded-full blur-2xl floating-gradient-2"></div>
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-bl from-pink/22 via-pink/12 to-pink/4 rounded-full blur-2xl floating-gradient"></div>
        </div>
      )}

      {/* Page Header */}
      {(title || subtitle) && (
        <section className="relative max-w-7xl mx-auto px-8 py-16">
          <div className="text-center">
            {title && (
              <h1 className="font-serif text-4xl md:text-5xl font-semibold text-umber mb-4">
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
