"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const Battle_1 = require("./Battle");
class PVE extends Battle_1.default {
    constructor(player, monsterArray) {
        super(player);
        this.monsterArray = monsterArray;
    }
    playerTurnAttack() {
        let target = (0, utils_1.default)(0, this.monsterArray.length - 1);
        const enemiesDefeted = [];
        this.player.attack(this.monsterArray[target]);
        if (this.monsterArray[target].lifePoints === -1) {
            enemiesDefeted.push(target);
            if (enemiesDefeted.length === this.monsterArray.length) {
                return 1;
            }
            while (enemiesDefeted.includes(target)) {
                target = (0, utils_1.default)(0, this.monsterArray.length - 1);
            }
        }
    }
    monstersTurnAttack() {
        let resultsMonstersTurn = 0;
        this.monsterArray.forEach((monster) => {
            monster.attack(this.player);
            if (this.player.lifePoints === -1) {
                resultsMonstersTurn = -1;
            }
        });
        if (resultsMonstersTurn) {
            return resultsMonstersTurn;
        }
    }
    fight() {
        const result = 0;
        while (!result) {
            // Player's turn
            const resultsPlayerTurn = this.playerTurnAttack();
            if (resultsPlayerTurn) {
                return resultsPlayerTurn;
            }
            // Enemy's turn
            const resultsMonstersTurn = this.monstersTurnAttack();
            if (resultsMonstersTurn) {
                return resultsMonstersTurn;
            }
        }
        // Player won by enemy weariness
        return 1;
    }
}
exports.default = PVE;
