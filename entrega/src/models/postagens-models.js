const allPosts = [

    {
        id: 1,
        dataCriacao: new Date().toString(),
        titulo: "Dicas importantes para quem quer migrar de carreira",
        conteudo: "Muitas dúvidas pairam na cabeça de quem desejar migrar de área, o medo de estar arriscando sua carreira pra tentar algo pode paralisar nossos projetos...",
        tags: ["migracao","carreira","vidaProfissional","empowerment", "tecnologia", "codingGirls"]
    },

    {
        id: 2,
        dataCriacao: new Date().toString(),
        titulo: "Entenda por que Javascript e Java não são a mesma coisa",
        conteudo: "Ainda que tenham nomes parecidos, Javascript e Java são linguagens diferentes: a primeira atua no FrontEnd e a segunda no BackEnd...",
        tags: ["nivelIniciante","frontEnd","backEnd","java", "javascript"]
    },

    {
        id: 3,
        dataCriacao: new Date().toString(),
        titulo: "Qual biblioteca de Javascript escolher: React, Angular, Vue ou JQuery?",
        conteudo: "Assim que começamos a estudar FrontEnd, descobrimos o mundo de possibilidades do Javascript e de seus frameworks. A parte mais difícil é escolher em qual(ou quais) dela(s) se aprofundar...",
        tags: ["javascript","biblioteca","frameworks", "angular", "react", "vue", "jQuery", "frontEnd"]
    }
]

module.exports = allPosts;