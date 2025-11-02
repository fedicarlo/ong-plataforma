const KEY = "ong:draft";
const FIELDS = ["nome","email","cpf","telefone","nascimento","cep","endereco","cidade","estado"];

export function persistDraft(){
  const data={};
  for(const id of FIELDS){
    const el=document.getElementById(id);
    if(el)data[id]=el.value;
  }
  localStorage.setItem(KEY,JSON.stringify(data));
}

export function restoreDraft(){
  const raw=localStorage.getItem(KEY);
  if(!raw)return;
  const data=JSON.parse(raw);
  for(const id of Object.keys(data)){
    const el=document.getElementById(id);
    if(el)el.value=data[id];
  }
}
