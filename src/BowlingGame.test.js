import juego from "./BowlingGame.js";

describe("Jugar", () => {
  it("deberia devolver  la funcion juego", () => {
    expect(juego()).toEqual(0);
  });
});