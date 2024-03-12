function updateUniqueItems(groceriesMap) {
  // Check if the argument is a Map
  if (!(groceriesMap instanceof Map)) {
    throw new Error('Cannot process. Argument must be a map.');
  }

  // Iterate through the entries of the map and update quantities
  for (const [item, quantity] of groceriesMap.entries()) {
    if (quantity === 1) {
      groceriesMap.set(item, 100);
    }
  }

  return groceriesMap;
}

// Export the function
export default updateUniqueItems;
