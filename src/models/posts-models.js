const helper = require('../helpers/helper');

const post = [
  { 
    id: 1, 
    titulo: "Ações para inserir mulheres na área de TI",
    conteudo: "Na Agenda 2020 da ONU se preocupam em inserir mulheres na área de TI após verificarem por meio de pesquisas que o quantitativo de mulheres no mercado de TI é cerca de 10%, ou seja, os homens predominam o mercado. Por causa disso ela pede ações para capacita-las e insetivar as empresas a contratarem mais mulheres ",
    etiqueta: ["Mulheres na Tecnologia", "Poderosas", "Empodere"], 
    dataCriacao: helper.novaData()
  },
  { 
    id: 2, 
    titulo: "Análise do tráfico e acidentes em Recife usando BI",
    conteudo: "A ONU definiu na Agenda de 2020 para promover e criar planos de ação para diminuir os acidentes no trânsito em todo mundo porque de acordo com a pesquisa divulgada os jovens são os que mais sofrem com os acidentes. Por isso a motivação em analisar os dados do tráfico e acidentes do Recife com as ferramentas Pentaho para divulgar os insigts para os tomadores de decisão analisar os dados tratados e agir para evitar tais acidentes.",
    etiqueta: ["BI", "Pentaho"], 
    dataCriacao: helper.novaData()
  }
  
];

module.exports = post;