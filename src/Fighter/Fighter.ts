import Energy from '../Energy';
import SimpleCharacter from './SimpleFighter';

interface Fighter extends SimpleCharacter {
  defense: number;
  energy?: Energy;
  special(enemy: Fighter): void;
  levelUp(): void;
}

export default Fighter;
