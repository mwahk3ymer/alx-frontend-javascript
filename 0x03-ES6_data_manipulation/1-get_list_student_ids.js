function getListStudentIds(studentsList) {
  // Check if the input is an array
  if (!Array.isArray(studentsList)) {
    return [];
  }

  // Use the map function to extract ids from each student object
  const studentIds = studentsList.map((student) => student.id);

  return studentIds;
}

// Export the function
export default getListStudentIds;
