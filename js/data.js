// Dados mockados para renderização via templates
export const counters = {
  familias: 1432,
  voluntarios: 189,
  cidades: 23,
};

export const projetos = [
  {
    slug: "suporte",
    titulo: "Suporte Alimentar",
    descricao: "Distribuição de kits para famílias em insegurança alimentar.",
    imagem: "assets/images/alimentos.jpg",
    link: "#/projeto/suporte",
  },
  {
    slug: "psicologico",
    titulo: "Apoio Psicológico",
    descricao: "Atendimento emocional individual e em grupo com profissionais.",
    imagem: "assets/images/psicologico.jpg",
    link: "#/projeto/psicologico",
  },
  {
    slug: "atividades",
    titulo: "Atividades Infantis",
    descricao: "Recreação, acolhimento e reforço escolar para crianças.",
    imagem: "assets/images/criancas.jpeg",
    link: "#/projeto/atividades",
  },
];

export const blog = [
  {
    titulo: "Como medimos impacto social",
    resumo: "Conheça nossos indicadores e relatórios de transparência.",
    imagem: "assets/images/ukraine-family.jpg",
  },
  {
    titulo: "Voluntariado responsável",
    resumo: "Dicas para começar a ajudar com propósito e constância.",
    imagem: "assets/images/alimentos.jpg",
  },
  {
    titulo: "Transparência nas doações",
    resumo: "Para onde vai o dinheiro e como prestamos contas.",
    imagem: "assets/images/psicologico.jpg",
  },
];

export const eventos = [
  {
    titulo: "Campanha de doação",
    quando: "10:30–15:30",
    onde: "Sede",
    cta: "Quero participar",
    imagem: "assets/images/alimentos.jpg",
  },
  {
    titulo: "Mutirão de saúde",
    quando: "08:00–12:00",
    onde: "Praça Central",
    cta: "Saiba mais",
    imagem: "assets/images/familiaucrania.jpg",
  },
  {
    titulo: "Feira solidária",
    quando: "09:00–17:00",
    onde: "Ginásio",
    cta: "Participar",
    imagem: "assets/images/ukraine-family.jpg",
  },
];

export const projetosTexto = {
  suporte: {
    titulo: "Projeto — Suporte Alimentar",
    objetivo: "Distribuição de kits e educação alimentar para famílias.",
    publico: "Famílias em insegurança alimentar.",
    comoAjudar: ["Doação de alimentos", "Voluntariado em triagem/entrega"],
    imagem: "assets/images/alimentos.jpg",
  },
  psicologico: {
    titulo: "Projeto — Apoio Psicológico",
    objetivo: "Acolhimento emocional com psicólogos e terapeutas.",
    publico: "Adultos e jovens em vulnerabilidade.",
    comoAjudar: ["Profissionais voluntários", "Doação para custeio do programa"],
    imagem: "assets/images/psicologico.jpg",
  },
  atividades: {
    titulo: "Projeto — Atividades Infantis",
    objetivo: "Recreação, acolhimento e reforço escolar.",
    publico: "Crianças de 5 a 12 anos acompanhadas.",
    comoAjudar: ["Voluntariado recreação/educação", "Doação de materiais"],
    imagem: "assets/images/criancas.jpeg",
  },
};
