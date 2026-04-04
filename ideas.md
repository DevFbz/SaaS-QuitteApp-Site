# Quitte — Ideias de Design

## Resposta 1
<response>
<text>
**Design Movement:** Neo-Brutalismo Minimalista

**Core Principles:**
- Contraste extremo preto/branco com tipografia pesada e assertiva
- Bordas rígidas, sombras offset sólidas (sem blur) criando profundidade tátil
- Layout assimétrico com blocos de texto grandes e espaço negativo intencional
- Elementos tipográficos como decoração visual (números grandes, letras cortadas)

**Color Philosophy:**
- Preto absoluto (#000) e branco puro (#FFF) como únicos tons
- Cinza médio (#888) apenas para textos secundários
- Sem gradientes — apenas sólidos, criando impacto visual direto

**Layout Paradigm:**
- Seções divididas em grades assimétricas 60/40 ou 70/30
- Hero com texto gigante que ultrapassa as bordas do viewport
- Cards com bordas sólidas e sombras offset (4px, 8px) em preto
- Elementos sobrepostos e colisões intencionais de texto com imagem

**Signature Elements:**
- Sombra offset sólida em todos os cards e botões
- Tipografia display com peso 900 em tamanhos extremos (8rem+)
- Linha horizontal preta como divisor de seções

**Interaction Philosophy:**
- Hover nos botões: sombra offset desaparece (efeito "pressionar")
- Cards: elevação com transição rápida (150ms)
- Cursor personalizado: círculo preto que segue o mouse

**Animation:**
- Entrada de texto: clip-path reveal da esquerda para direita
- Scroll: elementos deslizam horizontalmente ao entrar na viewport
- Transição de página: wipe horizontal preto

**Typography System:**
- Display: Space Grotesk 900 para títulos
- Body: DM Sans 400/500 para texto corrido
- Mono: JetBrains Mono para números e dados financeiros
</text>
<probability>0.08</probability>
</response>

## Resposta 2
<response>
<text>
**Design Movement:** Luxo Editorial Escuro (Dark Editorial Luxury)

**Core Principles:**
- Fundo preto profundo com elementos brancos de alta precisão
- Tipografia serif elegante misturada com sans-serif moderna
- Espaçamento generoso que comunica exclusividade e sofisticação
- Animações cinematográficas lentas e deliberadas

**Color Philosophy:**
- Background: preto profundo (#0A0A0A)
- Texto principal: branco quase puro (#F5F5F5)
- Acentos: branco com 60% de opacidade para hierarquia
- Bordas: linhas finíssimas (1px) em branco com 20% opacidade

**Layout Paradigm:**
- Seções full-height com conteúdo centralizado verticalmente
- Mockups flutuando com efeito parallax sutil
- Texto em colunas editoriais (como revista de luxo)
- Números de seção em fonte mono pequena como guias visuais

**Signature Elements:**
- Linhas horizontais finíssimas separando seções
- Números de seção em canto superior esquerdo (01, 02, 03...)
- Mockup de celular com reflexo sutil no fundo escuro

**Interaction Philosophy:**
- Hover: elementos ganham brilho sutil (opacity 0.7 → 1.0)
- Scroll: parallax suave em mockups e imagens de fundo
- Botões: borda que se preenche com branco no hover

**Animation:**
- Entrada: fade + translateY(30px) com ease-out lento (800ms)
- Parallax: mockups se movem 20% mais devagar que o scroll
- Números de seção: contagem animada ao entrar na viewport

**Typography System:**
- Display: Playfair Display 700 para títulos principais
- Sub-títulos: Syne 600 para subtítulos
- Body: Inter 300/400 para texto corrido
- Dados: Space Mono para números financeiros
</text>
<probability>0.07</probability>
</response>

## Resposta 3
<response>
<text>
**Design Movement:** Bauhaus Funcional Contemporâneo

**Core Principles:**
- Geometria pura como linguagem visual — círculos, linhas e retângulos
- Funcionalidade como estética: cada elemento tem propósito claro
- Grade modular rígida com quebras intencionais e dramáticas
- Preto e branco como declaração filosófica (sem cor = sem distração)

**Color Philosophy:**
- Branco dominante (#FFFFFF) como fundo principal
- Preto (#000000) para elementos de destaque e texto
- Cinza (#F0F0F0) para fundos de seção alternados
- Sem gradientes, sem sombras suaves — apenas sólidos e linhas

**Layout Paradigm:**
- Grade de 12 colunas com elementos que ocupam de 3 a 10 colunas
- Seções alternando entre fundo branco e preto (inversão de cores)
- Mockups integrados à grade como elementos geométricos
- Tipografia como elemento visual primário

**Signature Elements:**
- Círculos geométricos como decoração de fundo (outline, sem fill)
- Inversão de cores em seções alternadas (fundo preto, texto branco)
- Linha vertical preta como separador de colunas em algumas seções

**Interaction Philosophy:**
- Hover: inversão de cores instantânea (preto ↔ branco)
- Scroll: elementos entram na tela com movimento preciso e geométrico
- Botões: transformação de outline para filled no hover

**Animation:**
- Entrada: scale(0.95) → scale(1) + opacity 0 → 1 (400ms cubic-bezier)
- Scroll reveal: translateX(-40px) → 0 para elementos da esquerda
- Seções: clip-path diagonal reveal ao entrar na viewport

**Typography System:**
- Display: Space Grotesk 700/900 para títulos
- Body: DM Sans 400 para texto corrido
- Dados: Space Mono 500 para números e métricas
</text>
<probability>0.09</probability>
</response>

## Escolha Final: Resposta 2 — Luxo Editorial Escuro

Design selecionado para implementação completa.
