export const TPL_HOME = `
<section class="hero hero-overlay" style="background-image:url('assets/images/ukraine-family.jpg')">
  <div class="container hero-inner">
    <h2>Ficar parado não é opção — junte-se a nós</h2>
    <p>Apoio a famílias afetadas pela guerra: alimentação, acolhimento psicológico e atividades infantis.</p>
    <p><a class="btn" href="#/cadastro">Quero participar</a></p>
  </div>
</section>

<section class="stats container">
  <article class="stat"><span class="stat-label">Famílias atendidas</span><span class="stat-number">1.432</span></article>
  <article class="stat"><span class="stat-label">Voluntários ativos</span><span class="stat-number">189</span></article>
  <article class="stat"><span class="stat-label">Cidades alcançadas</span><span class="stat-number">23</span></article>
</section>

<section class="container section">
  <header class="section-head">
    <h2>Nossas causas</h2>
    <p>Conheça projetos que estão mudando vidas.</p>
  </header>

  <section class="cards">
    <article class="card">
      <img src="assets/images/alimentos.jpg" alt="Suporte Alimentar">
      <h3>Suporte Alimentar</h3>
      <p>Distribuição de kits para famílias em insegurança alimentar.</p>
      <a class="btn" href="#/projetos" aria-label="Saiba mais">Saiba mais</a>
    </article>

    <article class="card">
      <img src="assets/images/psicologico.jpg" alt="Apoio Psicológico">
      <h3>Apoio Psicológico</h3>
      <p>Atendimento emocional individual e em grupo com profissionais.</p>
      <a class="btn" href="#/projetos" aria-label="Saiba mais">Saiba mais</a>
    </article>

    <article class="card">
      <img src="assets/images/criancas.jpeg" alt="Atividades Infantis">
      <h3>Atividades Infantis</h3>
      <p>Recreação, acolhimento e reforço escolar para crianças.</p>
      <a class="btn" href="#/projetos" aria-label="Saiba mais">Saiba mais</a>
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