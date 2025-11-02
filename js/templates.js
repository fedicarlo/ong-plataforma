export const TPL_HOME = `
<section class="hero">
  <h1>Missão, Visão e Valores</h1>
  <p>Atuamos para ampliar oportunidades por meio de educação, alimentação e empregabilidade.</p>
</section>
<section class="grid-3">
  <article class="card">
    <h2>Transparência</h2>
    <p>Relatórios públicos e mensuração de impacto social.</p>
  </article>
  <article class="card">
    <h2>Projetos</h2>
    <p>Categorias, indicadores e histórias reais.</p>
  </article>
  <article class="card">
    <h2>Voluntariado</h2>
    <p>Encontre oportunidades e acompanhe seu histórico.</p>
  </article>
</section>
`;

export const TPL_PROJETOS = `
<section>
  <h1>Projetos sociais</h1>
  <div id="cardsProjetos" class="cards grid-3"></div>
</section>
`;

export const TPL_CADASTRO = `
<section>
  <h1>Cadastro de Voluntário</h1>
  <form id="formCadastro" novalidate>
    <fieldset>
      <legend>Dados pessoais</legend>
      <label>Nome Completo
        <input id="nome" name="nome" type="text" required minlength="3">
      </label>
      <label>E-mail
        <input id="email" name="email" type="email" required>
      </label>
      <label>CPF
        <input id="cpf" name="cpf" type="text" required maxlength="14" placeholder="000.000.000-00">
      </label>
      <label>Telefone
        <input id="telefone" name="telefone" type="tel" required maxlength="15" placeholder="(00) 00000-0000">
      </label>
      <label>Data de Nascimento
        <input id="nascimento" name="nascimento" type="date" required>
      </label>
    </fieldset>

    <fieldset>
      <legend>Endereço</legend>
      <label>CEP
        <input id="cep" name="cep" type="text" required maxlength="9" placeholder="00000-000">
      </label>
      <label>Endereço
        <input id="endereco" name="endereco" type="text" required>
      </label>
      <label>Cidade
        <input id="cidade" name="cidade" type="text" required>
      </label>
      <label>Estado
        <input id="estado" name="estado" type="text" required maxlength="2" placeholder="UF">
      </label>
    </fieldset>

    <div id="formMsg" class="sr-only" aria-live="assertive"></div>
    <button type="submit" class="btn primary">Enviar</button>
  </form>
</section>
`;
