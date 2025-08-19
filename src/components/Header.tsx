import { useState } from 'react';

const Header = () => {
  const [activePage, setActivePage] = useState('About');
  
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="sticky top-0 z-30 bg-parchment border-b border-umber/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center">
          <h1 className="text-xl font-semibold text-umber">Portfolio</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-umber/70 hover:text-umber transition ${
                activePage === item.name ? 'text-umber' : ''
              }`}
              onClick={() => setActivePage(item.name)}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center">
          <button className="rounded-full bg-umber text-parchment px-4 py-2 font-medium hover:shadow transition-shadow">
            Get in touch
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 