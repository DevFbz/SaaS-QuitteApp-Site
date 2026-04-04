/* ============================================================
   QUITTE Preços Page — Dark Editorial Luxury
   ============================================================ */
import { useState } from 'react';
import { CheckCircle2, ArrowRight, Zap, Crown, Sparkles } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const PATTERN = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663514458854/PtfVkPXLtJh3WFqwGZAVah/quitte-abstract-pattern-mz5cjxRoULSBhR3Cf2wjwf.webp';

const plans = [
  {
    name: 'Gratuito',
    icon: Zap,
    price: { monthly: 0, yearly: 0 },
    desc: 'Para quem está começando a organizar as finanças.',
    features: [
      'Até 5 dívidas cadastradas',
      'Lembretes básicos',
      'Relatório mensal',
      'Suporte por e-mail',
      'Sincronização em 1 dispositivo',
    ],
    missing: ['Dívidas ilimitadas', 'Relatórios avançados', 'Dívidas compartilhadas', 'Exportação PDF', 'Suporte prioritário'],
    cta: 'Começar Grátis',
    highlight: false,
  },
  {
    name: 'Pro',
    icon: Crown,
    price: { monthly: 19.90, yearly: 14.90 },
    desc: 'Para quem quer o controle total da vida financeira.',
    features: [
      'Dívidas ilimitadas',
      'Lembretes avançados personalizados',
      'Relatórios detalhados com gráficos',
      'Exportação em PDF',
      'Dívidas compartilhadas',
      'Sincronização em todos os dispositivos',
      'Suporte prioritário 24h',
      'Backup automático na nuvem',
    ],
    missing: [],
    cta: 'Assinar Pro',
    highlight: true,
  },
  {
    name: 'Família',
    icon: Sparkles,
    price: { monthly: 34.90, yearly: 24.90 },
    desc: 'Para famílias que querem organizar as finanças juntas.',
    features: [
      'Tudo do plano Pro',
      'Até 6 membros da família',
      'Painel familiar compartilhado',
      'Metas financeiras coletivas',
      'Relatório familiar mensal',
      'Suporte dedicado',
    ],
    missing: [],
    cta: 'Assinar Família',
    highlight: false,
  },
];

export default function Precos() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="min-h-screen bg-[oklch(0.06_0_0)]">
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url(${PATTERN})`, backgroundSize: '500px' }}
        />
        <div className="container relative z-10 text-center">
          <AnimatedSection animation="fadeUp">
            <div className="section-label mb-4">Preços</div>
            <h1 className="font-display text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              Simples, transparente,<br />
              <span className="text-gradient italic">sem surpresas</span>
            </h1>
            <p className="font-body text-white/55 text-lg leading-relaxed max-w-xl mx-auto mb-10">
              Comece gratuitamente. Faça upgrade quando precisar de mais poder.
            </p>

            {/* Toggle */}
            <div className="inline-flex items-center gap-3 p-1.5 rounded-full border border-white/10 bg-white/[0.03]">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-5 py-2 rounded-full font-heading text-sm font-semibold transition-all duration-300 ${
                  !isYearly ? 'bg-white text-black' : 'text-white/50 hover:text-white'
                }`}
              >
                Mensal
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-5 py-2 rounded-full font-heading text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  isYearly ? 'bg-white text-black' : 'text-white/50 hover:text-white'
                }`}
              >
                Anual
                <span className={`text-xs px-2 py-0.5 rounded-full ${isYearly ? 'bg-black/20 text-black' : 'bg-white/10 text-white/60'}`}>
                  -25%
                </span>
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <AnimatedSection key={plan.name} animation="fadeUp" delay={i * 100}>
                <div
                  className={`relative rounded-2xl p-8 h-full flex flex-col transition-all duration-400 ${
                    plan.highlight
                      ? 'bg-white text-black border border-white'
                      : 'card-dark'
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-black text-white font-heading text-xs font-semibold rounded-full tracking-wide">
                      Mais Popular
                    </div>
                  )}

                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${plan.highlight ? 'bg-black/10' : 'bg-white/8'}`}>
                    <plan.icon size={20} className={plan.highlight ? 'text-black/70' : 'text-white/70'} />
                  </div>

                  <div className={`font-heading font-bold text-lg mb-1 ${plan.highlight ? 'text-black' : 'text-white'}`}>
                    {plan.name}
                  </div>
                  <p className={`font-body text-sm mb-6 ${plan.highlight ? 'text-black/60' : 'text-white/45'}`}>
                    {plan.desc}
                  </p>

                  <div className="mb-8">
                    <div className={`font-display text-5xl font-bold ${plan.highlight ? 'text-black' : 'text-white'}`}>
                      {plan.price.monthly === 0 ? (
                        'Grátis'
                      ) : (
                        <>
                          <span className="text-xl font-body font-normal">R$</span>
                          {isYearly ? plan.price.yearly.toFixed(2) : plan.price.monthly.toFixed(2)}
                        </>
                      )}
                    </div>
                    {plan.price.monthly > 0 && (
                      <div className={`font-body text-xs mt-1 ${plan.highlight ? 'text-black/50' : 'text-white/35'}`}>
                        por mês{isYearly ? ', cobrado anualmente' : ''}
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 flex-1 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle2 size={15} className={`shrink-0 mt-0.5 ${plan.highlight ? 'text-black/60' : 'text-white/60'}`} />
                        <span className={`font-body text-sm ${plan.highlight ? 'text-black/80' : 'text-white/65'}`}>{f}</span>
                      </li>
                    ))}
                    {plan.missing.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 opacity-30">
                        <div className={`w-3.5 h-px mt-2 shrink-0 ${plan.highlight ? 'bg-black' : 'bg-white'}`} />
                        <span className={`font-body text-sm ${plan.highlight ? 'text-black/50' : 'text-white/40'}`}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-xl font-heading font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 group ${
                      plan.highlight
                        ? 'bg-black text-white hover:bg-black/80'
                        : 'border border-white/20 text-white hover:bg-white/5 hover:border-white/40'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Guarantee */}
          <AnimatedSection animation="fadeUp" delay={300} className="text-center mt-16">
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl border border-white/8 bg-white/[0.02]">
              <CheckCircle2 size={18} className="text-white/60" />
              <span className="font-body text-white/55 text-sm">
                Cancele quando quiser. Sem multas, sem burocracia. Garantia de 7 dias.
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
