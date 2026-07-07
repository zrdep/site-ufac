const request = require("supertest");
const app = require("../src/app");
const { expect } = require("chai");

describe("Testes da CalculadoraController", () => {
    it("Deve dividir dois números", async () => {
        const response = await request(app)
            .post("/calculadora/dividir")
            .send({ a: 10, b: 2 });
        expect(response.status).to.equal(200);
        expect(response.body.resultado).to.equal(5);
    });
})
