function isEmail(v){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }
function isCPF(v){
  const s=v.replace(/\D/g,""); if(s.length!==11||/^(\d)\1+$/.test(s)) return false;
  let soma=0; for(let i=0;i<9;i++) soma+=+s[i]*(10-i);
  let d1=(soma*10)%11; if(d1===10)d1=0; if(d1!==+s[9]) return false;
  soma=0; for(let i=0;i<10;i++) soma+=+s[i]*(11-i);
  let d2=(soma*10)%11; if(d2===10)d2=0; return d2===+s[10];
}
function isCEP(v){ return /^\d{5}-\d{3}$/.test(v); }
function isTelefone(v){ return /^\(\d{2}\)\s?\d{4,5}-\d{4}$/.test(v); }
function isUF(v){ return /^[A-Za-z]{2}$/.test(v); }
function isDate(v){ return !!v; }

function setError(input,msg){
  input.setAttribute("aria-invalid","true");
  input.classList.add("is-invalid");
  const box=document.getElementById("formMsg");
  if(box){ box.classList.remove("sr-only"); box.textContent=msg; }
}
function clearError(input){ input.removeAttribute("aria-invalid"); input.classList.remove("is-invalid"); }

export function wireValidationMessages(){
  document.addEventListener("input",(e)=>{
    if(!(e.target instanceof HTMLInputElement)) return;
    clearError(e.target);
    if(e.target.id==="estado") e.target.value=e.target.value.toUpperCase().slice(0,2);
  });
}

export function validateFormCadastro(){
  const $=id=>document.getElementById(id);
  const nome=$("nome"), email=$("email"), cpf=$("cpf"), telefone=$("telefone"),
        nascimento=$("nascimento"), cep=$("cep"), endereco=$("endereco"),
        cidade=$("cidade"), estado=$("estado");
  if(!nome.value||nome.value.trim().length<3) return setError(nome,"Informe seu nome completo."),false;
  if(!isEmail(email.value)) return setError(email,"E-mail inválido."),false;
  if(!isCPF(cpf.value)) return setError(cpf,"CPF inválido."),false;
  if(!isTelefone(telefone.value)) return setError(telefone,"Telefone inválido."),false;
  if(!isDate(nascimento.value)) return setError(nascimento,"Informe a data de nascimento."),false;
  if(!isCEP(cep.value)) return setError(cep,"CEP inválido (00000-000)."),false;
  if(!endereco.value.trim()) return setError(endereco,"Informe o endereço."),false;
  if(!cidade.value.trim()) return setError(cidade,"Informe a cidade."),false;
  if(!isUF(estado.value)) return setError(estado,"UF inválida (ex.: SP)."),false;
  const box=document.getElementById("formMsg"); if(box){ box.textContent=""; box.classList.add("sr-only"); }
  return true;
}
