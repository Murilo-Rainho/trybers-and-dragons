"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Dwarf extends Race_1.default {
    constructor() {
        super(...arguments);
        this._maxLifePoints = 80;
    }
    static createdRacesInstances() {
        this._counter += 1;
        return this._counter;
    }
    get maxLifePoints() { return this._maxLifePoints; }
}
Dwarf._counter = 0;
exports.default = Dwarf;
