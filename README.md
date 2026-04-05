# Quitte — Controle suas Dívidas

Site landing page moderno e responsivo para o app Quitte, desenvolvido com React 19, Tailwind CSS 4 e Vite.

## 🚀 Features

- **Design Moderno**: Tema branco com azul financeiro e animações suaves
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Performance**: Otimizado com Vite para builds rápidos
- **Acessibilidade**: Componentes shadcn/ui com suporte a acessibilidade
- **SEO Ready**: Meta tags, Open Graph e estrutura semântica

## 📋 Páginas

- **Home** - Hero com mockup do app, features, depoimentos e CTA
- **Funcionalidades** - Detalhes das principais features
- **Como Funciona** - Passo a passo e FAQ
- **Preços** - Planos de assinatura
- **Sobre** - Informações sobre a empresa
- **Blog** - Artigos e conteúdo
- **Carreiras** - Oportunidades de trabalho
- **Contato** - Formulário de contato

## 🛠️ Stack Tecnológico

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **Build Tool**: Vite
- **Routing**: Wouter
- **Animations**: CSS Transitions + Framer Motion
- **Icons**: Lucide React

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🚀 Deploy no Vercel

### Opção 1: Via GitHub (Recomendado)

1. Faça push do repositório para GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Clique em **"Add New..."** → **"Project"**
4. Selecione o repositório `quitte-landing`
5. Configure as variáveis de ambiente
6. Clique em **"Deploy"**

### Opção 2: Via Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Variáveis de Ambiente

Configure no Vercel:

```
VITE_ANALYTICS_ENDPOINT=<seu_endpoint>
VITE_ANALYTICS_WEBSITE_ID=<seu_website_id>
VITE_APP_ID=quitte-app
VITE_APP_TITLE=Quitte - Controle suas Dívidas
VITE_APP_LOGO=<sua_logo_url>
VITE_FRONTEND_FORGE_API_KEY=<sua_api_key>
VITE_FRONTEND_FORGE_API_URL=<sua_api_url>
VITE_OAUTH_PORTAL_URL=<seu_oauth_url>
```

## 📁 Estrutura do Projeto

```
client/
├── public/              # Arquivos estáticos
├── src/
│   ├── components/      # Componentes reutilizáveis
│   ├── pages/          # Páginas da aplicação
│   ├── hooks/          # Custom React hooks
│   ├── contexts/       # React contexts
│   ├── lib/            # Utilitários
│   ├── App.tsx         # Componente raiz
│   ├── main.tsx        # Entry point
│   └── index.css       # Estilos globais
├── index.html          # HTML template
└── vite.config.ts      # Configuração do Vite

server/                 # Placeholder
shared/                 # Tipos compartilhados
vercel.json            # Configuração do Vercel
package.json           # Dependências e scripts
```

## 🎨 Customização

### Cores e Tema

Edite `client/src/index.css` para alterar as cores principais:

```css
:root {
  --primary: oklch(0.623 0.214 259.815); /* Azul financeiro */
  --foreground: oklch(0.235 0.015 65);   /* Preto */
  /* ... outras cores */
}
```

### Tipografia

Adicione fontes Google no `client/index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
```

## 🔧 Desenvolvimento

### Adicionar Nova Página

1. Crie um novo arquivo em `client/src/pages/NovaPagina.tsx`
2. Adicione a rota em `client/src/App.tsx`
3. Atualize o navbar em `client/src/components/Navbar.tsx`

### Adicionar Novo Componente

1. Crie um arquivo em `client/src/components/MeuComponente.tsx`
2. Importe e use em suas páginas

## 📊 Performance

- **Lighthouse Score**: 90+
- **Build Size**: ~650KB (JS) + 130KB (CSS)
- **Time to Interactive**: <2s
- **Gzip Size**: ~200KB

## 🤝 Contribuindo

Para contribuir com melhorias:

1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.

## 📞 Suporte

Para dúvidas ou sugestões:
- Email: contato@quitte.app
- Website: https://quitte.app

---

**Desenvolvido com ❤️ para o Quitte**
