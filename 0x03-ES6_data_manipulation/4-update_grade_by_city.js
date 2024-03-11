function updateStudentGradeByCity(studentsList, city, newGrades) {
  // Use filter to select students based on the specified city
  const filteredStudents = studentsList.filter((student) => student.location === city);

  // Use map to update grades for selected students
  const updatedStudents = filteredStudents.map((student) => {
    // Find the matching grade in newGrades array
    const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);

    // Update the student's grade or set it to N/A if not found
    const updatedGrade = matchingGrade ? matchingGrade.grade : 'N/A';

    // Return a new student object with the updated grade
    return { ...student, grade: updatedGrade };
  });

  return updatedStudents;
}

// Export the function
export default updateStudentGradeByCity;
