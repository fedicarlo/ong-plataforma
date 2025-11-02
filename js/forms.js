import { $, $$ } from "./utils.js";

function isEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function normalizaNome(v) {
  return v.replace(/\s+/g, " ").trim();
}

/**
 * Regras de consistência:
 * - nome com pelo menos 2 palavras e 3 letras no total
 * - email válido
 * - mensagem com >= 10 caracteres
 * Feedback inline e mensagem final.
 */
export function setupFormVoluntario() {
  const form = $("#form-voluntario");
  if (!form) return;

  const fb = $("#form-feedback");

  form.addEventListener("input", (e) => {
    const el = e.target;
    if (!(el instanceof HTMLElement)) return;
    validaCampo(el, false);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const ok = validaForm(form);
    if (!ok) {
      fb.textContent = "Por favor, corrija os campos destacados.";
      fb.className = "feedback error";
      return;
    }
    const payload = coleta(form);
    salva(payload);
    form.reset();
    fb.textContent = "Cadastro enviado! Entraremos em contato.";
    fb.className = "feedback success";
  });
}

function validaForm(form) {
  let valido = true;
  $$("input, textarea", form).forEach((el) => {
    if (!validaCampo(el, true)) valido = false;
  });
  return valido;
}

function validaCampo(el, tocarAria = false) {
  const name = el.name;
  const val = (el.value || "").toString();

  let erro = "";

  if (name === "nome") {
    const n = normalizaNome(val);
    const palavras = n.split(" ");
    if (n.length < 3 || palavras.length < 2) erro = "Informe nome e sobrenome.";
  } else if (name === "email") {
    if (!isEmail(val)) erro = "E-mail inválido.";
  } else if (name === "mensagem") {
    if (val.trim().length < 10) erro = "Descreva em pelo menos 10 caracteres.";
  } else {
    if (!val.trim()) erro = "Campo obrigatório.";
  }

  setEstadoCampo(el, erro, tocarAria);
  return !erro;
}

function setEstadoCampo(el, erro, tocarAria) {
  const wrap = el.closest("label") || el;
  if (erro) {
    wrap.classList.add("invalid");
    wrap.setAttribute("data-error", erro);
    if (tocarAria) el.setAttribute("aria-invalid", "true");
  } else {
    wrap.classList.remove("invalid");
    wrap.removeAttribute("data-error");
    el.removeAttribute("aria-invalid");
  }
}

function coleta(form) {
  const data = {};
  new FormData(form).forEach((v, k) => (data[k] = v));
  data._ts = Date.now();
  return data;
}

function salva(obj) {
  const key = "upaz_voluntarios";
  const prev = JSON.parse(localStorage.getItem(key) || "[]");
  prev.push(obj);
  localStorage.setItem(key, JSON.stringify(prev));
}
