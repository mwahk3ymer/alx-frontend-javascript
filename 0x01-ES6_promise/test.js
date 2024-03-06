// getFullResponseFromAPI.test.js

const getFullResponseFromAPI = require('./getFullResponseFromAPI');

test('API response is successful when true is passed', async () => {
  const response = await getFullResponseFromAPI(true);
  expect(response).toEqual({
    status: 200,
    body: 'Success',
  });
});

test('API response is rejected with an error when false is passed', async () => {
  await expect(getFullResponseFromAPI(false)).rejects.toThrowError('The fake API is not working currently');
});
