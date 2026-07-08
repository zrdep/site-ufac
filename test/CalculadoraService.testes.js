const {expect} = require("chai");
const {dividir} = require("../src/services/CalculadoraService");
const sinon = require("sinon");
const calculadora = require("../src/models/Calculadora");

describe("Testes da CalculadoraService", () => {
    afterEach(() => {
        sinon.restore();
    });

    it("Deve dividir dois números", () => {
        const stub = sinon.stub(calculadora, "dividir").returns(5);

        const resultado = dividir(10, 2);

        sinon.assert.calledOnce(stub);
        sinon.assert.calledWith(stub, 10, 2);
        expect(resultado).to.equal(5);
    });

    it("Deve lançar um erro ao dividir por zero", () => {
        const stub = sinon.stub(calculadora, "dividir");

        expect(() => dividir(10, 0)).to.throw("Não é possível dividir por zero");
        sinon.assert.notCalled(stub);
    });
})