const cloneCarSymbol = Symbol('cloneCar');

export default class Car {
  constructor(brand, motor, color) {
    // Store attributes in underscore attribute version
    this._brand = brand;
    this._motor = motor;
    this._color = color;

    // Create a unique symbol for the cloneCar method
    this[cloneCarSymbol] = function () {
      // Return a new object of the class with the same attributes
      return new Car(this._brand, this._motor, this._color);
    };
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  cloneCar() {
    return this[cloneCarSymbol]();
  }
}
