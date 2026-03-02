# Travel Site

Projeto simples em JavaScript puro para um site de recomendações de viagens.

## Conteúdo
- `index.html` Página inicial com introdução, destaques, recomendações e depoimentos
- `about.html` Página "Sobre Nós" com missão e informações
- `contact.html` Formulário de e-mail funcional via JavaScript
- `style.css` Estilos básicos
- `main.js` Script para envio de formulário
- `images/` Imagens usadas pelo site (adicione as imagens correspondentes)

## Publicar no GitHub Pages

1. **Crie um repositório no GitHub**
   - Acesse https://github.com/new
   - Escolha o nome (por exemplo, `travel-site`) e marque como **public**.
   - Não adicione README ou `.gitignore` (já temos localmente). Você pode ignorar esta etapa.

2. **Inicialize o repositório localmente (já feito)**
   ```bash
   cd course1/travel-site
   git init
   git add .
   git commit -m "Projeto inicial do site de viagem"
   ```

3. **Adicione o remoto e faça push**
   ```bash
   git remote add origin https://github.com/<seu-usuario>/travel-site.git
   git branch -M main
   git push -u origin main
   ```
   > Se preferir usar o GitHub CLI:
   > ```bash
   > gh repo create <seu-usuario>/travel-site --public --source=. --remote=origin --push
   > ```

4. **Ative o GitHub Pages**
   - No repositório no GitHub, vá em **Settings > Pages**.
   - Em **Source**, selecione `main` (ou `gh-pages` se criar outro branch) e clique em **Save**.
   - A URL será `https://<seu-usuario>.github.io/travel-site/`.

5. **Verifique o site**
   - Abra a URL fornecida. Todos os arquivos HTML estáticos devem estar disponíveis.
   - Se precisar atualizar, basta commitar e dar `git push` — o GitHub Pages reconstrói automaticamente.

> 🔒 O repositório fica público, e o site também; edições podem ser feitas diretamente aqui e, se desejar, usar braching ou arquivos de tema.

## Notas adicionais
- Para publicar em outro branch (`gh-pages`), use `npm install --save-dev gh-pages` e um script `deploy` no `package.json`.
- Você pode usar a própria página para hospedar assets estáticos (imagens, css, js).

---

Boa viagem! ✈️
