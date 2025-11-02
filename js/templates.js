import { html } from "./utils.js";
import { counters, projetos, blog, eventos, projetosTexto } from "./data.js";
import { fmt } from "./utils.js";

export const Header = () => html`
<header class="site-header">
  <div class="container header-inner">
    <h1 class="logo"><a href="#/">Unidas Pela Paz</a></h1>
    <nav>
      <ul class="nav-links">
        <li><a href="#/">Início</a></li>
        <li><a href="#/projetos">Projetos</a></li>
        <li><a href="#/cadastro">Cadastro</a></li>
        <li><a href="#/sobre">Sobre</a></li>
      </ul>
    </nav>
  </div>
</header>
`;

const Hero = () => html`
<section class="hero">
  <img class="hero-img" src="assets/images/ukraine-family.jpg" alt="Família">
  <div class="hero-content container">
    <h2>Ficar parado não é opção — junte-se a nós</h2>
    <p>Apoio a famílias afetadas pela guerra: alimentação, acolhimento psicológico e atividades infantis.</p>
    <a class="btn" href="#/cadastro">Quero participar</a>
  </div>
</section>
`;

const Counters = () => html`
<section class="container stats">
  <div class="stat"><span>Famílias atendidas</span><strong>${fmt(counters.familias)}</strong></div>
  <div class="stat"><span>Voluntários ativos</span><strong>${fmt(counters.voluntarios)}</strong></div>
  <div class="stat"><span>Cidades alcançadas</span><strong>${fmt(counters.cidades)}</strong></div>
</section>
`;

const CardProjeto = (p) => html`
<article class="card">
  <img src="${p.imagem}" alt="${p.titulo}">
  <div class="card-body">
    <h3>${p.titulo}</h3>
    <p>${p.descricao}</p>
    <a class="btn" href="${p.link}">Saiba mais</a>
  </div>
</article>
`;

const CarouselMini = () => html`
<section class="container thumbs">
  ${projetos.map((p) => html`<img class="thumb" src="${p.imagem}" alt="${p.titulo}">`).join("")}
</section>
`;

const BlogCards = () => html`
<section class="container section">
  <h3 class="section-title">Do blog</h3>
  <p class="section-sub">Histórias e notícias sobre nossos projetos.</p>
  <div class="grid">
    ${blog.map((b) => html`<article class="card">
      <img src="${b.imagem}" alt="${b.titulo}">
      <div class="card-body">
        <h4>${b.titulo}</h4>
        <p>${b.resumo}</p>
      </div>
    </article>`).join("")}
  </div>
</section>
`;

const Eventos = () => html`
<section class="container section">
  <h3 class="section-title">Próximos eventos</h3>
  <div class="grid">
    ${eventos.map((e) => html`<article class="card">
      <img src="${e.imagem}" alt="${e.titulo}">
      <div class="card-body">
        <h4>${e.titulo}</h4>
        <p class="muted">${e.quando} • ${e.onde}</p>
        <a class="btn" href="#/cadastro">${e.cta}</a>
      </div>
    </article>`).join("")}
  </div>
</section>
`;

const FormVoluntario = () => html`
<section class="container section">
  <h3 class="section-title">Seja voluntário(a)</h3>
  <form id="form-voluntario" novalidate class="form">
    <label>Seu nome
      <input type="text" name="nome" placeholder="Seu nome" required>
    </label>
    <label>Seu e-mail
      <input type="email" name="email" placeholder="Seu e-mail" required>
    </label>
    <label>Mensagem
      <textarea name="mensagem" placeholder="Como deseja ajudar?" rows="3" required></textarea>
    </label>
    <button class="btn" type="submit">Enviar</button>
    <p id="form-feedback" class="feedback" aria-live="polite"></p>
  </form>
</section>
`;

export const Home = () =>
  Header() +
  Hero() +
  Counters() +
  html`<section class="container section">
    <h3 class="section-title">Nossas causas</h3>
    <p class="section-sub">Conheça projetos que estão mudando vidas.</p>
    <div class="grid">
      ${projetos.map(CardProjeto).join("")}
    </div>
  </section>` +
  CarouselMini() +
  BlogCards() +
  Eventos() +
  FormVoluntario();

export const Projetos = () =>
  Header() +
  html`<main class="container section">
    <h2>Projetos</h2>
    <div class="grid">
      ${projetos.map(CardProjeto).join("")}
    </div>
  </main>`;

export const Cadastro = () =>
  Header() + html`<main class="container section">${FormVoluntario()}</main>`;

export const Sobre = () =>
  Header() +
  html`<main class="container section" style="max-width:860px">
    <h2>Sobre</h2>
    <p>Projeto acadêmico — <strong>Unidas Pela Paz</strong>. Site responsivo com HTML5, CSS3 e JavaScript (SPA básica).</p>
    <h3>Tecnologias</h3>
    <ul>
      <li>HTML5, CSS3 modular</li>
      <li>JS ES Modules, SPA por hash router</li>
      <li>LocalStorage para persistência de formulários</li>
    </ul>
  </main>`;

export const ProjetoDetalhe = (slug) => {
  const p = projetosTexto[slug];
  if (!p) {
    return Header() + html`<main class="container section"><p>Projeto não encontrado.</p></main>`;
  }
  return Header() + html`<main class="container section" style="max-width:880px">
    <h2>${p.titulo}</h2>
    <img src="${p.imagem}" alt="${p.titulo}" style="width:100%;border-radius:16px">
    <h3>Objetivo</h3>
    <p>${p.objetivo}</p>
    <h3>Público-alvo</h3>
    <p>${p.publico}</p>
    <h3>Como ajudar</h3>
    <ul>${p.comoAjudar.map((i) => `<li>${i}</li>`).join("")}</ul>
    <p><a class="btn" href="#/cadastro">Quero participar</a></p>
  </main>`;
};
