PROJETO: Plataforma Web para ONG — Entrega I (HTML5 + Formulário)

OBJETIVOS
- 3 páginas HTML5 semânticas (index, projetos, cadastro), cada uma com imagens
- Hierarquia de títulos coerente
- Formulário (cadastro): Nome, E-mail, CPF, Telefone, Data de Nascimento, Endereço, CEP, Cidade, Estado
- Validação nativa (required, pattern, title)
- Máscaras CPF/Telefone/CEP (JS vanilla)
- Acessibilidade básica: landmarks, labels, aria-live, skip link

ESTRUTURA
ong-plataforma/
├─ index.html
├─ projetos.html
├─ cadastro.html
├─ assets/
│  ├─ img/ (hero.(webp/jpg), projetos-acao.(webp/jpg), voluntariado.(webp/jpg))
│  └─ icons/ (logo.svg)
└─ README.txt

VALIDAÇÃO (W3C)
1) https://validator.w3.org/
2) Aba “Validate by File Upload” → envie cada HTML
3) Corrija eventuais erros (avisos não críticos normalmente ok)

ENTREGA (GitHub + Pages)
1) git init && git add . && git commit -m "Entrega I - HTML5"
2) Criar repositório público no GitHub: ong-plataforma
3) git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/ong-plataforma.git
   git push -u origin main
4) Settings → Pages → Deploy from a branch
   Branch: main / Folder: / (root)
5) Link público (Pages): https://SEU_USUARIO.github.io/ong-plataforma/

CHECKLIST
[ ] 3 páginas com semântica correta e imagens
[ ] Hierarquia de títulos coerente (um h1 por página)
[ ] Formulário completo + required/pattern/title
[ ] Máscaras funcionando na digitação
[ ] Navegação por teclado preservada
[ ] HTML validado no W3C
[ ] Repositório público + link do Pages ativo
