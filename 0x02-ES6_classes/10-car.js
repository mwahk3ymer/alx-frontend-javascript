// Car.js
const cloneCarSymbol = Symbol('cloneCar');

/**
 * Class representing a Car.
 */
export default class Car {
  /**
   * Create a Car.
   * @param {string} brand - The brand of the car.
   * @param {string} motor - The motor type of the car.
   * @param {string} color - The color of the car.
   */
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

  /**
   * Get the brand of the car.
   * @returns {string} - The brand of the car.
   */
  get brand() {
    return this._brand;
  }

  /**
   * Get the motor type of the car.
   * @returns {string} - The motor type of the car.
   */
  get motor() {
    return this._motor;
  }

  /**
   * Get the color of the car.
   * @returns {string} - The color of the car.
   */
  get color() {
    return this._color;
  }

  /**
   * Clone the car and return a new object.
   * @returns {Car} - A new object of the Car class.
   */
  cloneCar() {
    return this[cloneCarSymbol]();
  }
}
