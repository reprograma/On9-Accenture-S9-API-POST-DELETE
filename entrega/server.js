const app = require('./src/app');
const porta = 8080;

app.listen(porta, () => {
    console.log("O servidor está rodando na porta " + porta)
});