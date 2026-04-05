/* ============================================================
   QUITTE Contato Page — Light Theme
   ============================================================ */
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { useState } from 'react';

export default function Contato() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ─── HERO ─── */}
      <section className="pt-32 pb-20">
        <div className="container">
          <AnimatedSection animation="fadeUp" className="text-center max-w-3xl mx-auto">
            <div className="section-label mb-4">CONTATO</div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
              Vamos <span className="text-gradient">conversar</span>
            </h1>
            <p className="font-body text-foreground/60 text-lg">
              Tem dúvidas? Quer sugerir uma funcionalidade? Ou apenas quer dizer olá? Entre em contato conosco!
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CONTACT INFO ─── */}
      <section className="py-24 bg-foreground/[0.02]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Mail,
                title: 'Email',
                value: 'contato@quitte.app',
                desc: 'Responderemos em até 24 horas',
              },
              {
                icon: Phone,
                title: 'Telefone',
                value: '+55 (11) 98765-4321',
                desc: 'Segunda a sexta, 9h às 18h',
              },
              {
                icon: MapPin,
                title: 'Localização',
                value: 'São Paulo, SP',
                desc: 'Av. Paulista, 1000 - São Paulo',
              },
            ].map((contact, i) => (
              <AnimatedSection key={contact.title} animation="fadeUp" delay={i * 100}>
                <div className="card-light p-8 text-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <contact.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-2">{contact.title}</h3>
                  <p className="font-body text-foreground font-semibold text-sm mb-1">{contact.value}</p>
                  <p className="font-body text-foreground/50 text-xs">{contact.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT FORM ─── */}
      <section className="py-24">
        <div className="container max-w-2xl">
          <AnimatedSection animation="fadeUp" className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Envie uma <span className="text-gradient">mensagem</span>
            </h2>
            <p className="font-body text-foreground/60">
              Preencha o formulário abaixo e entraremos em contato em breve.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={100}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-heading font-semibold text-foreground text-sm mb-2">
                    Seu Nome
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="João Silva"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-border text-foreground placeholder-foreground/30 font-body text-sm focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block font-heading font-semibold text-foreground text-sm mb-2">
                    Seu Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="joao@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-border text-foreground placeholder-foreground/30 font-body text-sm focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-heading font-semibold text-foreground text-sm mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Como posso ajudá-lo?"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-border text-foreground placeholder-foreground/30 font-body text-sm focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block font-heading font-semibold text-foreground text-sm mb-2">
                  Mensagem
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Escreva sua mensagem aqui..."
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-border text-foreground placeholder-foreground/30 font-body text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary py-4 flex items-center justify-center gap-2 group"
              >
                {submitted ? 'Mensagem Enviada! ✓' : 'Enviar Mensagem'}
                {!submitted && <Send size={16} className="transition-transform group-hover:translate-x-1" />}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-24 bg-foreground/[0.02]">
        <div className="container max-w-2xl">
          <AnimatedSection animation="fadeUp" className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Perguntas <span className="text-gradient">frequentes</span>
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {[
              {
                q: 'Qual é o tempo de resposta do suporte?',
                a: 'Respondemos todas as mensagens em até 24 horas úteis. Para questões urgentes, ligue para nosso telefone.',
              },
              {
                q: 'Como faço para reportar um bug?',
                a: 'Envie um email para bugs@quitte.app com detalhes do problema. Agradecemos muito por nos ajudar a melhorar!',
              },
              {
                q: 'Posso sugerir uma funcionalidade?',
                a: 'Claro! Adoramos ouvir ideias de nossos usuários. Envie sua sugestão para features@quitte.app.',
              },
              {
                q: 'Como faço para cancelar minha assinatura?',
                a: 'Você pode cancelar a qualquer momento nas configurações da sua conta. Sem multas ou taxas extras.',
              },
            ].map((faq, i) => (
              <AnimatedSection key={i} animation="fadeUp" delay={i * 50}>
                <div className="card-light p-6">
                  <h3 className="font-heading font-bold text-foreground text-base mb-2">{faq.q}</h3>
                  <p className="font-body text-foreground/60 text-sm">{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
