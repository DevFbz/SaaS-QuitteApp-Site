/* ============================================================
   QUITTE Blog Page — Light Theme
   ============================================================ */
import { ArrowRight, Calendar, User } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { Link } from 'wouter';

const posts = [
  {
    id: 1,
    title: '5 Estratégias Comprovadas para Quitar Dívidas Rápido',
    excerpt: 'Descubra as melhores técnicas para acelerar o processo de quitação de dívidas e economizar dinheiro.',
    date: '15 de Março, 2025',
    author: 'Marina Costa',
    category: 'Finanças',
    image: 'bg-gradient-to-br from-primary/20 to-primary/10',
  },
  {
    id: 2,
    title: 'Como o Quitte Ajudou 1.000 Pessoas a Ficarem Livres de Dívidas',
    excerpt: 'Histórias reais de pessoas que transformaram suas vidas financeiras com o Quitte.',
    date: '10 de Março, 2025',
    author: 'Carlos Silva',
    category: 'Histórias',
    image: 'bg-gradient-to-br from-blue-200/20 to-blue-100/10',
  },
  {
    id: 3,
    title: 'Entenda a Diferença Entre Dívida Boa e Dívida Ruim',
    excerpt: 'Nem toda dívida é ruim. Aprenda a diferenciar e tomar decisões financeiras melhores.',
    date: '5 de Março, 2025',
    author: 'Ana Souza',
    category: 'Educação',
    image: 'bg-gradient-to-br from-green-200/20 to-green-100/10',
  },
  {
    id: 4,
    title: 'Planejamento Financeiro para 2025: Comece Agora',
    excerpt: 'Dicas práticas para organizar suas finanças e começar o ano com o pé direito.',
    date: '28 de Fevereiro, 2025',
    author: 'Roberto Alves',
    category: 'Planejamento',
    image: 'bg-gradient-to-br from-purple-200/20 to-purple-100/10',
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      {/* ─── HERO ─── */}
      <section className="pt-32 pb-20">
        <div className="container">
          <AnimatedSection animation="fadeUp" className="text-center max-w-3xl mx-auto">
            <div className="section-label mb-4">BLOG</div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
              Dicas, histórias e insights sobre <span className="text-gradient">finanças</span>
            </h1>
            <p className="font-body text-foreground/60 text-lg">
              Aprenda a controlar suas dívidas e construir uma vida financeira saudável.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── POSTS GRID ─── */}
      <section className="py-24 bg-foreground/[0.02]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, i) => (
              <AnimatedSection key={post.id} animation="fadeUp" delay={i * 100}>
                <div className="card-light overflow-hidden group cursor-pointer">
                  {/* Image */}
                  <div className={`h-48 ${post.image} transition-transform duration-300 group-hover:scale-105`} />

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-body text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>

                    <h2 className="font-heading font-bold text-foreground text-xl mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>

                    <p className="font-body text-foreground/60 text-sm mb-6">{post.excerpt}</p>

                    <div className="flex items-center justify-between pt-6 border-t border-border">
                      <div className="flex items-center gap-4 text-xs text-foreground/50">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <User size={14} />
                          {post.author}
                        </div>
                      </div>
                      <ArrowRight size={16} className="text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24">
        <div className="container text-center">
          <AnimatedSection animation="scaleUp">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Comece a <span className="text-gradient">quitar suas dívidas</span>
            </h2>
            <p className="font-body text-foreground/60 mb-8 max-w-xl mx-auto">
              Baixe o Quitte agora e coloque em prática tudo que aprendeu.
            </p>
            <Link href="/">
              <span className="btn-primary inline-flex group">
                Voltar ao Início
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
