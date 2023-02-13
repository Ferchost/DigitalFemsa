const { default: formatDate } = require("../function/formatDate");

describe('pasa el formato de fecha a palabras', ()=>{
    describe('fecha a palabras', ()=>{
        test('se queda como texto', ()=>{
            const result = formatDate("2022-12-08T20:32:14.169Z");
            expect(typeof result).toBe('string')
        })
        test('da nuevo formato', ()=>{
            expect(formatDate("2022-12-08T20:32:14.169Z")).toBe('8 de diciembre de 2022')
        })
    })
})