#!/usr/bin/env node

export default function createReportObject(employeesList) {
  const allEmployees = {};

  for (const dep in employeesList) {
    if (Object.hasOwn(employeesList, dep)) {
      allEmployees[dep] = [...employeesList[dep]];
    }
  }

  return {
    allEmployees,
    getNumberOfDepartments() {
      return Object.keys(employeesList).length;
    },
  };
}
