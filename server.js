const app = require('./src/app');
const porta = 5000; 

app.listen(porta, ()=>{
  console.log(`O servidor está rodando http://localhost:${porta}`)
});
