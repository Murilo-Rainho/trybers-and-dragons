import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(player: Fighter, private monsterArray: SimpleFighter[]) {
    super(player);
  }

  private playerTurnAttack(): number | void {
    let result;

    this.monsterArray.forEach((monster) => {
      this.player.attack(monster);
      if (monster.lifePoints === -1) {
        result = 1;
      }
    });

    return result;
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
      const resultsPlayerTurn = this.playerTurnAttack(); 

      if (resultsPlayerTurn === 1) {
        result = resultsPlayerTurn;
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
