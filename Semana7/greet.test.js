const greet = require("./greet")

describe("Prueba de funcionalidades funcion greet", () => {
    test ("Debe devolver un Hello, pedro", () => {
        expect(greet("pedro")).toBe("Hello, pedro");
    })
    test ("Debe devolver un Hello There, nombre nulo", () => {
        expect(greet()).toBe("Hello There!");
    })
    test ("Debe devolver un Hello There, nombre vacio", () => {
        expect(greet("")).toBe("Hello There!");
    })
    test ("Debe devolver un HELLO PEDRO", () => {
        expect(greet("PEDRO")).toBe("HELLO PEDRO");
    })
    test ("Debe devolver un Hello, pedro, diego", () => {
        expect(greet(["pedro","diego"])).toBe("Hello, pedro, diego");
    })
    test ("Debe devolver un Hello, pedro,", () => {
        expect(greet(["pedro"])).toBe("Hello, pedro");
    })
    test ("Debe devolver un Hello, pedro, diego", () => {
        expect(greet(["pedro","diego","natalia"])).toBe("Hello, pedro, diego, natalia");
    })
})

// const suma = require("./suma");
// const resta = require("./resta");
// const multiplicacion = require("./multiplicacion");
// const division = require("./division");
// describe("Realiza suma de 2 numeros", () => {
//     it ("Deberia sumar 2 numeros", () => {
//         expect(suma(1,2)).toBe(3);
//     })
// })
// describe ("Realizar resta de 2 numeros", ()=> {
//     it ("Deberia restar 2 numeros", () => {
//         expect(resta(5,2).toBe(3));
//     })
// })
// describe ("Realizar multiplicacion de 2 numeros", ()=> {
//     it ("Deberia multiplicar 2 numeros", () => {
//         expect(multiplicacion(5,2).toBe(10));
//     })
// })
// describe ("Realizar division de 2 numeros", ()=> {
//     it ("Deberia dividir 2 numeros", () => {
//         expect(division(15,3).toBe(5));
//     })
// })