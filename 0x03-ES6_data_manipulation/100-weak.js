// Export a const instance of WeakMap
export const weakMap = new WeakMap();

// Export the queryAPI function
export function queryAPI(endpoint) {
  // Ensure the endpoint argument has required properties
  if (!endpoint || typeof endpoint !== 'object' || !endpoint.protocol || !endpoint.name) {
    throw new Error('Invalid endpoint. Please provide a valid endpoint object.');
  }

  // Initialize count for the endpoint in the WeakMap
  let count = weakMap.get(endpoint) || 0;

  // Increment the count
  count += 1;

  // Update the count in the WeakMap
  weakMap.set(endpoint, count);

  // Check if the number of queries is >= 5
  if (count >= 5) {
    throw new Error(`Endpoint load is high for ${endpoint.name}`);
  }

  // Perform API query logic here
  // ...

  // Return the result of the API query
  return `Query result for ${endpoint.name}`;
}
