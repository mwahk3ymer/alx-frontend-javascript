function groceriesList() {
  // Create a new Map and populate it with the specified items and quantities
  const groceriesMap = new Map([
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ]);

  return groceriesMap;
}

// Export the function
export default groceriesList;
