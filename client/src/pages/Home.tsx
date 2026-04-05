/* ============================================================
   QUITTE Home Page — Light Theme with Financial Blue
   Hero, Features, Mobile Carousel, Testimonials, CTA
   ============================================================ */
import { ArrowRight, TrendingDown, Bell, BarChart3, Shield, Zap, CheckCircle2 } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import MobileCarousel from '@/components/MobileCarousel';

const HERO_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663514458854/PtfVkPXLtJh3WFqwGZAVah/quitte-hero-bg-Y7e9HG2yYzp9hS6tGn5qwa.webp';

const features = [
  { icon: TrendingDown, title: 'Dashboard Inteligente', desc: 'Veja todas as dívidas em um só lugar' },
  { icon: Bell, title: 'Lembretes Automáticos', desc: 'Nunca perca um vencimento' },
  { icon: BarChart3, title: 'Relatórios Visuais', desc: 'Acompanhe seu progresso' },
  { icon: Shield, title: 'Segurança Total', desc: 'Dados criptografados' },
];

const testimonials = [
  {
    name: 'Marina Silva',
    role: 'Advogada',
    text: 'O Quitte mudou minha vida. Consegui organizar minhas dívidas e quitar tudo em 18 meses!',
    avatar: '👩‍⚖️',
  },
  {
    name: 'Carlos Mendes',
    role: 'Empresário',
    text: 'Finalmente tenho controle total das minhas finanças. Recomendo para todos!',
    avatar: '👨‍💼',
  },
  {
    name: 'Ana Costa',
    role: 'Professora',
    text: 'Simples, intuitivo e muito eficaz. Exatamente o que eu procurava.',
    avatar: '👩‍🏫',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* ─── HERO ─── */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url(${HERO_BG})` }} />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <AnimatedSection animation="fadeUp">
              <div className="section-label mb-4">APP DE CONTROLE FINANCEIRO</div>
              <h1 className="font-display text-5xl md:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6">
                Quitte suas <span className="text-gradient">dívidas</span> de vez.
              </h1>
              <p className="font-body text-foreground/60 text-lg leading-relaxed mb-8 max-w-xl">
                O Quitte organiza todas as suas dívidas em um só lugar. Receba lembretes, acompanhe seu progresso e conquiste a liberdade financeira.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href="#" className="btn-primary inline-flex group justify-center sm:justify-start">
                  Baixar Grátis
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a href="/como-funciona" className="btn-outline inline-flex group justify-center sm:justify-start">
                  Ver Demo
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              {/* Stats */}
              <div className="flex gap-8">
                {[
                  { value: '12K+', label: 'Usuários' },
                  { value: 'R$47M', label: 'Quitados' },
                  { value: '4.9★', label: 'Avaliação' },
                ].map((stat, i) => (
                  <AnimatedSection key={i} animation="fadeUp" delay={100 + i * 50}>
                    <div>
                      <div className="font-heading font-bold text-2xl text-primary">{stat.value}</div>
                      <div className="font-body text-foreground/50 text-xs">{stat.label}</div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>

            {/* Right - Mobile Carousel */}
            <AnimatedSection animation="fadeRight" delay={200}>
              <MobileCarousel />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="py-24 bg-foreground/2">
        <div className="container">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <div className="section-label mb-3">FUNCIONALIDADES</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Tudo que você precisa para <span className="text-gradient">controlar dívidas</span>
            </h2>
            <p className="font-body text-foreground/60 max-w-2xl mx-auto">
              Funcionalidades poderosas, interface simples. Sem complicações.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, i) => (
              <AnimatedSection key={feat.title} animation="fadeUp" delay={i * 80}>
                <div className="card-light p-8 group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feat.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-2">{feat.title}</h3>
                  <p className="font-body text-foreground/60 text-sm">{feat.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-24">
        <div className="container">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <div className="section-label mb-3">COMO FUNCIONA</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              3 passos para <span className="text-gradient">liberdade financeira</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Cadastre', desc: 'Adicione suas dívidas em segundos' },
              { num: '02', title: 'Acompanhe', desc: 'Receba lembretes automáticos' },
              { num: '03', title: 'Quite', desc: 'Veja seu progresso em tempo real' },
            ].map((step, i) => (
              <AnimatedSection key={step.num} animation="fadeUp" delay={i * 100}>
                <div className="relative">
                  <div className="font-display text-6xl font-bold text-primary/10 mb-4">{step.num}</div>
                  <h3 className="font-heading font-bold text-foreground text-2xl mb-2 -mt-8">{step.title}</h3>
                  <p className="font-body text-foreground/60">{step.desc}</p>
                  {i < 2 && (
                    <div className="hidden md:block absolute -right-4 top-8 text-primary/20">
                      <ArrowRight size={32} />
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 bg-foreground/2">
        <div className="container">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <div className="section-label mb-3">DEPOIMENTOS</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Histórias de <span className="text-gradient">sucesso</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, i) => (
              <AnimatedSection key={i} animation="fadeUp" delay={i * 100}>
                <div className="card-light p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-4xl">{test.avatar}</div>
                    <div>
                      <div className="font-heading font-bold text-foreground">{test.name}</div>
                      <div className="font-body text-foreground/50 text-xs">{test.role}</div>
                    </div>
                  </div>
                  <p className="font-body text-foreground/70 italic">"{test.text}"</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING PREVIEW ─── */}
      <section className="py-24">
        <div className="container">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <div className="section-label mb-3">PREÇOS</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Comece <span className="text-gradient">grátis</span>
            </h2>
            <p className="font-body text-foreground/60 max-w-2xl mx-auto">
              Sem cartão de crédito. Sem compromisso. Upgrade quando precisar.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {[
              { name: 'Gratuito', price: 'R$ 0', features: ['Até 5 dívidas', 'Lembretes básicos', 'Relatório mensal'] },
              { name: 'Pro', price: 'R$ 19,90', features: ['Dívidas ilimitadas', 'Lembretes avançados', 'Relatórios detalhados', 'Suporte prioritário'], highlight: true },
            ].map((plan, i) => (
              <AnimatedSection key={plan.name} animation="fadeUp" delay={i * 100}>
                <div
                  className={`rounded-xl p-8 transition-all duration-300 ${
                    plan.highlight
                      ? 'bg-primary text-white border-2 border-primary scale-105'
                      : 'card-light'
                  }`}
                >
                  <h3 className={`font-heading font-bold text-2xl mb-2 ${plan.highlight ? 'text-white' : 'text-foreground'}`}>
                    {plan.name}
                  </h3>
                  <div className={`font-display text-4xl font-bold mb-6 ${plan.highlight ? 'text-white' : 'text-primary'}`}>
                    {plan.price}
                    <span className="text-lg font-body">/mês</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <CheckCircle2 size={16} className={plan.highlight ? 'text-white' : 'text-primary'} />
                        <span className={`font-body text-sm ${plan.highlight ? 'text-white/90' : 'text-foreground/70'}`}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 rounded-lg font-heading font-semibold text-sm transition-all ${
                      plan.highlight
                        ? 'bg-white text-primary hover:bg-white/90'
                        : 'border border-primary text-primary hover:bg-primary/5'
                    }`}
                  >
                    Começar
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-24 bg-linear-to-r from-primary to-primary/80 text-white">
        <div className="container text-center">
          <AnimatedSection animation="scaleUp">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Pronto para <span className="text-white/90">quitar suas dívidas</span>?
            </h2>
            <p className="font-body text-white/80 mb-8 max-w-xl mx-auto">
              Baixe o Quitte agora e dê o primeiro passo para uma vida financeira livre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="group flex items-center gap-4 px-6 py-4 rounded-xl bg-white text-primary hover:bg-white/90 transition-all duration-300 font-heading font-semibold justify-center sm:justify-start"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
              <a
                href="#"
                className="group flex items-center gap-4 px-6 py-4 rounded-xl bg-white text-primary hover:bg-white/90 transition-all duration-300 font-heading font-semibold justify-center sm:justify-start"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-12.6-3.24-3.24L3.18 23.76zM20.7 10.06l-2.52-1.44-3.6 3.6 3.6 3.6 2.52-1.44c.72-.42.72-1.44 0-1.86l-.0-.46zM2.01 1.2C1.8 1.44 1.68 1.8 1.68 2.28v19.44c0 .48.12.84.33 1.08l.06.06L13.71 10.2v-.3L2.07 1.14l-.06.06zM13.53 7.56l3.24-3.24-12.6-12.6c-.35-.04-.69.03-.99.2l10.35 15.64z" />
                </svg>
                Google Play
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── NEWSLETTER ─── */}
      <section className="py-16 bg-foreground/2 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <AnimatedSection animation="fadeLeft">
              <div>
                <div className="section-label mb-2">FIQUE POR DENTRO</div>
                <h3 className="font-heading font-bold text-foreground text-2xl">Receba novidades do Quitte</h3>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeRight">
              <div className="flex gap-3 w-full md:w-auto">
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="flex-1 md:w-72 px-4 py-3 rounded-lg bg-white border border-border text-foreground placeholder-foreground/30 font-body text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <button className="btn-primary py-3 px-6 shrink-0">Inscrever</button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
