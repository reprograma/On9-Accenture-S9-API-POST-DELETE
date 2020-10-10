const app = require("./src/app");
const porta = 3000;

app.listen(porta, () => {
    console.log("O seu servidor está rodando na http://localhost:" + porta);
});