# On9-Accenture-S9-API-POST-DELETE

# Revisão 

Para uma interação eficaz entre clientes (aplicação) e servidores (computador), deve haver uma transferência eficiente de dados. É aqui que o HTTP se torna útil. Ele é projetado de forma a permitir que as informações sejam enviadas em um formato que possa ser entendido tanto pelo cliente quanto pelo servidor. O HTTP funciona como um protocolo de solicitação-resposta entre um navegador / aplicativo e um computador que hospeda um site. Chamar ou enviar várias solicitações HTTP pode ser feito usando vários métodos. A solicitação **POST** é uma delas.

# POST
O método HTTP POST envia dados ao servidor. O tipo do corpo da solicitação é indicado pelo cabeçalho Content-Type.
 
[Developer Mozila - POST](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods/POST)

# Content Type 

O cabeçalho Content-Type é utilizado para indicar o tipo de arquivo do recurso.
Em respostas, o Content-Type diz para o client qual é o tipo de conteúdo que a resposta, de fato, tem.

[Developer Mozila - Content Type](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers/Content-Type)

[Diferenças entre get e post](https://www.alura.com.br/artigos/diferencas-entre-get-e-post)

[Desmistificando o Protocolo HTTP para WEB](https://www.alura.com.br/artigos/desmistificando-o-protocolo-http-parte-1)


# DELETE

O método de requisição HTTP DELETE remove o recurso especificado.

# Ferramentas adicionais que vamos utilizar:

Desafio da semana:
Blog da Reprograma
Criaremos as API'S para as postagens no Blog da Reprograma.

Dados necessários:

Id: Integer / Números que serão incrementados a cada criação de um novo post.
Data da criação: Date / Data exata da criação do post.
Título: String / O nome do post.
Conteúdo: String / O conteúdo relacionado ao post.
Etiquetas(Tags): Array / Equitetas relacionadas ao post, por exemplo: "Artigo", "Mulheres na Tecnologia"
Utilizando os métodos HTTP, crie as seguintes API'S:

Criar um post
Ao criar o post, o id deverá ser incrementado automaticamente.
Deletar um post
Lembre-se de utilizar as boas práticas e documentar todas as rotas.

Bônus

Responda no README.md do seu projeto as perguntas abaixo:

# Motivação:
Criar uma API para aplicar o que aprendemos na semana 9 com os verbos HTTP: POST e DELETE. 
Fixar todo o conteúdo por meio dos exercícios.

# Arquitetura


# Ferramentas utilizadas
1. VS Code para codificar em JS e Json;
2. NPM para criar utilizar o Express, Nodemon e Cors na nossa API;
3. POSTMAN para realizar os testes do que implementamos.

Dicas de leitura
Como fizemos o nosso quadro e muitas pessoas compartilharam dicas legais, clique aqui e sinta-se a vontade para ler todas as dicas compartilhadas durante a aula.

Quadro de informações compartilhadas
Criamos um quadro onde tiramos as nossas dúvidas e compartilhamos links legais durante a aula. Clique aqui




