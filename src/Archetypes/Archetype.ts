import { EnergyType } from '../Energy';

abstract class Archetype {
  private _special: number;
  private _cost: number;

  constructor(private _name: string) {
    this._cost = 0;
    this._special = 0;
  }

  get cost(): number { return this._cost; }
  
  get name(): string { return this._name; }
  
  get special(): number { return this._special; }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}

export default Archetype;
