// HOME (agora com hero + indicadores + causas, usando suas imagens em assets/images)
export const TPL_HOME = `
<section class="container hero">
  <div class="hero-text">
    <h1>Ficar parado não é opção — junte-se a nós</h1>
    <p>Apoio a famílias afetadas pela guerra: alimentação, acolhimento psicológico e atividades infantis.</p>
    <a class="btn primary" href="#/cadastro">Quero participar</a>
  </div>
  <div class="hero-media">
    <img src="assets/images/hero.jpg" alt="Família acolhida pela ONG">
  </div>
</section>

<section class="container stats">
  <div class="stats-grid">
    <article class="stat-card">
      <span class="stat-title">Famílias atendidas</span>
      <strong class="stat-number">1.432</strong>
    </article>
    <article class="stat-card">
      <span class="stat-title">Voluntários ativos</span>
      <strong class="stat-number">189</strong>
    </article>
    <article class="stat-card">
      <span class="stat-title">Cidades alcançadas</span>
      <strong class="stat-number">23</strong>
    </article>
  </div>
</section>

<section class="container causes">
  <h2 class="section-title">Nossas causas</h2>
  <div class="cards-grid">
    <article class="card">
      <img class="card-media" src="assets/images/alimentos.jpg" alt="Distribuição de alimentos">
      <div class="card-body">
        <h3>Suporte Alimentar</h3>
        <p>Distribuição de kits para famílias em insegurança alimentar.</p>
        <a class="btn" href="#/projetos">Saiba mais</a>
      </div>
    </article>
    <article class="card">
      <img class="card-media" src="assets/images/psicologico.jpg" alt="Acolhimento psicológico">
      <div class="card-body">
        <h3>Apoio Psicológico</h3>
        <p>Atendimento emocional individual e em grupo com profissionais.</p>
        <a class="btn" href="#/projetos">Saiba mais</a>
      </div>
    </article>
    <article class="card">
      <img class="card-media" src="assets/images/criancas.jpeg" alt="Atividades para crianças">
      <div class="card-body">
        <h3>Atividades Infantis</h3>
        <p>Recreação, acolhimento e reforço escolar para crianças.</p>
        <a class="btn" href="#/projetos">Saiba mais</a>
      </div>
    </article>
  </div>
</section>
`;

// PROJETOS
export const TPL_PROJETOS = `
<section class="container">
  <h1>Projetos sociais</h1>
  <div id="cardsProjetos" class="cards-grid"></div>
</section>
`;

// CADASTRO (form só via SPA)
export const TPL_CADASTRO = `
<section class="container">
  <h1>Cadastro de Voluntário</h1>
  <form id="formCadastro" novalidate>
    <fieldset>
      <legend>Dados pessoais</legend>
      <label>Nome Completo
        <input id="nome" name="nome" type="text" required minlength="3" autocomplete="name">
      </label>
      <label>E-mail
        <input id="email" name="email" type="email" required autocomplete="email" inputmode="email">
      </label>
      <label>CPF
        <input id="cpf" name="cpf" type="text" required maxlength="14" inputmode="numeric" placeholder="000.000.000-00">
      </label>
      <label>Telefone
        <input id="telefone" name="telefone" type="tel" required maxlength="15" inputmode="tel" placeholder="(00) 00000-0000">
      </label>
      <label>Data de Nascimento
        <input id="nascimento" name="nascimento" type="date" required>
      </label>
    </fieldset>

    <fieldset>
      <legend>Endereço</legend>
      <label>CEP
        <input id="cep" name="cep" type="text" required maxlength="9" inputmode="numeric" placeholder="00000-000">
      </label>
      <label>Endereço
        <input id="endereco" name="endereco" type="text" required autocomplete="address-line1">
      </label>
      <label>Cidade
        <input id="cidade" name="cidade" type="text" required autocomplete="address-level2">
      </label>
      <label>Estado
        <input id="estado" name="estado" type="text" required maxlength="2" placeholder="UF" autocomplete="address-level1">
      </label>
    </fieldset>

    <div id="formMsg" class="sr-only" aria-live="assertive"></div>
    <button type="submit" class="btn primary">Enviar</button>
  </form>
</section>
`;

// CONTATO (simples para fechar SPA)
export const TPL_CONTATO = `
<section class="container">
  <h1>Contato</h1>
  <ul class="contact-list">
    <li><strong>E-mail:</strong> contato@ong.org</li>
    <li><strong>Telefone:</strong> (11) 99999-9999</li>
    <li><strong>Endereço:</strong> Av. Solidária, 100 — São Paulo/SP</li>
  </ul>
</section>
`;

// SOBRE (simples)
export const TPL_SOBRE = `
<section class="container">
  <h1>Sobre nós</h1>
  <p>Atuamos para ampliar oportunidades por meio de educação, alimentação e empregabilidade, com transparência e impacto mensurável.</p>
</section>
`;
