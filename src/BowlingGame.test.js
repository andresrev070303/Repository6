import Juego from "./BowlingGame.js";

describe("Jugar", () => {
  let juego;
  beforeEach(() => {
    juego = new Juego();
  });
  const rollMany = (n, pins) => {
    for (let i = 0; i < n; i++) {
      juego.roll(pins);
    }
  }
  it("deberia devolver 0 de la funcion juego", () => {
    rollMany(20, 0);
    expect(juego.getScore()).toBe(0);
  });
  it("deberia devolver 20 de la funcion juego", () => {
    rollMany(20, 1);
    expect(juego.getScore()).toBe(20);
  });
});