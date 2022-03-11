import Fighter, { SimpleFighter } from '../Fighter';
import randomNumber from '../utils';
import Battle from './Battle';

class PVE extends Battle {
  constructor(player: Fighter, private monsterArray: SimpleFighter[]) {
    super(player);
  }

  private playerTurnAttack(): number | void {
    let target = randomNumber(0, this.monsterArray.length - 1);

    const enemiesDefeted: number[] = [];

    this.player.attack(this.monsterArray[target]);
    if (this.monsterArray[target].lifePoints === -1) {
      enemiesDefeted.push(target);

      if (enemiesDefeted.length === this.monsterArray.length) {
        return 1;
      }

      while (enemiesDefeted.includes(target)) {
        target = randomNumber(0, this.monsterArray.length - 1);
      }
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
    const result = 0;

    while (!result) {
      // Player's turn
      const resultsPlayerTurn = this.playerTurnAttack(); 

      if (resultsPlayerTurn) {
        return resultsPlayerTurn;
      }

      // Enemy's turn
      const resultsMonstersTurn = this.monstersTurnAttack();

      if (resultsMonstersTurn) {
        return resultsMonstersTurn;
      }
    }

    // Player won by enemy weariness
    return 1;
  }
}

export default PVE;
