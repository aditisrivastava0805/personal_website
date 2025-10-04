import { NavLink } from 'react-router-dom';

const Header = () => {
  
  const navItems = [
    { name: 'About', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-30 bg-cream/90 backdrop-blur-md border-b border-umber/5">
      <div className="max-w-7xl mx-auto px-8 py-6">
        {/* Top Brand Line */}
        <div className="text-center mb-4">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-1 h-1 bg-pink rounded-full"></div>
            <p className="text-sm text-warm-gray font-sans tracking-wider uppercase">Designed By</p>
            <div className="w-1 h-1 bg-pink rounded-full"></div>
          </div>
        </div>
        
        {/* Main Header Content */}
        <div className="flex items-center justify-between">
          {/* Left Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-pink rounded-full"></div>
            <h1 className="highlight-script text-script-2xl text-umber">AS</h1>
          </div>

          {/* Center Brand */}
          <div className="text-center">
            <h2 className="highlight-serif text-serif-3xl md:text-serif-4xl font-bold text-umber tracking-tight">
              Aditi Srivastava
            </h2>
          </div>

          {/* Right CTA */}
          <div className="flex items-center space-x-2">
            <NavLink 
              to="/contact"
              className="font-sans text-sm text-warm-gray hover:text-pink transition-colors"
            >
              Get in touch
            </NavLink>
            <div className="w-2 h-2 bg-pink rounded-full"></div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center justify-center space-x-12 mt-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => 
                `font-sans text-sm text-warm-gray hover:text-pink transition-colors ${
                  isActive ? 'text-pink' : ''
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header; 