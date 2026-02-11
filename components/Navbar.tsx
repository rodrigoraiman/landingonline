'use client';

import { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#services', label: 'Voir nos services' },
    { href: '#process', label: 'Méthode' },
    { href: '#testimonials', label: 'Avis' },
    { href: '#pricing', label: 'Tarifs' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Logo className="h-10 w-auto" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-gray-900 rounded px-2 py-1"
                onClick={(e) => {
                  if (link.href && link.href.replace('#', '') === 'services') {
                    e.preventDefault();
                    const el = document.getElementById('services');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <button
              className="hidden sm:inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-gray-900"
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Devis gratuit
            </button>
            
            <DarkModeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              aria-label="Menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                onClick={(e) => {
                  setIsOpen(false);
                  if (link.href && link.href.replace('#', '') === 'services') {
                    e.preventDefault();
                    const el = document.getElementById('services');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
              >
                {link.label}
              </a>
            ))}
            <button className="w-full bg-green-600 dark:bg-green-500 hover:bg-green-700 dark:hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors mt-2">
              Devis gratuit
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
