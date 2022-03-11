"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVP extends Battle_1.default {
    constructor(player, enemyPlayer) {
        super(player);
        this.enemyPlayer = enemyPlayer;
    }
    fight() {
        const result = 0;
        while (!result) {
            // Player's turn
            this.player.attack(this.enemyPlayer);
            if (this.enemyPlayer.lifePoints === -1) {
                return 1;
            }
            // EnemyPlayer's turn
            this.enemyPlayer.attack(this.player);
            if (this.player.lifePoints === -1) {
                return -1;
            }
        }
        // Player won by enemy weariness
        return 1;
    }
}
exports.default = PVP;
