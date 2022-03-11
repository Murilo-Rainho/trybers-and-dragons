import { Ranger, Warrior } from './Archetypes';
import Battle, { PVE, PVP } from './Battle';

import Character from './Character';

import Dragon from './Dragon';

import Monster from './Monster';

import { Dwarf, Elf } from './Races';

const player1 = new Character(
  'Gandalf',
  new Elf('Gandalf', 35),
  new Ranger('Gandalf'),
);

const player2 = new Character(
  'Legolas',
  new Elf('Legolas', 13),
  new Ranger('Legolas'),
);

const player3 = new Character(
  'Gimli',
  new Dwarf('Gimli', 20),
  new Warrior('Gimli'),
);

player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);

const pve = new PVE(player1, [monster1, monster2]);

const runBattles = (battlesArray: Battle[]) => {
  battlesArray.forEach((battle) => {
    battle.fight();
  });
};

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};
