import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, MessageCircle } from 'lucide-react';

interface HeaderProps {
  onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Demo', href: '#demo' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center mr-2 sm:mr-3 transition-all duration-300 ${
              isScrolled 
                ? 'bg-gradient-to-br from-blue-600 to-teal-600' 
                : 'bg-white/20 backdrop-blur-sm border border-white/30'
            }`}>
              <FileText className={`h-3 w-3 sm:h-5 sm:w-5 ${isScrolled ? 'text-white' : 'text-blue-600'}`} />
            </div>
            <span className={`text-base sm:text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-gray-900'
            }`}>
              <span className="hidden sm:inline">Resume Builder Pro</span>
              <span className="sm:hidden">Resume Pro</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-colors duration-300 hover:text-blue-600 text-sm lg:text-base ${
                  isScrolled ? 'text-gray-700' : 'text-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <button 
              onClick={onContactClick}
              className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 text-sm lg:text-base"
            >
              <MessageCircle className="h-4 w-4 mr-1 lg:mr-2" />
              <span className="hidden lg:inline">Contact</span>
            </button>
            <button 
              onClick={() => scrollToSection('#pricing')}
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold px-4 lg:px-6 py-2 lg:py-2.5 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm lg:text-base"
            >
              <span className="hidden lg:inline">View Packages</span>
              <span className="lg:hidden">Packages</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-gray-700 hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-lg">
            <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 py-2 text-sm sm:text-base"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-3 sm:pt-4 border-t border-gray-200 space-y-3">
                <button 
                  onClick={() => {
                    onContactClick();
                    setIsMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center border-2 border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-700 font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all duration-300 text-sm sm:text-base"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Contact Us
                </button>
                <button 
                  onClick={() => scrollToSection('#pricing')}
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all duration-300 text-sm sm:text-base"
                >
                  View Packages
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;