import { TPL_HOME, TPL_PROJETOS, TPL_CADASTRO } from "./templates.js";
import { applyMasks } from "./masks.js";
import { validateFormCadastro, wireValidationMessages } from "./validators.js";
import { restoreDraft, persistDraft } from "./storage.js";

const routes = {
  "/": TPL_HOME,
  "/projetos": TPL_PROJETOS,
  "/cadastro": TPL_CADASTRO,
};

function render(path){
  const app=document.getElementById("app");
  app.innerHTML = routes[path] || routes["/"];
  app.focus();

  if(path==="/projetos") seedProjetos();
  if(path==="/cadastro") initCadastro();
}

function seedProjetos(){
  const el=document.getElementById("cardsProjetos"); if(!el) return;
  el.innerHTML = [
    { titulo:"Reforço escolar", cat:"Educação" },
    { titulo:"Cestas básicas", cat:"Alimentação" },
    { titulo:"Oficinas de currículo", cat:"Empregabilidade" },
  ].map(p=>`
    <article class="card">
      <h3>${p.titulo}</h3>
      <span class="badge">${p.cat}</span>
      <p>Impacto e metas com indicadores.</p>
      <button class="btn">Quero ajudar</button>
    </article>`).join("");
}

function initCadastro(){
  applyMasks();
  wireValidationMessages();
  restoreDraft();
  const form=document.getElementById("formCadastro");
  form.addEventListener("input", persistDraft);
  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if (validateFormCadastro()){
      localStorage.removeItem("ong:draft");
      alert("Cadastro enviado! Obrigado por se voluntariar.");
      form.reset();
    }
  });
}

function resolvePath(){ const h=location.hash.replace("#",""); return h && routes[h] ? h : "/"; }
window.addEventListener("hashchange", ()=>render(resolvePath()));
window.addEventListener("DOMContentLoaded", ()=>render(resolvePath()));
