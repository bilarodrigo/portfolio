# AGENTS.md — Portfólio (bilarodrigo/portfolio)

Guia rápido para agentes: como adicionar/alterar algo no site e publicar em poucos passos.

## Visão geral do projeto

- Site estático: `index.html` + `style.css` + `script.js` + pasta `fotos/`
- Publicado no GitHub Pages, branch `main`
- Produção: https://bilarodrigo.github.io/portfolio/ (atualiza ~1 min após o push)

## Adicionar um projeto ao Portfólio (procedimento padrão)

1. **Localizar** a seção `<!-- Portfólio -->` no `index.html` → `<div class="portfolio-grid">`
2. **Posição:** novo card quase sempre entra **antes do card "Desenvolvimento de Placas"** (que é o item final da grade)
3. **Template de card** (copiar estrutura dos existentes):

```html
<div class="portfolio-card">
    <div class="portfolio-img" style="background: linear-gradient(135deg, #XXXXXX 0%, #YYYYYY 100%);">
        <span>Nome Curto</span>
    </div>
    <div class="portfolio-info">
        <h3>Título do Projeto</h3>
        <p>Descrição em 1–2 linhas.</p>
        <div class="portfolio-tags">
            <span>TAG1</span><span>TAG2</span><span>TAG3</span>
        </div>
        <a href="URL_DEPLOY" target="_blank" rel="noopener" class="servico-link">Acessar →</a>
        <!-- Link extra só se existir: -->
        <!-- <a href="fotos/slug/index.html" target="_blank" rel="noopener" class="servico-link">Fotos →</a> -->
        <!-- Link do GitHub/conteúdo externo: ADD ou REMOVER conforme pedido do usuário -->
    </div>
</div>
```

4. **Regras do card:**
   - Banner = gradiente inline (cores ainda pouco usadas pelos outros cards) + nome curto no `<span>`
   - Descrição: 1–2 frases, direto ao ponto
   - Tags: 3–4 no máximo
   - **GitHub só entra se o usuário pedir** (padrão do usuário: card com "Acessar →" e, se houver, "Fotos →")

## Deploy rápido (sempre este fluxo)

```bash
cd ~/Desktop/portfolio
git add <arquivo(s)>
git commit -m "Mensagem curta em PT-BR e imperativa"
git push origin main
```

- Verificar produção: https://bilarodrigo.github.io/portfolio/

## Preferências do usuário (ninguém decide por ele)

- **1 mudança = 1 commit separado** (não agrupar mudanças distintas em um commit)
- Push em `main` logo após o commit (sem force-push)
- Idioma dos commits e do site: português (BR)

## Formulário de contato (Fale Comigo)

- Serviço: **Web3Forms** (`https://api.web3forms.com/submit`)
- Chave de acesso fica no `access_key` do `index.html` — **não trocar** a chave sem o usuário pedir
- Resposta via AJAX (`fetch`) com mensagem de status no `#formStatus` (sucesso em verde / erro em vermelho) — não voltar para `form.submit()` nativo
- Web3Forms gratuito: 250 envios/mês

## Fotos dos projetos

- Cada projeto pode ter pasta: `fotos/<slug>/index.html` (galeria própria, linkada como "Fotos →")
- Verificar se a pasta existe antes de criar link para ela
