import { useRef, useState, useEffect } from 'react';

interface CarouselItem {
  id: string;
  title: string;
  description: string;
  category: string;
}

interface SkillsCarouselProps {
  title: string;
  items: CarouselItem[];
}

const SkillsCarousel = ({ title, items }: SkillsCarouselProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  // Create infinite scroll by duplicating items
  const duplicatedItems = [...items, ...items, ...items];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current && !isScrolling) {
      setIsScrolling(true);
      const scrollAmount = 320; // Card width + gap
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });

      // Reset scrolling state after animation
      setTimeout(() => setIsScrolling(false), 300);
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft } = scrollContainerRef.current;
      const itemWidth = 320; // Card width + gap
      const totalItems = items.length;
      
      // Reset to middle set when reaching edges
      if (scrollLeft <= itemWidth) {
        scrollContainerRef.current.scrollLeft = itemWidth * totalItems + itemWidth;
      } else if (scrollLeft >= itemWidth * totalItems * 2) {
        scrollContainerRef.current.scrollLeft = itemWidth * totalItems;
      }
    }
  };

  // Initialize scroll position to middle set
  useEffect(() => {
    if (scrollContainerRef.current) {
      const itemWidth = 320; // Card width + gap
      scrollContainerRef.current.scrollLeft = itemWidth * items.length;
    }
  }, [items.length]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-pink rounded-full"></div>
          <h3 className="font-serif text-2xl text-umber">{title}</h3>
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => scroll('left')}
            disabled={isScrolling}
            className={`p-2 rounded-full border transition-all duration-200 ${
              isScrolling 
                ? 'border-umber/20 text-umber/30 cursor-not-allowed' 
                : 'border-pink/30 text-pink hover:bg-pink/10 hover:border-pink/50'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={isScrolling}
            className={`p-2 rounded-full border transition-all duration-200 ${
              isScrolling 
                ? 'border-umber/20 text-umber/30 cursor-not-allowed' 
                : 'border-pink/30 text-pink hover:bg-pink/10 hover:border-pink/50'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex space-x-6 overflow-x-auto scrollbar-hide py-8 px-4 -mx-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="group flex-shrink-0 w-80 bg-white/90 backdrop-blur-sm rounded-2xl border border-umber/10 p-6 shadow-sm hover:shadow-pink-gradient hover:-translate-y-2 hover:border-pink/30 transition-all duration-300 cursor-pointer"
            >
              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pink/10 text-pink border border-pink/20">
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h4 className="font-serif text-lg text-umber group-hover:text-pink transition-colors">
                  {item.title}
                </h4>
                <p className="font-sans text-sm text-warm-gray leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Hover Indicator */}
              <div className="mt-4 flex items-center text-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-medium">Learn more</span>
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicators - Always visible for infinite scroll */}
        <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-cream to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-cream to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default SkillsCarousel;
