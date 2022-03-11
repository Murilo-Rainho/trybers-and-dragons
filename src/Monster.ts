import SimpleCharacter from './Fighter/SimpleFighter';

class Monster implements SimpleCharacter {
  protected _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number { return this._lifePoints; }

  get strength(): number { return this._strength; }

  receiveDamage(attackPoints: number): number {
    this._lifePoints -= attackPoints;

    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return this.lifePoints;
  }

  attack(enemy: SimpleCharacter) {
    enemy.receiveDamage(this.strength);
  }
}

export default Monster;
