"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PVE = exports.PVP = void 0;
const Battle_1 = require("./Battle");
var PVP_1 = require("./PVP");
Object.defineProperty(exports, "PVP", { enumerable: true, get: function () { return PVP_1.default; } });
var PVE_1 = require("./PVE");
Object.defineProperty(exports, "PVE", { enumerable: true, get: function () { return PVE_1.default; } });
exports.default = Battle_1.default;
