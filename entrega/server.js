const app = require('./src/app');
const porta = 3000;

app.listen(porta, function(){
    console.log(`Menina, o nosso servidor tá rodando na porta ${porta}`)
})