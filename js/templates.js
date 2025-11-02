// --- tiny helper ---
const html = (s, ...v) => s.map((x,i)=>x+(v[i]??"")).join("");

// --- Header comum ---
export const Header = () => html`
<header class="site-header">
  <div class="container header-grid">
    <a class="logo" href="#/">Unidas Pela Paz</a>
    <button class="menu-btn" aria-label="Abrir menu">☰</button>
    <nav class="site-nav">
      <a href="#/">Início</a>
      <a href="#/projetos">Projetos</a>
      <a href="#/cadastro">Cadastro</a>
      <a href="#/contato">Contato</a>
      <a href="#/sobre">Sobre</a>
    </nav>
  </div>
</header>`;

// --- Home (resumo) ---
export const Home = () => html`
${Header()}
<main class="container section">
  <section class="hero">
    <div class="hero-text">
      <h1>Ficar parado não é opção — junte-se a nós</h1>
      <p>Apoio a famílias afetadas pela guerra: alimentação, acolhimento psicológico e atividades infantis.</p>
      <a class="btn" href="#/cadastro">Quero participar</a>
    </div>
    <img class="hero-img" src="assets/images/hero.jpg" alt="">
  </section>

  <section class="kpis">
    <div class="kpi"><small>Famílias atendidas</small><strong>1.432</strong></div>
    <div class="kpi"><small>Voluntários ativos</small><strong>189</strong></div>
    <div class="kpi"><small>Cidades alcançadas</small><strong>23</strong></div>
  </section>

  <h2 class="section-title">Nossas causas</h2>
  <div class="cards-3">
    <article class="card">
      <img src="assets/images/cause-1.jpg" alt="">
      <h3>Suporte Alimentar</h3>
      <p>Distribuição de kits para famílias em insegurança alimentar.</p>
      <a class="btn" href="#/projeto/suporte">Saiba mais</a>
    </article>
    <article class="card">
      <img src="assets/images/cause-2.jpg" alt="">
      <h3>Apoio Psicológico</h3>
      <p>Atendimento emocional individual e em grupo com profissionais.</p>
      <a class="btn" href="#/projeto/psicologico">Saiba mais</a>
    </article>
    <article class="card">
      <img src="assets/images/cause-3.jpg" alt="">
      <h3>Atividades Infantis</h3>
      <p>Recreação, acolhimento e reforço escolar para crianças.</p>
      <a class="btn" href="#/projeto/atividades">Saiba mais</a>
    </article>
  </div>
</main>`;

// --- Página Projetos (lista) ---
export const Projetos = () => html`
${Header()}
<main class="container section">
  <h2>Projetos</h2>
  <div class="cards-3">
    <article class="card">
      <img src="assets/images/cause-1.jpg" alt="">
      <h3>Suporte Alimentar</h3>
      <p>Kits de alimentos e logística de distribuição.</p>
      <a class="btn" href="#/projeto/suporte">Detalhes</a>
    </article>
    <article class="card">
      <img src="assets/images/cause-2.jpg" alt="">
      <h3>Apoio Psicológico</h3>
      <p>Atendimento com rede de psicólogos voluntários.</p>
      <a class="btn" href="#/projeto/psicologico">Detalhes</a>
    </article>
    <article class="card">
      <img src="assets/images/cause-3.jpg" alt="">
      <h3>Atividades Infantis</h3>
      <p>Reforço escolar, lazer e segurança.</p>
      <a class="btn" href="#/projeto/atividades">Detalhes</a>
    </article>
  </div>
</main>`;

// --- Banco fake de projetos ---
const PROJETOS = {
  suporte: {
    titulo: "Suporte Alimentar",
    imagem: "assets/images/cause-1.jpg",
    objetivo: "Garantir alimentação básica a famílias em vulnerabilidade.",
    publico: "Famílias em insegurança alimentar nas cidades atendidas.",
    comoAjudar: ["Doar cestas", "Apoiar logística", "Voluntariar na triagem"]
  },
  psicologico: {
    titulo: "Apoio Psicológico",
    imagem: "assets/images/cause-2.jpg",
    objetivo: "Acolhimento emocional com profissionais e estudantes.",
    publico: "Adultos e crianças afetados por deslocamento e guerra.",
    comoAjudar: ["Psicólogos voluntários", "Mediação de grupos", "Doação de espaço"]
  },
  atividades: {
    titulo: "Atividades Infantis",
    imagem: "assets/images/cause-3.jpg",
    objetivo: "Rotina segura de estudo, lazer e reforço escolar.",
    publico: "Crianças de 4 a 13 anos em abrigos e comunidades.",
    comoAjudar: ["Doar materiais", "Apoiar transporte", "Voluntariar nas oficinas"]
  }
};

// --- Página de Projeto individual ---
export const Projeto = (slug) => {
  const p = PROJETOS[slug];
  if (!p) {
    return Header() + html`<main class="container section"><p>Projeto não encontrado.</p></main>`;
  }
  return (
    Header() +
    html`<main class="container section" style="max-width:880px">
      <h2>${p.titulo}</h2>
      <img src="${p.imagem}" alt="${p.titulo}" style="width:100%;border-radius:16px">
      <h3>Objetivo</h3>
      <p>${p.objetivo}</p>
      <h3>Público-alvo</h3>
      <p>${p.publico}</p>
      <h3>Como ajudar</h3>
      <ul>${p.comoAjudar.map((i) => `<li>${i}</li>`).join("")}</ul>
      <p><a class="btn" href="#/cadastro">Quero participar</a></p>
    </main>`
  );
};

// --- Cadastro (com Mensagem) ---
export const Cadastro = () => html`
${Header()}
<main class="container section" style="max-width:760px">
  <h2>Cadastro de Voluntário</h2>
  <form id="cadastroForm" novalidate>
    <label>Nome Completo<input name="nome" required></label>
    <label>E-mail<input type="email" name="email" required></label>
    <label>CPF<input name="cpf" inputmode="numeric" maxlength="14" required></label>
    <label>Telefone<input name="telefone" inputmode="tel" required></label>
    <label>Data de Nascimento<input type="date" name="nascimento" required></label>
    <label>Endereço<input name="endereco" required></label>
    <label>CEP<input name="cep" inputmode="numeric" maxlength="9" required></label>
    <label>Cidade<input name="cidade" required></label>
    <label>Estado<input name="estado" required></label>
    <label>Assunto (opcional)<input name="assunto"></label>
    <label>Mensagem<textarea name="mensagem" rows="4" required></textarea></label>
    <button class="btn" type="submit">Enviar</button>
  </form>
  <p class="hint">Seus dados ficam somente no seu navegador (localStorage) para esta demonstração.</p>
</main>`;

// --- Contato (página inspirada no seu colega) ---
export const Contato = () => html`
${Header()}
<section class="contact-hero">
  <div class="container contact-grid">
    <div>
      <h2>Tem alguma pergunta?</h2>
      <p>Fale com a gente. Respondemos assim que possível.</p>
      <ul class="contact-list">
        <li><strong>Endereço:</strong> Rua das Flores, 123 — Juazeiro/BA</li>
        <li><strong>Telefone:</strong> (87) 9 0000-0000</li>
        <li><strong>E-mail:</strong> contato@unidaspelapaz.org</li>
      </ul>
    </div>
    <form id="contatoForm" class="contact-form" novalidate>
      <label>Seu nome<input name="nome" required></label>
      <label>Seu e-mail<input type="email" name="email" required></label>
      <label>Assunto<input name="assunto" required></label>
      <label>Mensagem<textarea name="mensagem" rows="6" required></textarea></label>
      <button class="btn" type="submit">Enviar mensagem</button>
    </form>
  </div>
</section>`;
