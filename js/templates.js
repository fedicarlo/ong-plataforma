// templates.js — views e pequenos helpers

export const html = (strings, ...values) =>
  strings.map((s, i) => s + (values[i] ?? "")).join("");

// Cabeçalho minimal, mantendo seus links principais.
// O link "Cadastro" aponta para o SPA: #/cadastro
export const Header = () => html`
  <header class="site-header">
    <div class="container header-inner">
      <h1 class="logo"><a href="index.html">Unidas Pela Paz</a></h1>
      <nav>
        <ul class="nav-links">
          <li><a href="index.html">Início</a></li>
          <li><a href="projetos.html">Projetos</a></li>
          <li><a href="#/cadastro">Cadastro</a></li>
          <li><a href="sobre.html">Sobre</a></li>
        </ul>
      </nav>
    </div>
  </header>
`;

// Formulário exigido na Entrega III: nome, e-mail, mensagem
export const FormVoluntario = () => html`
  <form id="form-voluntario" novalidate>
    <label for="nome">Nome completo</label>
    <input id="nome" name="nome" type="text" class="input" placeholder="Seu nome e sobrenome" required>

    <label for="email">E-mail</label>
    <input id="email" name="email" type="email" class="input" placeholder="seu@email.com" required>

    <label for="mensagem">Mensagem</label>
    <textarea id="mensagem" name="mensagem" rows="4" class="textarea" placeholder="Como deseja ajudar?" required></textarea>

    <div id="form-feedback" class="form-feedback" aria-live="polite"></div>

    <button class="btn" type="submit">Enviar</button>
  </form>
`;

// Página Cadastro (SPA)
export const Cadastro = () => html`
  ${Header()}
  <main class="container section" style="max-width:720px">
    <h2>Cadastro de Voluntário</h2>
    ${FormVoluntario()}
  </main>
`;
