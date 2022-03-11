"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warrior = exports.Ranger = exports.Necromancer = exports.Mage = void 0;
const Archetype_1 = require("./Archetype");
var Mage_1 = require("./Mage");
Object.defineProperty(exports, "Mage", { enumerable: true, get: function () { return Mage_1.default; } });
var Necromancer_1 = require("./Necromancer");
Object.defineProperty(exports, "Necromancer", { enumerable: true, get: function () { return Necromancer_1.default; } });
var Ranger_1 = require("./Ranger");
Object.defineProperty(exports, "Ranger", { enumerable: true, get: function () { return Ranger_1.default; } });
var Warrior_1 = require("./Warrior");
Object.defineProperty(exports, "Warrior", { enumerable: true, get: function () { return Warrior_1.default; } });
exports.default = Archetype_1.default;
