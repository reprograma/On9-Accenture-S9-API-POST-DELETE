const postagens = [
    {
      id: 1, 
      dataCriacao: new Date().toString(),
      titulo: "Mulheres na Programação", 
      conteudo:"Presença das mulheres no mercado de trabalho na areá de TI",
      etiquetas:[ "mulheres","tecnologia","trabalho" ]
    },

    {   
      id: 2, 
      dataCriacao: new Date().toString(),
      titulo: "Sindrome da Impostora", 
      conteudo: "O porque das mulheres sempre se cobrarem muito",
      etiquetas: [ "mulheres","feminismo","saude mental" ]
     
    }
]    

module.exports = postagens;

