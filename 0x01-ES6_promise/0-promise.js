// getResponseFromAPI.js

/**
 * Simulates an API request and returns a response.
 * @param {string} endpoint - The API endpoint to request.
 * @returns {Promise<Object>} - A Promise that resolves with the API response.
 */
function getResponseFromAPI(endpoint) {
  return new Promise((resolve, reject) => {
    // Simulate API request with setTimeout
    setTimeout(() => {
      // Check the endpoint and return a response accordingly
      if (endpoint === 'uploadPhoto') {
        resolve({
          status: 200,
          body: 'photo-profile-1',
        });
      } else if (endpoint === 'createUser') {
        resolve({
          firstName: 'Guillaume',
          lastName: 'Salva',
        });
      } else {
        // If the endpoint is not recognized, reject the Promise
        reject(new Error('Invalid API endpoint'));
      }
    }, 1000); // Simulating a delay of 1 second
  });
}

// Export the function
module.exports = getResponseFromAPI;

