import Race from './Race';

class Halfling extends Race {
  private static _counter = 0;
  private _maxLifePoints = 60;

  static createdRacesInstances(): number {
    this._counter += 1;
    return this._counter;
  }

  get maxLifePoints(): number { return this._maxLifePoints; }
}

export default Halfling;
