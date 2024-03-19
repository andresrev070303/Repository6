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
    expect(juego.score()).toBe(0);
  });
  it("deberia devolver 20 de la funcion juego", () => {
    rollMany(20, 1);
    expect(juego.score()).toBe(20);
  });
  it("deberia devolver el caso especial de 1 spare", () => {
    juego.roll(5);
    juego.roll(5);
    juego.roll(3);
    rollMany(17, 0);
    expect(juego.score()).toBe(16);
  });
}); 