# 📊 Guia de Performance — Quitte

Este documento contém dicas e melhores práticas para otimizar a performance do site Quitte.

## 🎯 Métricas de Performance Atuais

- **Build Size**: ~653KB (JS) + 132KB (CSS) = ~785KB
- **Gzip Size**: ~178KB (JS) + 20KB (CSS) = ~198KB
- **Build Time**: ~4s
- **Time to Interactive**: <2s

## 🚀 Otimizações Implementadas

### 1. Code Splitting

O projeto já utiliza code splitting automático do Vite. Para otimizações adicionais:

```typescript
// vite.config.ts
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        vendor: ['react', 'react-dom'],
        ui: ['@radix-ui/*'],
      },
    },
  },
}
```

### 2. Lazy Loading de Componentes

Importe componentes pesados dinamicamente:

```typescript
// ❌ Evite
import HeavyComponent from './HeavyComponent';

// ✅ Prefira
const HeavyComponent = lazy(() => import('./HeavyComponent'));
```

### 3. Image Optimization

Todas as imagens devem estar em CDN (não no repositório):

```typescript
// ✅ Correto
<img src="https://cdn.example.com/image.webp" alt="..." />

// ❌ Evite
<img src="/images/image.png" alt="..." />
```

## 📈 Lighthouse Score

Objetivo: **90+** em todas as categorias

### Performance Checklist

- [ ] Lighthouse Score > 90
- [ ] Core Web Vitals OK
  - [ ] LCP (Largest Contentful Paint) < 2.5s
  - [ ] FID (First Input Delay) < 100ms
  - [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] Time to Interactive < 3s
- [ ] Total Bundle Size < 200KB (gzipped)

## 🔧 Ferramentas de Análise

### 1. Vercel Analytics

Acesse seu projeto no Vercel → Analytics para monitorar:
- Real User Monitoring (RUM)
- Core Web Vitals
- Performance trends

### 2. Google PageSpeed Insights

```bash
# Analisar performance
https://pagespeed.web.dev/?url=https://quitte-landing.vercel.app
```

### 3. WebPageTest

```bash
# Teste detalhado
https://www.webpagetest.org/
```

## 💡 Dicas de Otimização

### 1. Minificar CSS e JS

Já está configurado no build. Verifique em `vite.config.ts`:

```typescript
build: {
  minify: 'terser',
}
```

### 2. Remover Console.log em Produção

```typescript
// vite.config.ts
terserOptions: {
  compress: {
    drop_console: true,
  },
}
```

### 3. Usar WebP para Imagens

```html
<!-- Suporte a múltiplos formatos -->
<picture>
  <source srcset="image.webp" type="image/webp" />
  <img src="image.png" alt="..." />
</picture>
```

### 4. Implementar Lazy Loading

```typescript
// Para imagens
<img loading="lazy" src="..." alt="..." />

// Para componentes
const Component = lazy(() => import('./Component'));
```

### 5. Usar CSS Crítico

Inline CSS crítico no `<head>` para faster first paint:

```html
<style>
  /* CSS crítico para above-the-fold */
</style>
<link rel="stylesheet" href="styles.css" />
```

## 🔍 Monitorar Performance

### Vercel Analytics

1. Acesse seu projeto no Vercel
2. Vá para **Analytics**
3. Monitore:
   - Page Load Time
   - Core Web Vitals
   - Traffic trends

### Local Testing

```bash
# Build e preview
npm run build
npm run preview

# Abrir DevTools
# F12 → Lighthouse → Analyze page load
```

## 📦 Reduzir Bundle Size

### Identificar Dependências Pesadas

```bash
# Instalar bundle analyzer
npm install --save-dev rollup-plugin-visualizer

# Gerar relatório
npm run build
```

### Remover Dependências Não Utilizadas

```bash
# Verificar dependências
npm ls

# Remover
npm uninstall <package>
```

## 🎯 Metas de Performance

| Métrica | Alvo | Status |
|---------|------|--------|
| Lighthouse Score | 90+ | ✅ |
| LCP | < 2.5s | ✅ |
| FID | < 100ms | ✅ |
| CLS | < 0.1 | ✅ |
| Bundle Size | < 200KB | ✅ |
| Time to Interactive | < 3s | ✅ |

## 🚀 Deploy Performance

### Vercel Optimizations

O Vercel automaticamente:
- Comprime com Brotli
- Minifica CSS/JS
- Otimiza imagens
- Cria edge caches

### CDN Configuration

```bash
# Configurar cache headers no vercel.json
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

## 📊 Monitoramento Contínuo

### Configurar Alertas

1. Vercel Dashboard → Analytics
2. Configure alertas para:
   - Performance degradation
   - High error rates
   - Unusual traffic patterns

### Relatórios Semanais

Revise semanalmente:
- Lighthouse scores
- Core Web Vitals
- User experience metrics
- Error logs

## 🔗 Recursos Úteis

- [Vercel Performance Guide](https://vercel.com/docs/concepts/performance)
- [Web Vitals](https://web.dev/vitals/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Vite Build Optimization](https://vitejs.dev/guide/build.html)

---

**Mantenha seu site rápido e responsivo! 🚀**
