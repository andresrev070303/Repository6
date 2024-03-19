class Juego {
  constructor() {
    this.rolls = new Array(21).fill(0);
    this.currentRoll = 0;
  }

  roll(pins) {
    this.rolls[this.currentRoll++] = pins;
  }
  score() {
    let score = 0;
    let i = 0;
    for (let frame = 0; frame < 10; frame++) {
      if (this.rolls[i] + this.rolls[i + 1] === 10) {
        score += 10 + this.rolls[i + 2];
        i += 2;
      } else {
        score += this.rolls[i] + this.rolls[i + 1];
        i += 2;
      }
    }
    return score;
  }

}
export default Juego;