export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  set size(value) {
    if (typeof value !== 'number') {
      throw new Error('Size must be a number');
    }
    this._size = value;
  }

  set location(value) {
    if (typeof value !== 'string') {
      throw new Error('Location must be a number');
    }
    this._location = value;
  }

  [Symbol.toPrimitive](type) {
    let toNewType;
    if (type === 'string') {
      toNewType = this.location;
    } else if (type === 'number') {
      toNewType = this.size;
    }
    return toNewType;
  }
}
