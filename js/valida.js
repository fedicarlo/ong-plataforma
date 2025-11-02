(function(){
  const emailOk=v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const onlyDigits=v=>(v||"").replace(/\D/g,"");
  const cpfOk=v=>{
    v=onlyDigits(v);
    if(!v||v.length!==11||/^(\d)\1+$/.test(v))return false;
    const dv=b=>{let s=0;for(let i=0;i<b.length;i++)s+=parseInt(b[i])*(b.length+1-i);const r=(s*10)%11;return r===10?0:r};
    const d1=dv(v.slice(0,9)); const d2=dv(v.slice(0,9)+d1);
    return v.endsWith(String(d1)+String(d2));
  };
  function attach(form){
    if(!form) return;
    form.addEventListener("submit",(e)=>{
      const q=id=>form.querySelector("#"+id);
      const nome=q("nome")||q("seu-nome")||q("nome-completo");
      const email=q("email")||q("seu-email")||q("e-mail");
      const cpf=q("cpf"); const tel=q("telefone")||q("tel"); const msg=q("mensagem");
      let ok=true, errs=[];
      if(nome && nome.value.trim().length<2){ok=false;errs.push("Informe seu nome.");}
      if(email && !emailOk(email.value.trim())){ok=false;errs.push("E-mail inválido.");}
      if(cpf && cpf.value.trim() && !cpfOk(cpf.value)){ok=false;errs.push("CPF inválido.");}
      if(tel && onlyDigits(tel.value).length>0 && onlyDigits(tel.value).length<10){ok=false;errs.push("Telefone incompleto.");}
      if(msg && msg.value.trim().length<5){ok=false;errs.push("Escreva uma mensagem.");}
      if(!ok){e.preventDefault();alert("Por favor, corrija:\n- "+errs.join("\n- "));}
      else{
        try{
          localStorage.setItem("ultimo_cadastro",JSON.stringify({
            nome:nome?.value,email:email?.value,cpf:cpf?.value,telefone:tel?.value,mensagem:msg?.value,ts:new Date().toISOString()
          }));
        }catch(_){}
        alert("Cadastro recebido! (simulação)");
      }
    });
  }
  document.addEventListener("DOMContentLoaded",()=>{
    attach(document.querySelector("#form-voluntario"));
    attach(document.querySelector("form#cadastro-voluntario, form[data-form='cadastro']")||document.querySelector("form"));
  });
})();
