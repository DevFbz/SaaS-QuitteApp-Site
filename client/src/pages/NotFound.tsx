import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[oklch(0.06_0_0)] flex items-center justify-center">
      <div className="text-center px-4">
        <div className="font-display text-[10rem] md:text-[14rem] font-bold text-white/5 leading-none select-none mb-4">
          404
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 -mt-8">
          Página não encontrada
        </h1>
        <p className="font-body text-white/50 mb-8 max-w-sm mx-auto">
          A página que você procura não existe ou foi movida. Volte para o início.
        </p>
        <Link href="/">
          <span className="btn-primary inline-flex group">
            Voltar ao Início
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </div>
    </div>
  );
}
