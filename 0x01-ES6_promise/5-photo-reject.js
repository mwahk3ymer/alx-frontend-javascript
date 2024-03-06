export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    // Simulate a condition where the file cannot be processed
    if (fileName.toLowerCase().includes('error')) {
      const errorMessage = `${fileName} cannot be processed`;
      reject(new Error(errorMessage));
    } else {
      // Simulate a successful upload
      resolve({
        status: 200,
        body: `Photo ${fileName} uploaded successfully`,
      });
    }
  });
}
