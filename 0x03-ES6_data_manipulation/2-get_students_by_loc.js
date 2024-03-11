function getStudentsByLocation(studentsList, city) {
  // Use the filter function to select students based on the specified city
  const studentsInCity = studentsList.filter((student) => student.location === city);

  return studentsInCity;
}

// Export the function
export default getStudentsByLocation;
