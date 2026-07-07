const { expect } = require("chai");
const { somar } = require("../src/models/Calculadora");
const { subtrair } = require("../src/models/Calculadora");
const { dividir } = require("../src/models/Calculadora");

describe ("Testes da Calculadora", () => {
    it ("Deve somar dois números", () => {
        const resultado = somar(2, 6);
        expect(resultado).to.equal(8);
    });

    it ("Deve subtrair dois números", () => {
        const resultado = subtrair(10, 5);
        expect(resultado).to.equal(5);
    })

    it ("Deve dividir dois números", () => {
        const resultado = dividir(10, 2);
        expect(resultado).to.equal(5);
    })
})
