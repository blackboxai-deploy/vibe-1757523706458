"use client";

import Link from 'next/link';
import { useState } from 'react';

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Tips', href: '/tips' },
  { name: 'Sobre Mí', href: '/sobre-mi' },
  { name: 'Contacto', href: '/contacto' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-brand-sage/20">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center justify-between px-6 py-4">
          {/* Logo Formal */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="flex flex-col">
              <h1 className="font-serif text-2xl md:text-3xl font-bold formal-gradient-text group-hover:scale-105 transition-transform duration-300">
                Mi Vida Keto
              </h1>
              <span className="font-script text-lg text-brand-coral -mt-1 opacity-90">
                ALMA CREATIVA
              </span>
            </div>
          </Link>

          {/* Navigation Desktop - Formal */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-brand-forest hover:text-brand-sage font-medium transition-colors duration-300 relative group py-2"
              >
                {item.name}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-brand-sage transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/servicios"
              className="px-6 py-3 bg-brand-forest text-white formal-button hover:bg-brand-moss"
            >
              Ver Servicios
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-brand-forest hover:text-brand-sage transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-brand-sage/20 bg-white/95 backdrop-blur-md">
            <div className="px-6 py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-brand-forest hover:text-brand-sage font-medium py-2 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/servicios"
                className="block px-6 py-3 bg-brand-forest text-white text-center formal-button hover:bg-brand-moss mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Ver Servicios
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}