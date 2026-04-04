/* ============================================================
   QUITTE Como Funciona Page — Dark Editorial Luxury
   ============================================================ */
import { ArrowRight, Download, PlusCircle, Bell, TrendingDown, CheckCircle } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const MOCKUP_HERO = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663514458854/PtfVkPXLtJh3WFqwGZAVah/quitte-mockup-hero-ea3XK8RXKKwXaC7SV2FDdN.webp';
const MOCKUP_NOTIF = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663514458854/PtfVkPXLtJh3WFqwGZAVah/quitte-mockup-notification-3xvSenWBFFnKpArUVA9wcS.webp';
const PATTERN = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663514458854/PtfVkPXLtJh3WFqwGZAVah/quitte-abstract-pattern-mz5cjxRoULSBhR3Cf2wjwf.webp';

const steps = [
  {
    num: '01',
    icon: Download,
    title: 'Baixe o app',
    desc: 'Disponível gratuitamente na App Store e Google Play. Instalação em segundos, sem burocracia.',
    detail: 'Crie sua conta com e-mail ou entre com Google/Apple. Seus dados ficam seguros e sincronizados automaticamente.',
    side: 'right',
  },
  {
    num: '02',
    icon: PlusCircle,
    title: 'Cadastre suas dívidas',
    desc: 'Adicione cada dívida com credor, valor total, parcelas e data de vencimento.',
    detail: 'O Quitte calcula automaticamente o total, as parcelas restantes e projeta quando você vai quitar cada dívida.',
    side: 'left',
  },
  {
    num: '03',
    icon: Bell,
    title: 'Configure seus alertas',
    desc: 'Defina com quantos dias de antecedência quer ser avisado sobre cada vencimento.',
    detail: 'Receba notificações push no celular, e-mail ou ambos. Personalize por dívida ou aplique para todas.',
    side: 'right',
  },
  {
    num: '04',
    icon: TrendingDown,
    title: 'Acompanhe o progresso',
    desc: 'Veja gráficos de evolução e saiba exatamente quanto já pagou e quanto falta.',
    detail: 'Relatórios mensais automáticos te mostram sua evolução. Cada pagamento registrado é uma vitória visualizada.',
    side: 'left',
  },
  {
    num: '05',
    icon: CheckCircle,
    title: 'Quite tudo',
    desc: 'Com organização e foco, chegue ao zero. Liberdade financeira de verdade.',
    detail: 'Quando uma dívida é quitada, o Quitte celebra com você. Veja seu score financeiro subir a cada conquista.',
    side: 'right',
  },
];

const faqs = [
  {
    q: 'O Quitte é realmente gratuito?',
    a: 'Sim! O plano gratuito inclui até 5 dívidas cadastradas, lembretes básicos e relatórios mensais. O plano Pro desbloqueia dívidas ilimitadas e funcionalidades avançadas.',
  },
  {
    q: 'Meus dados financeiros estão seguros?',
    a: 'Absolutamente. Usamos criptografia AES-256 e nunca compartilhamos seus dados com terceiros. Você tem controle total sobre suas informações.',
  },
  {
    q: 'O app funciona sem internet?',
    a: 'Sim! O Quitte funciona offline e sincroniza automaticamente quando você reconectar. Seus dados sempre disponíveis.',
  },
  {
    q: 'Posso importar dados de outros apps?',
    a: 'Estamos trabalhando na importação de dados de planilhas Excel e CSV. Em breve disponível para todos os usuários.',
  },
  {
    q: 'O Quitte está disponível para iOS e Android?',
    a: 'Sim! O app está disponível na App Store (iOS 14+) e Google Play (Android 8+). Interface nativa em ambas as plataformas.',
  },
];

export default function ComoFunciona() {
  return (
    <div className="min-h-screen bg-[oklch(0.06_0_0)]">
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url(${PATTERN})`, backgroundSize: '500px' }}
        />
        <div className="container relative z-10">
          <AnimatedSection animation="fadeUp" className="max-w-3xl">
            <div className="section-label mb-4">Como Funciona</div>
            <h1 className="font-display text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              Do caos financeiro à<br />
              <span className="text-gradient italic">liberdade total</span>
            </h1>
            <p className="font-body text-white/55 text-lg leading-relaxed max-w-xl">
              Em 5 passos simples, o Quitte transforma a forma como você enfrenta suas dívidas. Sem planilhas, sem complicação.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16">
        <div className="container">
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/8 -translate-x-1/2" />

            <div className="flex flex-col gap-20">
              {steps.map((step, i) => (
                <AnimatedSection
                  key={step.num}
                  animation={step.side === 'right' ? 'fadeLeft' : 'fadeRight'}
                  delay={100}
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${step.side === 'left' ? 'lg:direction-rtl' : ''}`}>
                    <div className={step.side === 'left' ? 'lg:order-2' : ''}>
                      <div className="flex items-center gap-4 mb-5">
                        <div className="font-mono text-white/15 text-6xl font-bold leading-none">{step.num}</div>
                        <div className="w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center">
                          <step.icon size={20} className="text-white/70" />
                        </div>
                      </div>
                      <h2 className="font-heading font-bold text-white text-3xl mb-4">{step.title}</h2>
                      <p className="font-body text-white/60 text-base leading-relaxed mb-4">{step.desc}</p>
                      <p className="font-body text-white/40 text-sm leading-relaxed">{step.detail}</p>
                    </div>

                    {/* Center dot */}
                    <div className={`hidden lg:flex justify-center ${step.side === 'left' ? 'order-1' : ''}`}>
                      <div className="relative">
                        <div className="w-4 h-4 rounded-full bg-white/30 border-2 border-white/60 z-10 relative" />
                        <div className="absolute inset-0 rounded-full bg-white/10 scale-150 blur-sm" />
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[oklch(0.04_0_0)]">
        <div className="container">
          <AnimatedSection animation="fadeUp" className="mb-16">
            <div className="section-label mb-3">Dúvidas Frequentes</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
              Perguntas <span className="text-gradient italic">frequentes</span>
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} animation="fadeUp" delay={i * 80}>
                <div className="border-b border-white/8 py-7 group">
                  <h3 className="font-heading font-semibold text-white text-lg mb-3 group-hover:text-white/90 transition-colors">
                    {faq.q}
                  </h3>
                  <p className="font-body text-white/50 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <AnimatedSection animation="scaleUp" className="text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Pronto para <span className="text-gradient italic">começar</span>?
            </h2>
            <p className="font-body text-white/55 mb-8">Baixe agora e comece a quitar suas dívidas hoje mesmo.</p>
            <a href="/" className="btn-primary inline-flex group">
              Baixar Grátis
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
