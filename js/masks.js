function maskCPF(v) {
  return v
    .replace(/\D/g, "")
    .slice(0,11)
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}
function maskCEP(v) {
  return v.replace(/\D/g, "").slice(0,8).replace(/(\d{5})(\d)/, "$1-$2");
}
function maskTelefone(v) {
  const d = v.replace(/\D/g, "").slice(0,11);
  if (d.length <= 10) {
    return d.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
  }
  return d.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
}

export function applyMasks() {
  const id = (x)=>document.getElementById(x);
  const cpf=id("cpf"), cep=id("cep"), tel=id("telefone");
  if (cpf) cpf.addEventListener("input", e=> e.target.value=maskCPF(e.target.value));
  if (cep) cep.addEventListener("input", e=> e.target.value=maskCEP(e.target.value));
  if (tel) tel.addEventListener("input", e=> e.target.value=maskTelefone(e.target.value));
}
