const express = require ('express');
const app = express();
const fs = require('fs');
const middleware = require('./log-middleware')

app.use(middleware);

app.get('/', (req, res) =>{
    fs.readFile('./views/index.html', 'UTF-8', (err, content) =>{
        if (err) res.status(500).send('Ocorreu um erro');
        res.send(content);
    });
    //res.send('Você chegou na minha aplicação!');
});


app.get('/contato', (req,res) =>{
    fs.readFile('./views/contato.html', 'UTF-8', (err, content) =>{
        if (err) res.status(500).send('Ocorreu um erro');
        res.send(content);
    });
});

app.get('/sobre', (req,res) =>{
    fs.readFile('./views/sobre.html', 'UTF-8', (err, content) =>{
        if (err) res.status(500).send('Ocorreu um erro');
        res.send(content);
    });
});


app.listen(3001, () =>{
    console.log('Voce está rodando a aplicação na porta 3001');
});
