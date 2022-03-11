import Energy from './Energy';
import Fighter from './Fighter';

import Archetype, { Mage } from './Archetypes';
import Race, { Elf } from './Races';

import randomNumber from './utils';

class Character implements Fighter {
  private _archetype: Archetype;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _lifePoints: number;
  private _maxLifePoints: number;
  private _race: Race;
  private _strength: number;

  constructor(
    private _name: string,
    race: Race = new Elf(_name, 13),
    archetype: Archetype = new Mage(_name),
  ) {
    this._race = race;
    this._archetype = archetype;
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = randomNumber(1, 10);
    this._defense = randomNumber(1, 10);
    this._dexterity = this._race.dexterity;
    this._energy = {
      type_: this._archetype.energyType,
      amount: randomNumber(1, 10),
    };
  }

  get archetype(): Archetype { return this._archetype; }

  get defense(): number { return this._defense; }

  get dexterity(): number { return this._dexterity; }

  get energy(): Energy {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  get lifePoints(): number { return this._lifePoints; }

  get maxLifePoints(): number { return this._maxLifePoints; }

  get name(): string { return this._name; }

  get race(): Race { return this._race; }

  get strength(): number { return this._strength; }
  
  attack(enemy: Fighter): void {
    enemy.receiveDamage(this.strength);
  }

  levelUp(): void {
    this.updateMaxLifePoints(randomNumber(1, 10));

    this._strength += randomNumber(1, 10);
    this._dexterity += randomNumber(1, 10);
    this._defense += randomNumber(1, 10);

    this._energy.amount = 10;

    this._lifePoints = this._maxLifePoints;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;

    if (damage > 0) {
      this._lifePoints -= damage;
    }

    if (this.lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return this.lifePoints;
  }

  special(): string {
    const action = ['wear', 'throw', 'attack with'];
    const weapon = ['banana peel', 'paper sword', 'dignity', 'boot'];

    const startSuperAttack = `${this.name} prepares for his fatal blow. He `;
    const continuingSuperAttack = `picks up his ${action[randomNumber(0, 2)]} `;
    const finishingSuperAttack = `and ${weapon[randomNumber(0, 3)]} it`;

    return `${startSuperAttack}${continuingSuperAttack}${finishingSuperAttack}`;
  }

  private updateMaxLifePoints(newMaxLifePoints: number): void {
    const newLife = this._maxLifePoints + newMaxLifePoints;

    if (newLife > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    } else {
      this._maxLifePoints = newLife;
    }
  }
}

export default Character;
