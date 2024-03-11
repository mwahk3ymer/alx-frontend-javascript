function createInt8TypedArray(length, position, value) {
  // Check if the position is within the range of the ArrayBuffer
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);

  // Create an Int8TypedArray view of the ArrayBuffer
  const int8Array = new Int8Array(buffer);

  // Set the Int8 value at the specified position
  int8Array[position] = value;

  return buffer;
}

// Export the function
export default createInt8TypedArray;
