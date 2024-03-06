// handleResponseFromAPI.js

/**
 * Handle the response from a Promise.
 * @param {Promise} promise - The Promise to handle.
 * @returns {Promise} - A Promise that resolves or rejects based on the original Promise.
 */
function handleResponseFromAPI(promise) {
  return promise
    .then((resolvedValue) => {
      // Log a message to the console on resolution
      console.log('Got a response from the API');
      
      // Return an object with status and body attributes on resolution
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch((error) => {
      // Log a message to the console on rejection
      console.error('Error from the API:', error.message);
      
      // Return an empty Error object on rejection
      return new Error();
    });
}

// Export the function
module.exports = handleResponseFromAPI;
