const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="rounded-3xl bg-umber text-parchment p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.12)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            {/* Meta row */}
            <div className="text-parchment/80 text-sm mb-3">
              Open to Summer 2026 roles
            </div>
            
            {/* H1 Title */}
            <h1 className="font-serif text-4xl md:text-5xl leading-tight">
              Aditi Srivastava
            </h1>
            
            {/* Lead paragraph */}
            <p className="mt-3 text-parchment/85 max-w-[60ch]">
              Building useful systems with clean code and clear thinking.
            </p>
            
            {/* CTAs row */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button className="bg-parchment text-umber rounded-full px-4 py-2 font-medium">
                View Projects
              </button>
              <a 
                href="#about" 
                className="text-parchment/85 underline-offset-4 hover:underline"
              >
                What I do
              </a>
            </div>
          </div>

          {/* Right: Image container */}
          <div className="overflow-hidden rounded-3xl bg-parchment/5">
            {/* Placeholder with initials since no image available */}
            <div className="w-full h-64 rounded-2xl bg-parchment/10 flex items-center justify-center">
              <div className="text-umber/30 text-6xl font-serif font-bold">
                AS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 