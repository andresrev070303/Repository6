class Juego {
  constructor() {
    this.score = 0;
  }

  roll(pins) {
    this.score += pins;
  }
  getScore() {
    return this.score;
  }
}
export default Juego;