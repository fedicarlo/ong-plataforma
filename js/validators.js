function isEmail(v){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }
function isCPF(v){
  const s = v.replace(/\D/g,"");
  if(s.length!==11||/^(\d)\1+$/.test(s))return false;
  let soma=0;for(let i=0;i<9;i++)soma+=parseInt(s[i])*(10-i);
  let d1=(soma*10)%11;if(d1===10)d1=0;if(d1!==parseInt(s[9]))return false;
  soma=0;for(let i=0;i<10;i++)soma+=parseInt(s[i])*(11-i);
  let d2=(soma*10)%11;if(d2===10)d2=0;return d2===parseInt(s[10]);
}
function isCEP(v){ return /^\d{5}-\d{3}$/.test(v); }
function isTelefone(v){ return /^\(\d{2}\)\s?\d{4,5}-\d{4}$/.test(v); }
function isUF(v){ return /^[A-Za-z]{2}$/.test(v); }
function isDate(v){ return !!v; }

function setError(input,msg){
  input.setAttribute("aria-invalid","true");
  input.classList.add("is-invalid");
  const box = document.getElementById("formMsg");
  box.classList.remove("sr-only");
  box.textContent = msg;
}
function clearError(input){
  input.removeAttribute("aria-invalid");
  input.classList.remove("is-invalid");
}

export function wireValidationMessages(){
  document.addEventListener("input",(e)=>{
    if(!(e.target instanceof HTMLInputElement))return;
    clearError(e.target);
    if(e.target.id==="estado")e.target.value=e.target.value.toUpperCase();
  });
}

export function validateFormCadastro(){
  const get=id=>document.getElementById(id);
  const nome=get("nome"),email=get("email"),cpf=get("cpf"),telefone=get("telefone"),
        nascimento=get("nascimento"),cep=get("cep"),endereco=get("endereco"),
        cidade=get("cidade"),estado=get("estado");
  if(!nome.value||nome.value.trim().length<3){setError(nome,"Informe seu nome completo.");return false;}
  if(!isEmail(email.value)){setError(email,"E-mail inválido.");return false;}
  if(!isCPF(cpf.value)){setError(cpf,"CPF inválido.");return false;}
  if(!isTelefone(telefone.value)){setError(telefone,"Telefone inválido.");return false;}
  if(!isDate(nascimento.value)){setError(nascimento,"Data inválida.");return false;}
  if(!isCEP(cep.value)){setError(cep,"CEP inválido.");return false;}
  if(!endereco.value.trim()){setError(endereco,"Informe o endereço.");return false;}
  if(!cidade.value.trim()){setError(cidade,"Informe a cidade.");return false;}
  if(!isUF(estado.value)){setError(estado,"UF inválida.");return false;}
  document.getElementById("formMsg").textContent="";
  return true;
}
