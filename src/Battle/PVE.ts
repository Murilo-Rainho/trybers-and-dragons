import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private target = 0;

  constructor(player: Fighter, private monsterArray: SimpleFighter[]) {
    super(player);
  }

  private playerTurnAttack(): void {
    // Now, to be more like a real RPG, the player does not attack all monsters
    // in one turn. It will attack the first monster, until it dies and the
    // second becomes first.
    this.player.attack(this.monsterArray[this.target]);

    if (this.monsterArray[this.target].lifePoints === -1) {
      this.target += 1;
    }
  }

  private monstersTurnAttack(): number | void {
    let resultsMonstersTurn = 0;

    this.monsterArray.forEach((monster) => {
      monster.attack(this.player);

      if (this.player.lifePoints === -1) {
        resultsMonstersTurn = -1;
      }
    });

    if (resultsMonstersTurn) {
      return resultsMonstersTurn;
    }
  }

  fight(): number {
    let result = 0;

    setTimeout(() => {
      // Player won by opponent's resignation
      result = 1;
    }, 10000);

    while (result === 0) {
      // Player's turn
      this.playerTurnAttack(); 

      if (this.target === this.monsterArray.length) {
        result = 1;
      }

      // Enemy's turn
      const resultsMonstersTurn = this.monstersTurnAttack();

      if (resultsMonstersTurn === -1) {
        result = resultsMonstersTurn;
      }
    }

    return result;
  }
}

export default PVE;
