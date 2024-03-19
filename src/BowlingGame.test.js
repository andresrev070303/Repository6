import Juego from "./BowlingGame.js";

describe("Jugar", () => {
  it("deberia devolver  la funcion juego", () => {
    const juego = new Juego();
    for (let i = 0; i < 20; i++) {
      juego.roll(0);
    }
    expect(juego.score()).toBe(0);
  });
});