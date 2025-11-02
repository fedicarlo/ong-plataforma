// forms.js — validação, DOM e LocalStorage

const emailOK = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const nomeOK  = (v) => (v || "").trim().split(/\s+/).length >= 2;
const msgOK   = (v) => (v || "").trim().length >= 10;

function paint(el, ok) {
  if (!el) return;
  el.classList.toggle("is-invalid", !ok);
  el.classList.toggle("is-valid", ok);
}

function salvarLocal(item) {
  const key = "upaz_voluntarios";
  const data = JSON.parse(localStorage.getItem(key) || "[]");
  data.push(item);
  localStorage.setItem(key, JSON.stringify(data));
}

export function initCadastroForm() {
  const form = document.querySelector("#form-voluntario");
  if (!form) return;

  const $nome = form.querySelector("#nome");
  const $email = form.querySelector("#email");
  const $msg = form.querySelector("#mensagem");
  const $fb = form.querySelector("#form-feedback");

  const validar = () => {
    const vn = nomeOK($nome.value);
    const ve = emailOK($email.value);
    const vm = msgOK($msg.value);

    paint($nome, vn);
    paint($email, ve);
    paint($msg, vm);

    if (!vn || !ve || !vm) {
      $fb.textContent = "Por favor, corrija os campos destacados.";
      return false;
    }
    $fb.textContent = "";
    return true;
  };

  form.addEventListener("input", validar);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validar()) return;

    const payload = {
      nome: $nome.value.trim(),
      email: $email.value.trim(),
      mensagem: $msg.value.trim(),
      createdAt: new Date().toISOString(),
    };

    salvarLocal(payload);
    form.reset();
    [$nome, $email, $msg].forEach((el) => {
      el.classList.remove("is-valid","is-invalid");
    });
    $fb.textContent = "Obrigado! Recebemos seu cadastro.";
  });
}
