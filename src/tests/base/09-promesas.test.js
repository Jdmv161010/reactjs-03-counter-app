import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe("pruebas asincronas", () => {
  test("Prueba 09-promesas", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => expect(heroe).toBe(heroes[0]));
    done();
    //return expect(getHeroeByIdAsync(id)).resolves.toBe(heroes[0]);
  });

  test("Prueba 09-promesas error", () => {
    const id = 10;
    //getHeroeByIdAsync(id).then((heroe) => expect(heroe).toBe(heroes[0]));
    return expect(getHeroeByIdAsync(id)).rejects.toBe('No se pudo encontrar el héroe');
  });
});
