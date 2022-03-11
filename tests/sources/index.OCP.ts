import { runBattles, pve, pvp, player1, player2, player3, monster1, monster2 } from '../../src';
import Battle from '../../src/Battle';
import Fighter from '../../src/Fighter';

class B extends Battle { }
class F implements Fighter {
  constructor(
    public lifePoints = 10,
    public strength = 10,
    public defense = 10,
  ) { }
  levelUp(): void { }
  special(enemy: Fighter): void { }
  attack(enemy: Fighter): void { }
  receiveDamage(amount: number): void { }
}
const b = new B(new F());

const result = () => {
  console.log('linha 20');
  runBattles([pve, pvp, b]);
  console.log('linha 22');
  let res = true;
  console.log('linha 24');
  if (player1.lifePoints !== -1) {
    console.log('linha 26');
    if (monster1.lifePoints !== -1 && monster2.lifePoints !== -1) res = false;
    console.log('linha 28');
  }
  if (player2.lifePoints !== -1 && player3.lifePoints !== -1) res = false;
  console.log('linha 31');
  return res;
};
