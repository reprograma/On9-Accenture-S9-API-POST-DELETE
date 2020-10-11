const postagemModel = [
    { 
    id: 1, 
    dataCriacao: new Date(),
    titulo: "Principais métodos HTTP: quais são e para que servem",
    conteúdo: "GET: Essa é a requisição mais comum de todas. Através dessa requisição nós pedimos a representação de um recurso: que pode ser um arquivo html, xml, json, etc. POST: O método POST é utilizado quando queremos criar um recurso. Quando usamos POST, os dados vão no corpo da requisição e não na URI. PUT: Requisita que um recurso seja guardado na URI fornecida. Se o recurso já existir, ele deve ser atualizado. Se não existir, pode ser criado. DELETE: Exclui o recurso especificado. ",
    Tags: [
        "Métodos HTTP",
        "GET",
        "POST",
        "DELETE",
        "PUT"
    ], 
    
    },
    { 
        id: 2, 
        dataCriacao: new Date(),
        titulo: "Cliente-servidor",
        conteúdo: "O conceito de cliente-servidor refere-se a um modelo de comunicação que vincula vários dispositivos informáticos através de uma rede. O cliente, nesse contexto, faz solicitações de serviços ao servidor, responsável por atender a esses requisitos. Com essa arquitetura, as tarefas são distribuídas entre os servidores (que fornecem os serviços) e os clientes (que exigem esses serviços). Por outras palavras: o cliente solicita ao servidor um recurso, que fornece uma resposta.",
        Tags: [
            "Cliente-servidor",
            "Client",
            "Server",
            "Comunicação",
            "Redes"
        ], 
    }
]

module.exports = postagemModel