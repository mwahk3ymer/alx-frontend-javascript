/**
 * Simulates an API response based on success flag.
 * @param {boolean} success - Indicates whether the API request is successful.
 * @returns {Promise<Object>} - A Promise that resolves with the API response or rejects with an error.
 */
function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    // Simulate API response based on the success flag
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}

module.exports = getFullResponseFromAPI;
