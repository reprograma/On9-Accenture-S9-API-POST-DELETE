const helper = require('../helpers/blog-helpers')

const posts = [
    {
        "id": 1,
        "dataCriacao": helper.dateCreate(),
        "titulo": "Vamos reprogramar o mundo!",
        "conteudo": "A {reprograma} é uma iniciativa de impacto social que foca em ensinar programação para mulheres cis e trans que não têm recursos e/ou oportunidades para aprender a programar.",
        "tags": [
            "impacto social",
            "programacao",
            "girlspower"
        ]

    },
    {
        "id": 2,
        "dataCriacao": helper.dateCreate(),
        "titulo": "Estatíticas: O que elas dizem sobre o mercado tecnológico",
        "conteudo": "O setor de tecnologia é o que mais cresce no mundo. Tem muita oportunidade, mas faltam desenvolvedores. -BRASSCOM 'dos alunos de ciência da computação são mulheres. Das quais, 47% acaba desistindo. - INEP/MEC",
        "tags": [
            "estatisticas",
            "mercado",
            "mulheres"
        ]

    },
    {
        "id": 3,
        "dataCriacao": helper.dateCreate(),
        "titulo": "O que já fizemos até hoje?",
        "conteudo": "Estamos reprogramando o mundo, já temos 10 turmas realizadas, 97% de taxa de conclusão, e mais de 300 mulheres programando!",
        "tags": [
            "mulheresdev",
            "nossoimpacto",
            "vamosprogramar"
        ]

    },
    
]

module.exports = posts;