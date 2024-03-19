class Juego {
  constructor() {
    this.score = 0;
    this.rolls = [];
    this.currentRoll = 0;
  }

  roll(pins) {
    this.score += pins;
    this.rolls[this.currentRoll++] = pins;
  }
  getScore() {
    this.score = 0;
    for (let i = 0; i < this.rolls.length; i++) {
      if(this.rolls[i] + this.rolls[i + 1] === 10) {
        this.score += this.rolls[i];
      }
      this.score += this.rolls[i];
    }
    return this.score;
  }
}
export default Juego;