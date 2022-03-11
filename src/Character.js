"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetypes_1 = require("./Archetypes");
const Races_1 = require("./Races");
const utils_1 = require("./utils");
class Character {
    constructor(_name, race = new Races_1.Elf(_name, 13), archetype = new Archetypes_1.Mage(_name)) {
        this._name = _name;
        this._race = race;
        this._archetype = archetype;
        this._maxLifePoints = this._race.maxLifePoints / 2;
        this._lifePoints = this._maxLifePoints;
        this._strength = (0, utils_1.default)(1, 10);
        this._defense = (0, utils_1.default)(1, 10);
        this._dexterity = this._race.dexterity;
        this._energy = {
            type_: this._archetype.energyType,
            amount: (0, utils_1.default)(1, 10),
        };
    }
    get archetype() { return this._archetype; }
    get defense() { return this._defense; }
    get dexterity() { return this._dexterity; }
    get energy() {
        return {
            type_: this._energy.type_,
            amount: this._energy.amount,
        };
    }
    get lifePoints() { return this._lifePoints; }
    get maxLifePoints() { return this._maxLifePoints; }
    get name() { return this._name; }
    get race() { return this._race; }
    get strength() { return this._strength; }
    attack(enemy) {
        enemy.receiveDamage(this.strength);
    }
    levelUp() {
        this.updateMaxLifePoints((0, utils_1.default)(1, 10));
        this._strength += (0, utils_1.default)(1, 10);
        this._dexterity += (0, utils_1.default)(1, 10);
        this._defense += (0, utils_1.default)(1, 10);
        this._energy.amount = 10;
        this._lifePoints = this.maxLifePoints;
    }
    receiveDamage(attackPoints) {
        const damage = attackPoints - this.defense;
        if (damage > 0) {
            this._lifePoints -= damage;
        }
        if (this.lifePoints <= 0) {
            this._lifePoints = -1;
        }
        return this.lifePoints;
    }
    special() {
        const action = ['wear', 'throw', 'attack with'];
        const weapon = ['banana peel', 'paper sword', 'dignity', 'boot'];
        const startSuperAttack = `${this.name} prepares for his fatal blow. He `;
        const continuingSuperAttack = `picks up his ${action[(0, utils_1.default)(0, 2)]} `;
        const finishingSuperAttack = `and ${weapon[(0, utils_1.default)(0, 3)]} it`;
        return `${startSuperAttack}${continuingSuperAttack}${finishingSuperAttack}`;
    }
    updateMaxLifePoints(newMaxLifePoints) {
        const newLife = this.maxLifePoints + newMaxLifePoints;
        if (newLife > this._race.maxLifePoints) {
            this._maxLifePoints = this.race.maxLifePoints;
        }
        else {
            this._maxLifePoints = newLife;
        }
    }
}
exports.default = Character;
