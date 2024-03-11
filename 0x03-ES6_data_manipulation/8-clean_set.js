function cleanSet(set, startString) {
  // Use the Array.from method to convert the set to an array
  // Filter values that start with the specified string
  const filteredValues = Array.from(set).filter((value) => value.startsWith(startString));

  // Join the filtered values into a string separated by '-'
  return filteredValues.join('-');
}

// Export the function
export default cleanSet;
