const maskCPF = (v) =>
  v.replace(/\D/g,"").slice(0,11)
   .replace(/(\d{3})(\d)/,"$1.$2")
   .replace(/(\d{3})(\d)/,"$1.$2")
   .replace(/(\d{3})(\d{1,2})$/,"$1-$2");

const maskCEP = (v) =>
  v.replace(/\D/g,"").slice(0,8)
   .replace(/(\d{5})(\d)/,"$1-$2");

const maskPhone = (v) =>
  v.replace(/\D/g,"").slice(0,11)
   .replace(/(\d{2})(\d)/,"($1) $2")
   .replace(/(\d{5})(\d{1,4})$/,"$1-$2");

export const setupForms = () => {
  // Cadastro
  const f = document.getElementById("cadastroForm");
  if (f) {
    const cpf = f.elements["cpf"];
    const cep = f.elements["cep"];
    const tel = f.elements["telefone"];
    cpf.addEventListener("input", e => e.target.value = maskCPF(e.target.value));
    cep.addEventListener("input", e => e.target.value = maskCEP(e.target.value));
    tel.addEventListener("input", e => e.target.value = maskPhone(e.target.value));

    f.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!f.checkValidity()) { f.reportValidity(); return; }
      const data = Object.fromEntries(new FormData(f).entries());
      localStorage.setItem("cadastroVoluntario", JSON.stringify(data));
      alert("Cadastro enviado! (demo: salvo no seu navegador)");
      f.reset();
    });
  }

  // Contato
  const c = document.getElementById("contatoForm");
  if (c) {
    c.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!c.checkValidity()) { c.reportValidity(); return; }
      const data = Object.fromEntries(new FormData(c).entries());
      localStorage.setItem("contatoMsg", JSON.stringify({
        ...data, ts: new Date().toISOString()
      }));
      alert("Mensagem enviada! (demo)");
      c.reset();
    });
  }
};
