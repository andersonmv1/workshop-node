console.log("Inicio de execução");
const fs = require('fs');

fs.readFile('teste.txt', 'UTF-8', (err, content) => {
    if(err) console.log ('Aconteceu um erro'); //se indefinido, null, 0, false
    console.log(content);
});