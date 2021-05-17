
describe('Pruebas en el archivo demo.test.js', () => {
    test('Strings iguales', () => {
        //1.inicializacion
        const mensaje = 'hola mundo';
        //2.estimulo
        const mensaje2 = `hola mundo`;
        //3.observar el comportamiento
        expect(mensaje).toBe(mensaje2);
    })
    
})



