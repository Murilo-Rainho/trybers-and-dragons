"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Archetype {
    constructor(_name) {
        this._name = _name;
        this._cost = 0;
        this._special = 0;
    }
    get cost() { return this._cost; }
    get name() { return this._name; }
    get special() { return this._special; }
    static createdArchetypeInstances() {
        throw new Error('Not implemented');
    }
}
exports.default = Archetype;
