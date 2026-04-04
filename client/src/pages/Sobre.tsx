/* ============================================================
   QUITTE Sobre Page — Dark Editorial Luxury
   ============================================================ */
import { ArrowRight, Heart, Target, Lightbulb } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const HERO_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663514458854/PtfVkPXLtJh3WFqwGZAVah/quitte-hero-bg-Y7e9HG2yYzp9hS6tGn5qwa.webp';
const PATTERN = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663514458854/PtfVkPXLtJh3WFqwGZAVah/quitte-abstract-pattern-mz5cjxRoULSBhR3Cf2wjwf.webp';

const values = [
  {
    icon: Heart,
    title: 'Empatia',
    desc: 'Entendemos que dívidas causam estresse e ansiedade. O Quitte foi criado com compaixão, para tornar esse processo menos doloroso.',
  },
  {
    icon: Target,
    title: 'Foco',
    desc: 'Nada de funcionalidades desnecessárias. Cada recurso do Quitte existe para te ajudar a quitar suas dívidas mais rápido.',
  },
  {
    icon: Lightbulb,
    title: 'Simplicidade',
    desc: 'Acreditamos que ferramentas poderosas devem ser simples de usar. Complexidade é o inimigo da ação.',
  },
];

const milestones = [
  { year: '2023', event: 'Quitte nasce de uma necessidade pessoal do fundador' },
  { year: '2024', event: 'Lançamento do beta com 500 usuários convidados' },
  { year: '2024', event: '10.000 usuários em 3 meses após o lançamento público' },
  { year: '2025', event: 'R$ 47 milhões em dívidas quitadas pelos usuários' },
  { year: '2025', event: 'Lançamento do plano Família e dívidas compartilhadas' },
];

export default function Sobre() {
  return (
    <div className="min-h-screen bg-[oklch(0.06_0_0)]">
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[oklch(0.06_0_0)]" />
        <div className="container relative z-10">
          <AnimatedSection animation="fadeUp" className="max-w-3xl">
            <div className="section-label mb-4">Nossa História</div>
            <h1 className="font-display text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              Criado por quem<br />
              <span className="text-gradient italic">já esteve lá</span>
            </h1>
            <p className="font-body text-white/55 text-lg leading-relaxed max-w-xl">
              O Quitte nasceu de uma experiência real. Quando o fundador se viu perdido entre planilhas e lembretes esquecidos, decidiu criar a solução que gostaria de ter tido.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection animation="fadeLeft">
              <div className="section-label mb-4">A origem</div>
              <h2 className="font-display text-4xl font-bold text-white mb-6">
                Uma dívida que virou <span className="text-gradient italic">propósito</span>
              </h2>
              <div className="space-y-4 font-body text-white/55 leading-relaxed">
                <p>
                  Em 2023, o fundador do Quitte acumulou dívidas em diferentes credores — cartão de crédito, financiamento de carro e um empréstimo pessoal. Tentou usar planilhas, mas era complicado. Tentou outros apps, mas eram genéricos demais.
                </p>
                <p>
                  A frustração virou motivação. Em 6 meses de desenvolvimento intenso, o Quitte foi criado com um único objetivo: ser o app que ele gostaria de ter tido quando mais precisou.
                </p>
                <p>
                  Hoje, o Quitte ajuda mais de 12.000 pessoas a organizarem suas dívidas e retomarem o controle da vida financeira. E isso é só o começo.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeRight">
              <div className="section-label mb-4">Nossa missão</div>
              <blockquote className="font-display text-2xl md:text-3xl font-bold text-white leading-relaxed italic mb-8">
                "Acreditamos que toda pessoa merece uma segunda chance financeira. O Quitte é essa chance."
              </blockquote>
              <div className="divider-line mb-8" />
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: '12K+', label: 'Usuários' },
                  { value: 'R$47M', label: 'Quitados' },
                  { value: '4.9★', label: 'Avaliação' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-display text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="font-body text-white/40 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[oklch(0.04_0_0)]">
        <div className="container">
          <AnimatedSection animation="fadeUp" className="mb-16">
            <div className="section-label mb-3">Nossos Valores</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
              O que nos <span className="text-gradient italic">guia</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} animation="fadeUp" delay={i * 100}>
                <div className="card-dark p-8 group">
                  <div className="w-12 h-12 rounded-xl bg-white/8 flex items-center justify-center mb-6 group-hover:bg-white/15 transition-colors">
                    <v.icon size={22} className="text-white/70" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-xl mb-3">{v.title}</h3>
                  <p className="font-body text-white/50 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="container">
          <AnimatedSection animation="fadeUp" className="mb-16">
            <div className="section-label mb-3">Linha do Tempo</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
              Nossa <span className="text-gradient italic">jornada</span>
            </h2>
          </AnimatedSection>

          <div className="max-w-2xl">
            {milestones.map((m, i) => (
              <AnimatedSection key={i} animation="fadeLeft" delay={i * 80}>
                <div className="flex gap-8 pb-10 relative">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-white/40 border border-white/60 mt-1 shrink-0" />
                    {i < milestones.length - 1 && (
                      <div className="w-px flex-1 bg-white/10 mt-2" />
                    )}
                  </div>
                  <div className="pb-2">
                    <div className="font-mono text-white/30 text-xs mb-2">{m.year}</div>
                    <p className="font-body text-white/70 text-base leading-relaxed">{m.event}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[oklch(0.04_0_0)]">
        <div className="container">
          <AnimatedSection animation="scaleUp" className="text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Faça parte da <span className="text-gradient italic">história</span>
            </h2>
            <p className="font-body text-white/55 mb-8 max-w-md mx-auto">
              Junte-se a mais de 12.000 pessoas que já estão no caminho da liberdade financeira.
            </p>
            <a href="/" className="btn-primary inline-flex group">
              Baixar o Quitte
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
