import Archetype from './Archetype';

import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private static _counter = 0;
  private _energyType: EnergyType = 'mana';

  get energyType(): EnergyType { return this._energyType; }

  static createdArchetypeInstances(): number {
    this._counter += 1;
    return this._counter;
  }
}

export default Necromancer;
