/* ============================================================
   QUITTE Navbar — Light Theme with Financial Blue
   Sticky header with smooth transitions
   ============================================================ */
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';

function QuitteIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="32" height="32" rx="8" fill="currentColor" />
      <path
        d="M16 8C11.582 8 8 11.582 8 16C8 20.418 11.582 24 16 24C18.09 24 20.0 23.2 21.44 21.88L23.56 24L25 22.56L22.88 20.44C23.56 19.2 24 17.66 24 16C24 11.582 20.418 8 16 8ZM16 22C12.686 22 10 19.314 10 16C10 12.686 12.686 10 16 10C19.314 10 22 12.686 22 16C22 17.28 21.6 18.46 20.92 19.44L18.44 16.96L17 18.4L19.48 20.88C18.5 21.58 17.3 22 16 22Z"
        fill="white"
      />
    </svg>
  );
}

const navLinks = [
  { label: 'Início', href: '/' },
  { label: 'Funcionalidades', href: '/funcionalidades' },
  { label: 'Como Funciona', href: '/como-funciona' },
  { label: 'Preços', href: '/precos' },
  { label: 'Sobre', href: '/sobre' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-border shadow-sm' : 'bg-white/50 backdrop-blur-sm'
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2.5 group">
            <QuitteIcon className="w-8 h-8 text-primary transition-all duration-300 group-hover:scale-110" />
            <span className="font-heading font-bold text-foreground text-xl tracking-tight">Quitte</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className={`font-body text-sm transition-colors duration-200 hover:text-primary ${
                  location === link.href ? 'text-primary font-semibold' : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a href="#" className="btn-primary">
            Baixar App
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-foreground/5 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} className="text-foreground" /> : <Menu size={24} className="text-foreground" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-border animate-slide-down">
          <div className="container py-4 space-y-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`block py-2 font-body text-sm transition-colors ${
                    location === link.href ? 'text-primary font-semibold' : 'text-foreground/70'
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <a href="#" className="btn-primary block text-center mt-4">
              Baixar App
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
