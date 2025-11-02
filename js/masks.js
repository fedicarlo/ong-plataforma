function maskCPF(v){
  return v.replace(/\D/g,"").slice(0,11)
    .replace(/(\d{3})(\d)/,"$1.$2")
    .replace(/(\d{3})(\d)/,"$1.$2")
    .replace(/(\d{3})(\d{1,2})$/,"$1-$2");
}
function maskCEP(v){ return v.replace(/\D/g,"").slice(0,8).replace(/(\d{5})(\d)/,"$1-$2"); }
function maskTelefone(v){
  const d=v.replace(/\D/g,"").slice(0,11);
  return (d.length<=10)
    ? d.replace(/(\d{2})(\d{4})(\d{0,4})/,"($1) $2-$3")
    : d.replace(/(\d{2})(\d{5})(\d{0,4})/,"($1) $2-$3");
}
export function applyMasks(){
  const $=id=>document.getElementById(id);
  [["cpf",maskCPF],["cep",maskCEP],["telefone",maskTelefone]].forEach(([id,fn])=>{
    const el=$(id); if(el) el.addEventListener("input",e=>e.target.value=fn(e.target.value));
  });
}
