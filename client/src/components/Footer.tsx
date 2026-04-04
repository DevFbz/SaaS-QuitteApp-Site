/* ============================================================
   QUITTE Footer — Light Theme
   ============================================================ */
import { Link } from 'wouter';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

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

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="container py-16 md:py-20">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <QuitteIcon className="w-8 h-8 text-primary" />
              <span className="font-heading font-bold text-foreground text-xl">Quitte</span>
            </div>
            <p className="font-body text-foreground/60 text-sm leading-relaxed max-w-xs">
              O app que transforma a forma como você enfrenta suas dívidas. Simples, inteligente e eficiente.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-foreground/40 hover:text-primary hover:border-primary transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-foreground/40 hover:text-primary hover:border-primary transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-foreground/40 hover:text-primary hover:border-primary transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:contato@quitte.app"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-foreground/40 hover:text-primary hover:border-primary transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground text-sm mb-4 tracking-wide">Produto</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Funcionalidades', href: '/funcionalidades' },
                { label: 'Como Funciona', href: '/como-funciona' },
                { label: 'Preços', href: '/precos' },
                { label: 'Blog', href: '/blog' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>
                    <span className="font-body text-foreground/50 text-sm hover:text-primary transition-colors duration-200 cursor-pointer">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground text-sm mb-4 tracking-wide">Empresa</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Sobre Nós', href: '/sobre' },
                { label: 'Carreiras', href: '/carreiras' },
                { label: 'Contato', href: '/contato' },
                { label: 'Imprensa', href: '#' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>
                    <span className="font-body text-foreground/50 text-sm hover:text-primary transition-colors duration-200 cursor-pointer">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-line mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-foreground/30 text-xs">© 2025 Quitte. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-body text-foreground/30 text-xs hover:text-foreground/60 transition-colors">
              Privacidade
            </a>
            <a href="#" className="font-body text-foreground/30 text-xs hover:text-foreground/60 transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="font-body text-foreground/30 text-xs hover:text-foreground/60 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
