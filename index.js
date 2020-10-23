const express = require('express');
const app = express();
const mongoose = require('mongoose');

// DataBase
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/AjudeUmaPesquisa', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB conectado'))
.catch((error) => console.log(error))

// Models
const Pesquisa = require('./models/pesquisasClinicas');

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// app.METHOD(PATH, HANDLER)
app.get('/pesquisas', function(req, res) {
    Pesquisa.find()
    .then((pesquisas) => res.send(pesquisas))
    .catch(() => res.sendStatus(400))
});

app.get('/pesquisa/:index', function(req, res) {
    const indexData = req.params.index;
    
    Pesquisa.findById(indexData)
    .then((pesquisa) => res.send(pesquisa))
    .catch(() => res.sendStatus(400))
});

app.post('/pesquisa', function(req, res) {
    const data = req.body;

    if(!data) {
        res.sendStatus(400);
    }

    new Pesquisa(data).save()
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(400))
});

app.put('/pesquisa/:index', function(req, res) {
    const data = req.body;
    const indexData = req.params.index;

    if(!data || !indexData) {
        res.sendStatus(400);
    }

    Pesquisa.findByIdAndUpdate(indexData, data)
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(400))
});

app.delete('/pesquisa/:index', function(req, res) {
    const indexData = req.params.index;
    
    Pesquisa.findByIdAndRemove(indexData)
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(400))
});

// Server
app.listen(8080, () => console.log("http://127.0.0.1:8080/"));