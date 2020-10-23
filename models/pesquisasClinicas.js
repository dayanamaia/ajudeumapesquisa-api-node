const mongoose = require('mongoose');
const PesquisaSchema = new mongoose.Schema({
    status: {
        type: String,
        required: true
    },
    imgCover: {
        type: String
    },
    dataInicio: {
        type: String
    },
    dataTermino: {
        type: String
    },
    protocolo: {
        type: String,
        required: true
    },
    idadeMinima: {
        type: Number,
        required: true
    },
    idadeMaxima: {
        type: Number,
        required: true
    },
    totalAmostra: {
        type: Number,
        required: true
    },
    link: {
        type: String
    },
    dataCriado: {
        type: Date,
        default: Date.now
    },
    slug: {
        type: String
    },
    criteriosAceite: {
        type: [String]
    },
    criteriosExclusao: {
        type: [String]
    },
    etapas: {
        type: [String]
    },
    condicoesSaude: {
        type: [String]
    },
    categorias: {
        type: [String]
    },
    endereco: [
        {
            cep: String,
            logradouro: String,
            numero: String,
            complemento: String,
            bairro: String,
            estado: String,
            cidade: String
        }
    ]
});

mongoose.model('pesquisas', PesquisaSchema);
module.exports = mongoose.model('pesquisas');