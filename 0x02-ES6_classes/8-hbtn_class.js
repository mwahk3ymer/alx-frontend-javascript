// 8-hbtn_class.js

/**
 * Class representing a Holberton Class.
 */
export default class HolbertonClass {
  /**
   * Create a Holberton Class.
   * @param {number} size - The size of the class.
   * @param {string} location - The location of the class.
   */
  constructor(size, location) {
    // Store attributes in underscore attribute version
    this._size = size;
    this._location = location;
  }

  /**
   * Get the size of the class.
   * @returns {number} - The size of the class.
   */
  get size() {
    return this._size;
  }

  /**
   * Get the location of the class.
   * @returns {string} - The location of the class.
   */
  get location() {
    return this._location;
  }

  /**
   * Cast the class into a Number.
   * @returns {number} - The size of the class.
   */
  valueOf() {
    return this._size;
  }

  /**
   * Cast the class into a String.
   * @returns {string} - The location of the class.
   */
  toString() {
    return this._location;
  }
}
