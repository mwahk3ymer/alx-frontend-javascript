
export default class Currency {
  constructor(code, name) {
    // Store attributes in underscore attribute version
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    // Verify the type during attribute modification
    if (typeof value !== 'string') {
      throw new Error('Invalid attribute type. Check the type of code.');
    }
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    // Verify the type during attribute modification
    if (typeof value !== 'string') {
      throw new Error('Invalid attribute type. Check the type of name.');
    }
    this._name = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
