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
    <header className="sticky top-0 z-30 bg-parchment border-b border-umber/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                        {/* Brand */}
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-umber flex items-center justify-center">
                    <h1 className="text-lg font-serif font-semibold text-parchment">AS</h1>
                  </div>
                </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => 
                `text-umber/70 hover:text-umber transition ${
                  isActive ? 'text-umber' : ''
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center">
          <NavLink 
            to="/contact"
            className="rounded-full bg-umber text-parchment px-4 py-2 font-medium hover:shadow transition-shadow"
          >
            Get in touch
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header; 