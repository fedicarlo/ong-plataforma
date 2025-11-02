import { Home, Projetos, Cadastro, Sobre, ProjetoDetalhe } from "./templates.js";
import { mount, $ } from "./utils.js";
import { setupFormVoluntario } from "./forms.js";

const routes = [
  { path: /^#\/?$/, view: Home },
  { path: /^#\/projetos$/, view: Projetos },
  { path: /^#\/cadastro$/, view: Cadastro },
  { path: /^#\/sobre$/, view: Sobre },
  { path: /^#\/projeto\/(suporte|psicologico|atividades)$/, view: (slug) => ProjetoDetalhe(slug) },
];

function resolve() {
  const hash = location.hash || "#/";
  for (const r of routes) {
    const m = hash.match(r.path);
    if (m) {
      const html = r.view(m[1]);
      mount($("#app"), html);
      // pós-render
      setupFormVoluntario();
      return;
    }
  }
  mount($("#app"), "<main class='container section'><p>Página não encontrada.</p></main>");
}

export function startRouter() {
  addEventListener("hashchange", resolve);
  resolve();
}
