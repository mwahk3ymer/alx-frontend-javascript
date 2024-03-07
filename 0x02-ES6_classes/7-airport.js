// 7-airport.js

/**
 * Class representing an Airport.
 */
export default class Airport {
  /**
   * Create an Airport.
   * @param {string} name - The name of the airport.
   * @param {string} code - The code of the airport.
   */
  constructor(name, code) {
    // Store attributes in underscore attribute version
    this._name = name;
    this._code = code;
  }

  /**
   * Get the name of the airport.
   * @returns {string} - The name of the airport.
   */
  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  toString() {
    return `[${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
  }
}
