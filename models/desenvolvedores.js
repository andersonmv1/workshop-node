//const mongoose = require("mongoose"),
    //Schema = mongoose.Schema;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var desenvolvedorSchema = new Schema({
    nome: String,
    email: String,
    indice: Number
});

module.exports = mongoose.model('Desenvolverdores', desenvolvedorSchema);
