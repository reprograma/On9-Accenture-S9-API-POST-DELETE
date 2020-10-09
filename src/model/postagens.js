const helper = require('../helpers/helper');

const postagens = [{
        id: 1,
        dataCriacao: helper.dataMomento(),
        titulo: "Por que o machismo cria barreiras para as mulheres na tecnologia",
        conteudo: "O futuro está sendo escrito em linhas de código. E o público feminino, apesar de usuário de apps, redes sociais e dispositivos digitais, não participa da produção da tecnologia. Precisamos falar sobre os desafios das mulheres na área e o que fazer para aumentar sua participação.",
        tags: ["mulheres", "machismo", "tecnologia"]
    },
    {
        id: 2,
        dataCriacao: helper.dataMomento(),
        titulo: " 8 iniciativas que mostram que lugar de mulher é na tecnologia ",
        conteudo: " Setenta e quatro por cento das meninas expressam interesse no campo da ciência, tecnologia, matemática e engenharia. Mas o fato é que apenas 30% das pesquisadoras do mundo são mulheres”, afirma Adriana Carvalho, gerente dos Princípios de Empoderamento Econômico da ONU Mulheres Brasil.       A resposta contra isso veio das próprias mulheres, que criaram programas para incentivar as meninas e mulheres no mundo da tecnologia. ",
        tags: ["empresas", "incentivo", "mulheres", "tecnologia"]
    }


]

module.exports = postagens;