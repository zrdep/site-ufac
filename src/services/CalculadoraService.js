const calculadora = require("../models/Calculadora");

function dividir(a, b) {
    if (b === 0) {
        throw new Error("Não é possível dividir por zero");
    }
    return calculadora.dividir(a, b);
}

module.exports = {
    dividir
};