const helper = require("../helpers/helpers");

const postagem = [
    {
     id: 1, 
     dataCriacao: helper.newDate(), 
     titulo: "Mulheres e o mercado da tecnologia", 
     conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tortor nisl, vestibulum at tincidunt eget, pretium ac dui. Aenean nibh est, facilisis nec diam vel, venenatis sagittis enim. Morbi eleifend varius efficitur. Etiam nec lorem nisi. Nam sagittis, sem non euismod consectetur, neque libero viverra nisi, lobortis sagittis nisl metus ut tellus. Fusce eget efficitur ipsum. Ut dictum ante non mollis faucibus. Pellentesque dictum eu augue sit amet pharetra.",
     etiquetas: ["Mulheres na TI", "Mercado TI", "Tecnologia", "Mulheres"]
    },
    {
     id: 2,  
     dataCriacao: helper.newDate(), 
     titulo: "O que é sororidade?", 
     conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tortor nisl, vestibulum at tincidunt eget, pretium ac dui. Aenean nibh est, facilisis nec diam vel, venenatis sagittis enim. Morbi eleifend varius efficitur. Etiam nec lorem nisi. Nam sagittis, sem non euismod consectetur, neque libero viverra nisi, lobortis sagittis nisl metus ut tellus. Fusce eget efficitur ipsum. Ut dictum ante non mollis faucibus. Pellentesque dictum eu augue sit amet pharetra.",
     etiquetas: ["Sororidade", "Empatia", "Mulheres"]
    }
 ];
 
 module.exports = postagem;