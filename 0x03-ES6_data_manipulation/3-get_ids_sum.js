function getStudentIdsSum(studentsList) {
  // Use the reduce function to calculate the sum of student ids
  const sumOfIds = studentsList.reduce((accumulator, student) => accumulator + student.id, 0);

  return sumOfIds;
}

// Export the function
export default getStudentIdsSum;
