const calculadora = require("../models/calculadora.js")

describe("Testes unitártios:", () => {
  test("Somar 2 + 2 deve ser 4", () => {
    const resultado = calculadora.somar(2,2)
    expect(resultado).toBe(4)
  })

  test("Somar 5 + 100 deve ser 105", () => {
    const resultado = calculadora.somar(5,100)
    expect(resultado).toBe(105)
  })

  test("Numero1 igual a 'banana' + 100 deve retornar 'Error'", ()=> {
    const resultado = calculadora.somar('banana', 100)
    expect (resultado).toBe ('Error')
  })

  test("100 + 'banana' deve retornar 'Error'", ()=> {
    const resultado = calculadora.somar(100, 'banana')
    expect (resultado).toBe ('Error')
  })

  test("entrada vazia em ambos os argumentos deve retornar 'Error'", ()=> {
    const resultado = calculadora.somar()
    expect (resultado).toBe ('Error')
  })
})
