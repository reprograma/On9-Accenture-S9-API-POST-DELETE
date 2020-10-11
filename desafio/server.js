const app = require('./src/app');
const porta = 5050;

app.listen(porta, () =>{
    console.log(`O servidor está rodando http://localhost:${porta}`)
});