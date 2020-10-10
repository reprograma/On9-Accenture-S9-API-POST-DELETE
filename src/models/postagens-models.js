const allPosts = [

    {
        id: 1,
        dataCriacao: new Date().toString(),
        titulo: "Qual é a diferença entre back-end e front-end?",
        conteudo: "Existem dois tipos de linguagens para desenvolvermos para internet: as linguagens client-side e as linguagens server-side. Você pode ver estes nomes meio diferentes em outros lugares como por exemplo, front-end, se referindo às linguagens client-side e back-end se referindo às linguagens server-side.",
        tags: ["backend","frontend","programacao"]
    },

    {
        id: 2,
        dataCriacao: new Date().toString(),
        titulo: "A importância das mulheres na programação",
        conteudo: "Apesar dos dados ainda demonstrarem que a participação delas em áreas técnicas é tímida - apenas 20% dos mais de 580 mil profissionais que atuam em TI no Brasil, segundo o IBGE – a presença das profissionais em áreas complementares (e essenciais) dentro dessas empresas vem se mostrando como uma rota de mudança desse paradigma.",
        tags: ["mulheres","programacao","mulheresNaProgramacao"]
    }
]
 
//NÃO ESQUECER DE EXPORTAR!!!!!!!!!!
module.exports = allPosts