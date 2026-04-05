# 🚀 Guia de Deploy — Quitte no Vercel

Siga este guia passo-a-passo para fazer deploy do site Quitte no Vercel.

## ✅ Pré-requisitos

- Conta no [Vercel](https://vercel.com) (gratuita)
- Repositório no GitHub
- Node.js 18+ (opcional, para testes locais)

## 📋 Opção 1: Deploy via GitHub (Recomendado)

### Passo 1: Fazer Push para GitHub

```bash
# Inicializar repositório
git init
git add .
git commit -m "Initial commit: Quitte landing page"

# Adicionar remote do GitHub
git remote add origin https://github.com/seu-usuario/quitte-landing.git

# Fazer push
git branch -M main
git push -u origin main
```

### Passo 2: Conectar ao Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em **"Add New..."** → **"Project"**
3. Clique em **"Import Git Repository"**
4. Selecione seu repositório `quitte-landing`
5. Clique em **"Import"**

### Passo 3: Configurar Variáveis de Ambiente

Na página de configuração:

1. Vá para **"Environment Variables"**
2. Adicione as variáveis:

```
VITE_ANALYTICS_ENDPOINT = https://analytics.seu-dominio.com
VITE_ANALYTICS_WEBSITE_ID = seu_website_id
VITE_APP_ID = quitte-app
VITE_APP_TITLE = Quitte - Controle suas Dívidas
VITE_APP_LOGO = https://cdn.seu-dominio.com/logo.png
VITE_FRONTEND_FORGE_API_KEY = sua_api_key
VITE_FRONTEND_FORGE_API_URL = https://api.seu-dominio.com
VITE_OAUTH_PORTAL_URL = https://oauth.seu-dominio.com
```

### Passo 4: Deploy

1. Clique em **"Deploy"**
2. Aguarde o build completar (2-3 minutos)
3. Seu site estará em `https://quitte-landing.vercel.app`

## 📋 Opção 2: Deploy via Vercel CLI

### Passo 1: Instalar Vercel CLI

```bash
npm install -g vercel
```

### Passo 2: Fazer Login

```bash
vercel login
```

### Passo 3: Deploy

```bash
vercel
```

Responda as perguntas:
- **Which scope?** → Sua conta
- **Link to existing?** → `N`
- **Project name?** → `quitte-landing`
- **Directory?** → `./`
- **Modify vercel.json?** → `N`

### Passo 4: Configurar Variáveis

```bash
vercel env add VITE_ANALYTICS_ENDPOINT
vercel env add VITE_ANALYTICS_WEBSITE_ID
vercel env add VITE_APP_ID
vercel env add VITE_APP_TITLE
vercel env add VITE_APP_LOGO
vercel env add VITE_FRONTEND_FORGE_API_KEY
vercel env add VITE_FRONTEND_FORGE_API_URL
vercel env add VITE_OAUTH_PORTAL_URL
```

### Passo 5: Deploy para Produção

```bash
vercel --prod
```

## 🔗 Configurar Domínio Customizado

### Via Painel do Vercel

1. Acesse seu projeto no Vercel
2. Vá para **"Settings"** → **"Domains"**
3. Clique em **"Add"**
4. Digite seu domínio (ex: `quitte.app`)
5. Siga as instruções de DNS

### Configuração DNS

Se registrou em outro provedor:

1. Acesse o painel de DNS
2. Crie um registro CNAME apontando para `cname.vercel-dns.com`
3. Aguarde propagação DNS (até 48 horas)

## 🔄 Deploy Automático

Após conectar ao GitHub, o Vercel fará deploy automaticamente:

```bash
git add .
git commit -m "Update landing page"
git push origin main

# Vercel automaticamente fará deploy! 🚀
```

## 📊 Monitorar Deploy

### No Painel do Vercel

1. Acesse seu projeto
2. Vá para **"Deployments"**
3. Veja o status de cada deploy
4. Clique em um deploy para logs

### Analytics

1. Vá para **"Analytics"**
2. Monitore performance
3. Veja Core Web Vitals

## 🐛 Troubleshooting

### Build falha

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Variáveis de ambiente não funcionam

1. Verifique se estão configuradas no Vercel
2. Certifique-se que começam com `VITE_`
3. Redeploy após adicionar

### 404 em rotas

Isso é normal em SPAs. O `vercel.json` já redireciona para `index.html`.

## ✅ Checklist Final

- [ ] Repositório no GitHub
- [ ] Projeto importado no Vercel
- [ ] Variáveis de ambiente configuradas
- [ ] Deploy bem-sucedido
- [ ] Site acessível
- [ ] Domínio customizado (opcional)
- [ ] Analytics funcionando
- [ ] Testes em mobile e desktop

## 📞 Suporte

Problemas? Verifique:

1. [Logs do Vercel](https://vercel.com/docs/concepts/deployments/logs)
2. [Documentação do Vercel](https://vercel.com/docs)
3. contato@quitte.app

---

**Pronto para deploy? Siga os passos acima! 🚀**
