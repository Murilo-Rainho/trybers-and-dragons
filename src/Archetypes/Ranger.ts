import Archetype from './Archetype';

import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private static _counter = 0;
  private _energyType: EnergyType = 'stamina';

  get energyType(): EnergyType { return this._energyType; }

  static createdArchetypeInstances(): number {
    this._counter += 1;
    return this._counter;
  }
}

export default Ranger;
