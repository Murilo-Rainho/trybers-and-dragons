interface SimpleCharacter {
  lifePoints: number;
  strength: number;
  attack(enemy: SimpleCharacter): void;
  receiveDamage(attackPoints: number): void;
}

export default SimpleCharacter;
