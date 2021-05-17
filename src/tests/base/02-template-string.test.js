import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string', () => {
    test('Prueba en metodo getSaludo', () => {
        const nombre = 'Juan';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola '+ nombre);
    })
    
    test('Prueba en metodo getSaludo por defecto', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola carlos');
    })
    
})
