import { EnergyType } from '../Energy';

abstract class Archetype {
  private _name: string;
  private _special: number;
  private _cost: number;

  constructor(name: string) {
    this._cost = 0;
    this._name = name;
    this._special = 0;
  }

  abstract get cost(): string;
  
  abstract get name(): string;
  
  abstract get special(): string;

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}

export default Archetype;
