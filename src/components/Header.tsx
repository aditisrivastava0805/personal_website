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
      <div className="max-w-7xl mx-auto py-6">
        {/* Top Brand Line */}
        <div className="text-center mb-4 px-8">
          <div className="flex items-center justify-center space-x-3">
          </div>
        </div>
        
        {/* Main Header Content */}
        <div className="flex items-center justify-between px-4">
          {/* Left Logo */}
          <div className="flex items-center">
            <h1 className="highlight-script text-script-4xl font-semibold text-pink">AS</h1>
          </div>

          {/* Center Navigation */}
          <nav className="flex items-center space-x-12">
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

          {/* Right CTA */}
          <div className="flex items-center">
            <NavLink 
              to="/contact"
              className="font-sans text-sm text-warm-gray hover:text-pink transition-colors"
            >
              Get in touch
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 