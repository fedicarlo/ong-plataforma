export const TPL_HOME = `
<section class="hero-full" style="background-image:url('assets/images/ukraine-family.jpg')">
  <div class="hero-overlay"></div>
  <div class="container hero-content">
    <h1>Ficar parado não é uma opção — junte-se à <span class="brand">Unidas Pela Paz</span></h1>
    <p>Acolhimento, alimentação, apoio psicológico e atividades para crianças. Transparência e impacto real.</p>
    <a class="btn btn-hero" href="#/cadastro">Quero participar</a>
  </div>
</section>

<section class="stat-band container">
  <article class="stat-tile">
    <span class="stat-label">Já atendemos</span>
    <strong class="stat-num">1.432</strong>
    <span class="stat-foot">famílias</span>
  </article>
  <article class="stat-tile">
    <span class="stat-label">Voluntários ativos</span>
    <strong class="stat-num">189</strong>
    <span class="stat-foot">pessoas</span>
  </article>
  <article class="stat-tile">
    <span class="stat-label">Cidades alcançadas</span>
    <strong class="stat-num">23</strong>
    <span class="stat-foot">no Brasil</span>
  </article>
</section>

<section class="container section">
  <header class="section-head">
    <h2>Nossas causas</h2>
    <p>Conheça projetos que estão mudando vidas.</p>
  </header>

  <section class="cards">
    <article class="card">
      <img src="assets/images/alimentos.jpg" alt="Suporte Alimentar">
      <div class="card-body">
        <h3>Suporte Alimentar</h3>
        <p>Distribuição de cestas e educação alimentar.</p>
        <a class="btn btn-card" href="#/projetos">Saiba mais</a>
      </div>
    </article>

    <article class="card">
      <img src="assets/images/psicologico.jpg" alt="Apoio Psicológico">
      <div class="card-body">
        <h3>Apoio Psicológico</h3>
        <p>Atendimento individual e em grupo com profissionais.</p>
        <a class="btn btn-card" href="#/projetos">Saiba mais</a>
      </div>
    </article>

    <article class="card">
      <img src="assets/images/criancas.jpeg" alt="Atividades Infantis">
      <div class="card-body">
        <h3>Atividades Infantis</h3>
        <p>Recreação, acolhimento e reforço escolar.</p>
        <a class="btn btn-card" href="#/projetos">Saiba mais</a>
      </div>
    </article>
  </section>
</section>
`;

export const TPL_PROJETOS = `
<section class="container">
  <h1>Projetos sociais</h1>
  <div id="cardsProjetos" class="cards"></div>
</section>
`;

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
    <button type="submit" class="btn">Enviar</button>
  </form>
</section>
`;
