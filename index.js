const express = require('express');
const app = express();
const pesquisas = require('./pesquisasClinicas');

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// app.METHOD(PATH, HANDLER)
app.get('/pesquisas', function(req, res) {
    res.send(pesquisas.getAll());
});

app.get('/pesquisa/:index', function(req, res) {
    const indexData = req.params.index;
    res.send(pesquisas.getOne(indexData));
});

app.post('/pesquisa', function(req, res) {
    const data = req.body;

    if(!data) {
        res.sendStatus(400);
    }

    pesquisas.create(data);
    res.sendStatus(201);
});

app.put('/pesquisa/:index', function(req, res) {
    const data = req.body;
    const indexData = req.params.index;

    if(!data || !indexData) {
        res.sendStatus(400);
    }

    pesquisas.update(data, indexData);
    res.sendStatus(200);
});

app.delete('/pesquisa/:index', function(req, res) {
    const indexData = req.params.index;
    pesquisas.deleteObj(indexData);
    res.sendStatus(200);
});

app.listen(8080, () => console.log("http://127.0.0.1:8080/"));