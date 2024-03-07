// EVCar.js
import Car from "./10-car";

export default class EVCar extends Car {
  /**
   * Create an Electric Vehicle (EV) Car.
   * @param {string} brand - The brand of the car.
   * @param {string} motor - The motor type of the car.
   * @param {string} color - The color of the car.
   * @param {string} range - The range of the electric car.
   */
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  /**
   * Get the range of the electric car.
   * @returns {string} - The range of the electric car.
   */
  get range() {
    return this._range;
  }

  /**
   * Clone the electric car and return a new instance of Car.
   * @returns {Car} - A new instance of Car.
   */
  cloneCar() {
    const Species = super.constructor[Symbol.species];
    return new Species(this._brand, this._motor, this._color);
  }
}
