import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(player: Fighter, private enemyPlayer: Fighter) {
    super(player);
  }

  fight(): number {
    let result = 0;

    while (!result) {
      // Player's turn
      this.player.attack(this.enemyPlayer);
      if (this.enemyPlayer.lifePoints === -1) {
        result = 1;
      }

      // EnemyPlayer's turn
      this.enemyPlayer.attack(this.player);
      if (this.player.lifePoints === -1) {
        result = -1;
      }
    }

    return result;
  }
}

export default PVP;
