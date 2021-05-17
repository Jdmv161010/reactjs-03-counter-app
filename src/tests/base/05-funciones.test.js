import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("Prueba en 05-funciones", () => {
  test("Debe retornar un objeto", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(user).toEqual(userTest);

    console.log(userTest);
  });

  test("Debe retornar un objeto con el nombre como valor", () => {
    const nombre = "juan";

    const userTest = {
      uid: "ABC123",
      username: nombre,
    };

    const user = getUsuarioActivo(nombre);

    expect(user).toEqual(userTest);

    console.log(userTest);
  });
});
