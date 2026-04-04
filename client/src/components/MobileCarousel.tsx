/* ============================================================
   QUITTE Mobile Carousel — Animated App Screens
   Cycles through app screens with smooth transitions
   ============================================================ */
import { useEffect, useState } from 'react';

interface Screen {
  title: string;
  desc: string;
  content: React.ReactNode;
}

const screens: Screen[] = [
  {
    title: 'Dashboard',
    desc: 'Visão completa de todas as dívidas',
    content: (
      <div className="p-6 space-y-4">
        <div className="text-center mb-6">
          <div className="text-3xl font-bold text-primary">R$ 12.450</div>
          <div className="text-sm text-foreground/50">Total devido</div>
        </div>
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-foreground/5 rounded-lg p-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-semibold text-foreground">Débito {i}</span>
                <span className="text-xs text-primary">R$ {2000 + i * 500}</span>
              </div>
              <div className="w-full bg-border rounded-full h-1.5">
                <div
                  className="bg-primary h-1.5 rounded-full"
                  style={{ width: `${40 + i * 15}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'Lembretes',
    desc: 'Notificações inteligentes',
    content: (
      <div className="p-6 space-y-3">
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
          <div className="text-xs font-semibold text-primary mb-1">Vencimento em 3 dias</div>
          <div className="text-sm text-foreground">Cartão Nubank - R$ 4.200</div>
        </div>
        <div className="bg-foreground/5 border border-border rounded-lg p-3">
          <div className="text-xs font-semibold text-foreground/60 mb-1">Próximo vencimento</div>
          <div className="text-sm text-foreground">Financiamento - R$ 5.200</div>
        </div>
        <div className="bg-foreground/5 border border-border rounded-lg p-3">
          <div className="text-xs font-semibold text-foreground/60 mb-1">Próximo vencimento</div>
          <div className="text-sm text-foreground">Empréstimo - R$ 3.050</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Gráficos',
    desc: 'Acompanhe sua evolução',
    content: (
      <div className="p-6 space-y-4">
        <div className="text-center mb-4">
          <div className="text-2xl font-bold text-primary">67%</div>
          <div className="text-xs text-foreground/50">Progresso</div>
        </div>
        <div className="space-y-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-12 text-xs text-foreground/50">Mês {i}</div>
              <div className="flex-1 bg-border rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: `${30 + i * 15}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'Perfil',
    desc: 'Suas configurações',
    content: (
      <div className="p-6 space-y-4">
        <div className="text-center mb-4">
          <div className="w-12 h-12 rounded-full bg-primary/20 mx-auto mb-2 flex items-center justify-center">
            <span className="text-lg font-bold text-primary">U</span>
          </div>
          <div className="font-semibold text-foreground">Usuário Quitte</div>
          <div className="text-xs text-foreground/50">usuario@quitte.app</div>
        </div>
        <div className="space-y-2 border-t border-border pt-4">
          {['Configurações', 'Privacidade', 'Suporte'].map((item) => (
            <div key={item} className="text-sm text-foreground/70 py-2">
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export default function MobileCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % screens.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlay]);

  return (
    <div
      className="relative w-full max-w-xs mx-auto"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Phone frame */}
      <div className="relative bg-black rounded-3xl border-8 border-black shadow-2xl overflow-hidden aspect-[9/19.5]">
        {/* Screen content */}
        <div className="relative w-full h-full bg-white overflow-hidden">
          {screens.map((screen, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-all duration-700 ease-out"
              style={{
                opacity: current === i ? 1 : 0,
                transform:
                  current === i
                    ? 'translateX(0)'
                    : current > i
                      ? 'translateX(-100%)'
                      : 'translateX(100%)',
              }}
            >
              {/* Status bar */}
              <div className="bg-white border-b border-border px-6 py-2 text-center text-xs text-foreground/50">
                Quitte
              </div>
              {/* Content */}
              <div className="h-[calc(100%-2.5rem)] overflow-hidden">{screen.content}</div>
            </div>
          ))}
        </div>

        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-10" />
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {screens.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrent(i);
              setIsAutoPlay(false);
            }}
            className={`transition-all duration-300 rounded-full ${
              current === i ? 'w-8 h-2 bg-primary' : 'w-2 h-2 bg-foreground/20 hover:bg-foreground/40'
            }`}
            aria-label={`Go to screen ${i + 1}`}
          />
        ))}
      </div>

      {/* Screen titles */}
      <div className="text-center mt-6">
        <h3 className="font-heading font-bold text-foreground text-lg">{screens[current].title}</h3>
        <p className="text-sm text-foreground/60">{screens[current].desc}</p>
      </div>
    </div>
  );
}
