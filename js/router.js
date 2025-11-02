import { TPL_HOME, TPL_PROJETOS, TPL_CADASTRO } from "./templates.js";
import { applyMasks } from "./masks.js";
import { validateFormCadastro, wireValidationMessages } from "./validators.js";
import { restoreDraft, persistDraft } from "./storage.js";

const routes = {
  "/": TPL_HOME,
  "/projetos": TPL_PROJETOS,
  "/cadastro": TPL_CADASTRO,
};

function setActiveLink(path){
  document.querySelectorAll('#menu a').forEach(a=>{
    const target=a.getAttribute('href');
    a.classList.toggle('active', target===`#${path}`);
  });
}

function render(path){
  const app=document.getElementById("app");
  app.innerHTML = routes[path] || routes["/"];
  app.focus({preventScroll:true});
  window.scrollTo({top:0,behavior:"instant"});
  setActiveLink(path);

  // Páginas com JS específico
  if(path==="/projetos") seedProjetos();
  if(path==="/cadastro") initCadastro();
}

// Garante que links com hash (#/) não causem recarregamento de página
document.addEventListener("click",(e)=>{
  const a=e.target.closest("a");
  if(!a) return;
  const href=a.getAttribute("href")||"";
  if (href.startsWith("#/")) { e.preventDefault(); location.hash = href; }
});

function seedProjetos(){
  const el=document.getElementById("cardsProjetos"); if(!el) return;
  el.innerHTML = [
    { titulo:"Reforço escolar", cat:"Educação" },
    { titulo:"Cestas básicas", cat:"Alimentação" },
    { titulo:"Oficinas de currículo", cat:"Empregabilidade" },
  ].map(p=>`
    <article class="card">
      <div class="card-body">
        <h3>${p.titulo}</h3>
        <span class="badge">${p.cat}</span>
        <p>Impacto e metas com indicadores.</p>
        <button class="btn btn-card" type="button">Quero ajudar</button>
      </div>
    </article>`).join("");
}

function initCadastro(){
  applyMasks();
  wireValidationMessages();
  restoreDraft();
  const form=document.getElementById("formCadastro");
  if (!form) return; // Garante que o formulário existe
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

function resolvePath(){ const h=location.hash.replace("#",""); return (h && routes[h]) ? h : "/"; }
window.addEventListener("hashchange", ()=>render(resolvePath()));
window.addEventListener("DOMContentLoaded", ()=>render(resolvePath()));