/* ============================================================
   QUITTE Carreiras Page — Light Theme
   ============================================================ */
import { ArrowRight, Briefcase, MapPin, Users } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { Link } from 'wouter';

const jobs = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    department: 'Engenharia',
    location: 'São Paulo, SP',
    type: 'Full-time',
    desc: 'Procuramos um desenvolvedor frontend experiente para liderar a evolução da interface do Quitte.',
  },
  {
    id: 2,
    title: 'Product Manager',
    department: 'Produto',
    location: 'Remoto',
    type: 'Full-time',
    desc: 'Ajude-nos a definir a visão e estratégia do Quitte. Oportunidade para impactar milhares de vidas.',
  },
  {
    id: 3,
    title: 'Customer Success Manager',
    department: 'Sucesso do Cliente',
    location: 'São Paulo, SP',
    type: 'Full-time',
    desc: 'Trabalhe diretamente com nossos usuários para garantir seu sucesso e crescimento.',
  },
  {
    id: 4,
    title: 'Backend Developer (Node.js)',
    department: 'Engenharia',
    location: 'Remoto',
    type: 'Full-time',
    desc: 'Desenvolva APIs robustas e escaláveis que alimentam o Quitte.',
  },
];

const values = [
  { icon: Users, title: 'Pessoas em Primeiro Lugar', desc: 'Valorizamos cada membro do time e seu bem-estar.' },
  { icon: Briefcase, title: 'Impacto Real', desc: 'Seu trabalho muda a vida de milhares de pessoas.' },
  { icon: MapPin, title: 'Flexibilidade', desc: 'Trabalhe de onde quiser, no seu próprio ritmo.' },
];

export default function Carreiras() {
  return (
    <div className="min-h-screen bg-white">
      {/* ─── HERO ─── */}
      <section className="pt-32 pb-20">
        <div className="container">
          <AnimatedSection animation="fadeUp" className="text-center max-w-3xl mx-auto">
            <div className="section-label mb-4">CARREIRAS</div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
              Junte-se ao time que está <span className="text-gradient">transformando finanças</span>
            </h1>
            <p className="font-body text-foreground/60 text-lg">
              Estamos procurando talentos apaixonados por criar produtos que mudam vidas.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="py-24 bg-foreground/[0.02]">
        <div className="container">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <div className="section-label mb-3">NOSSA CULTURA</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Por que trabalhar no <span className="text-gradient">Quitte</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} animation="fadeUp" delay={i * 100}>
                <div className="card-light p-8 text-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <v.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-2">{v.title}</h3>
                  <p className="font-body text-foreground/60 text-sm">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OPEN POSITIONS ─── */}
      <section className="py-24">
        <div className="container">
          <AnimatedSection animation="fadeUp" className="mb-16">
            <div className="section-label mb-3">OPORTUNIDADES</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Posições <span className="text-gradient">abertas</span>
            </h2>
          </AnimatedSection>

          <div className="space-y-4 max-w-3xl">
            {jobs.map((job, i) => (
              <AnimatedSection key={job.id} animation="fadeUp" delay={i * 80}>
                <div className="card-light p-8 group cursor-pointer">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-foreground text-xl mb-2 group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <p className="font-body text-foreground/60 text-sm mb-4">{job.desc}</p>
                      <div className="flex flex-wrap gap-4 text-xs text-foreground/50">
                        <div className="flex items-center gap-1">
                          <Briefcase size={14} />
                          {job.department}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          {job.location}
                        </div>
                        <div className="px-2 py-1 rounded-full bg-primary/10 text-primary font-semibold">
                          {job.type}
                        </div>
                      </div>
                    </div>
                    <ArrowRight size={20} className="text-primary group-hover:translate-x-1 transition-transform shrink-0" />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container text-center">
          <AnimatedSection animation="scaleUp">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Não encontrou a vaga ideal?
            </h2>
            <p className="font-body text-white/80 mb-8 max-w-xl mx-auto">
              Envie seu currículo para careers@quitte.app e nos conte sobre você. Adoraríamos conhecer talentos apaixonados!
            </p>
            <a href="mailto:careers@quitte.app" className="btn-primary bg-white text-primary hover:bg-white/90">
              Enviar Candidatura
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
