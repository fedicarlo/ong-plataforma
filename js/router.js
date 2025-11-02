// router.js — SPA minimalista (hash-based)

import { Cadastro } from "./templates.js";
import { initCadastroForm } from "./forms.js";

const mount = () => document.getElementById("app");

function render(html) {
  const el = mount();
  if (!el) return;
  el.innerHTML = html;
}

function route() {
  const hash = (location.hash || "").replace(/^#\//, "");
  // Rotas que o SPA controla
  if (hash === "cadastro") {
    render(Cadastro());
    initCadastroForm();
    return;
  }
  // Fora das rotas do SPA -> não renderiza nada e mantém seu HTML original
  render("");
}

export function startRouter() {
  window.addEventListener("hashchange", route);
  route();
}
