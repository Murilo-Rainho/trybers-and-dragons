"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Warrior extends Archetype_1.default {
    constructor() {
        super(...arguments);
        this._energyType = 'stamina';
    }
    get energyType() { return this._energyType; }
    static createdArchetypeInstances() {
        this._counter += 1;
        return this._counter;
    }
}
Warrior._counter = 0;
exports.default = Warrior;
