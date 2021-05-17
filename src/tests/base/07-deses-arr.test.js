import { retornaArreglo } from "../../base/07-deses-arr"

describe('Pruebas en desestructuracion', () => {
    test('retorna un arreglo', () => {
        const [letras, numeros] = retornaArreglo();
        expect(letras).toBe('ABC');
    })
    
})
