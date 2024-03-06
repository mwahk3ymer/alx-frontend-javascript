// handleResponseFromAPI.js

/**
 * Handles the response from a Promise.
 * @param {Promise} promise - The Promise to handle.
 * @returns {Promise} - A Promise that resolves with the specified response or rejects with an empty Error object.
 */
function handleResponseFromAPI(promise) {
  return promise
    .then((response) => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch((error) => {
      console.error('Error from the API:', error.message);
      return new Error(); // Return an empty Error object
    });
}

// Export the function
module.exports = handleResponseFromAPI;
