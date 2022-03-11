"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Necromancer extends Archetype_1.default {
    constructor() {
        super(...arguments);
        this._energyType = 'mana';
    }
    get energyType() { return this._energyType; }
    static createdArchetypeInstances() {
        this._counter += 1;
        return this._counter;
    }
}
Necromancer._counter = 0;
exports.default = Necromancer;
