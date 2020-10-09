const app = require('./src/app')
const porta = 3000

app.listen(porta, () => {
    console.log("Servidor rodando na porta " + porta);
})
