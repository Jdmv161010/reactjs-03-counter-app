import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas 08-imp-exp", () => {
  test("debe retornar un hero por id ", () => {
    const id = 2;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find((h) => h.id === id);

    expect(heroe).toEqual(heroeData);
  });

  test("debe retornar un undefined ", () => {
    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  test("debe retornar herores de DC ", () => {
    const owner = 'DC';   
    const heroe = getHeroesByOwner(owner);

    const heroesData = heroes.filter(h => h.owner === owner);
    expect(heroe).toEqual(heroesData);
  });

  test("debe retornar la cantidad de herores de Marvel ", () => {
    const owner = 'Marvel';   
    const heroe = getHeroesByOwner(owner);

    const heroesData = heroes.filter(h => h.owner === owner);
    expect(heroe.length).toBe(heroesData.length);
  });




});
