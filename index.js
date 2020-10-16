const express = require('express');
const app = express();
const pesquisas = require('./pesquisasClinicas');

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// app.METHOD(PATH, HANDLER)
app.get('/pesquisas-clinicas', function(req, res) {
    res.send(pesquisas.getAll());
});

app.listen(8080, () => console.log("http://127.0.0.1:8080/"));