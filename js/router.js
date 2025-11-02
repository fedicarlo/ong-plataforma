import { Home, Projetos, Projeto, Cadastro, Contato } from "./templates.js";
import { setupForms } from "./validate.js";

const mount = (html) => {
  document.getElementById("app").innerHTML = html;
  setupForms();
};

const handleRoute = () => {
  const hash = location.hash.replace(/^#\/?/, "");
  if (!hash || hash === "") return mount(Home());
  if (hash === "projetos") return mount(Projetos());
  if (hash === "cadastro") return mount(Cadastro());
  if (hash === "contato") return mount(Contato());
  if (hash.startsWith("projeto/")) {
    const slug = hash.split("/")[1];
    return mount(Projeto(slug));
  }
  return mount(Home());
};

window.addEventListener("hashchange", handleRoute);
window.addEventListener("DOMContentLoaded", handleRoute);
