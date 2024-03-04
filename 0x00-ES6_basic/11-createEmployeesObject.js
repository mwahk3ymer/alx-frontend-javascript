export default function createEmployeesObject(departmentName, employees) {
  const formattedDepartmentName = `$${departmentName}`;
  const formattedEmployees = employees.map(employee => `$${employee}`);

  return {
    [formattedDepartmentName]: formattedEmployees,
  };
}

