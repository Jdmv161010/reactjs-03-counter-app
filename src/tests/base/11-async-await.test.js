import { getImagen } from "../../base/11-async-await"

describe('Pruebas 11-async-await', () => {
    test('retorna url', async () => {
        const url = await getImagen();
        expect(typeof url).toBe('string');
    })
    
})
