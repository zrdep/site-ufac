const {expect} = require("chai");
const calculadoraService = require("../src/services/CalculadoraService");

describe("Testes da CalculadoraService", () => {
    it("Deve dividir dois números", () => {
        const resultado = calculadoraService.dividir(10, 2);
        expect(resultado).to.equal(5);
    });

    it("Deve lançar um erro ao dividir por zero", () => {
        expect(() => calculadoraService.dividir(10, 0)).to.throw("Não é possível dividir por zero");
    });
})

modeue