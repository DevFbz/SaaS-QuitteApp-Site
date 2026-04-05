/* ============================================================
   QUITTE Funcionalidades Page — Dark Editorial Luxury
   ============================================================ */
import { TrendingDown, Bell, BarChart3, Shield, Zap, Users, ArrowRight, CheckCircle2, Smartphone, RefreshCw, Lock, PieChart } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const MOCKUP_FEATURES = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663514458854/PtfVkPXLtJh3WFqwGZAVah/quitte-mockup-features-92VkJz3fRtzz2WABrKP8Gr.webp';
const MOCKUP_HERO = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663514458854/PtfVkPXLtJh3WFqwGZAVah/quitte-mockup-hero-ea3XK8RXKKwXaC7SV2FDdN.webp';
const PATTERN = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663514458854/PtfVkPXLtJh3WFqwGZAVah/quitte-abstract-pattern-mz5cjxRoULSBhR3Cf2wjwf.webp';

const mainFeatures = [
  {
    icon: TrendingDown,
    title: 'Dashboard Completo',
    desc: 'Visão 360° de todas as suas dívidas. Veja o total devido, parcelas, datas de vencimento e o progresso de cada uma em um único painel intuitivo.',
    items: ['Resumo total em tempo real', 'Progresso visual por dívida', 'Ordenação por prioridade', 'Filtros por categoria'],
  },
  {
    icon: Bell,
    title: 'Lembretes Inteligentes',
    desc: 'Sistema de notificações avançado que aprende seus padrões e te avisa no momento certo, antes que qualquer vencimento vire juros.',
    items: ['Alertas 7, 3 e 1 dia antes', 'Notificações push personalizadas', 'Resumo semanal automático', 'Silenciamento por período'],
  },
  {
    icon: BarChart3,
    title: 'Relatórios e Gráficos',
    desc: 'Acompanhe sua evolução com gráficos detalhados. Veja quanto já pagou, quanto falta e qual é a projeção para quitar tudo.',
    items: ['Gráfico de evolução mensal', 'Comparativo por período', 'Exportação em PDF', 'Histórico completo'],
  },
  {
    icon: Shield,
    title: 'Segurança e Privacidade',
    desc: 'Seus dados financeiros são tratados com o mais alto nível de segurança. Criptografia de ponta a ponta e armazenamento seguro.',
    items: ['Criptografia AES-256', 'Autenticação biométrica', 'Backup automático', 'Sem compartilhamento de dados'],
  },
  {
    icon: Users,
    title: 'Dívidas Compartilhadas',
    desc: 'Gerencie dívidas com outras pessoas. Divida despesas, acompanhe quem pagou o quê e mantenha tudo transparente.',
    items: ['Convide pessoas', 'Divisão automática', 'Histórico compartilhado', 'Notificações para todos'],
  },
  {
    icon: Zap,
    title: 'Cadastro Rápido',
    desc: 'Adicione uma dívida em menos de 30 segundos. Interface otimizada para velocidade, sem formulários complicados.',
    items: ['Formulário simplificado', 'Preenchimento inteligente', 'Categorias pré-definidas', 'Importação de dados'],
  },
];

const extras = [
  { icon: Smartphone, label: 'iOS & Android' },
  { icon: RefreshCw, label: 'Sync em tempo real' },
  { icon: Lock, label: 'Dados criptografados' },
  { icon: PieChart, label: 'Análises avançadas' },
];

export default function Funcionalidades() {
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
            <div className="section-label mb-4">Funcionalidades</div>
            <h1 className="font-display text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              Tudo que você precisa,<br />
              <span className="text-gradient italic">nada que não precisa</span>
            </h1>
            <p className="font-body text-white/55 text-lg leading-relaxed max-w-xl">
              O Quitte foi construído com foco na simplicidade e eficiência. Cada funcionalidade existe para te ajudar a quitar suas dívidas mais rápido.
            </p>
          </AnimatedSection>

          {/* Extra badges */}
          <AnimatedSection animation="fadeUp" delay={200} className="flex flex-wrap gap-3 mt-10">
            {extras.map((e) => (
              <div key={e.label} className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03]">
                <e.icon size={14} className="text-white/60" />
                <span className="font-body text-white/60 text-sm">{e.label}</span>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 pb-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainFeatures.map((feat, i) => (
              <AnimatedSection key={feat.title} animation="fadeUp" delay={i * 80}>
                <div className="card-dark p-8 h-full group">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/8 flex items-center justify-center shrink-0 group-hover:bg-white/15 transition-colors duration-300">
                      <feat.icon size={22} className="text-white/80" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-white text-xl mb-2">{feat.title}</h3>
                      <p className="font-body text-white/50 text-sm leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                  <div className="divider-line mb-5" />
                  <ul className="grid grid-cols-2 gap-2.5">
                    {feat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-white/50 shrink-0" />
                        <span className="font-body text-white/55 text-xs">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="py-24 bg-[oklch(0.04_0_0)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fadeLeft">
              <img src={MOCKUP_FEATURES} alt="App Features" className="w-full rounded-2xl" />
            </AnimatedSection>
            <AnimatedSection animation="fadeRight">
              <div className="section-label mb-4">Veja na prática</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                Interface pensada para <span className="text-gradient italic">clareza</span>
              </h2>
              <p className="font-body text-white/55 leading-relaxed mb-8">
                Cada tela do Quitte foi desenhada para que você encontre o que precisa sem esforço. Informação clara, ação imediata.
              </p>
              <a href="#download" className="btn-primary inline-flex group">
                Experimentar Grátis
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
