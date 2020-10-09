const app = require('./src/app');

const porta = 8080;

app.listen(porta, function() {
    console.log("server on")
})