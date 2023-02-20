/*-------------Завдання №1-------------*/
// import { employees } from "./employees.js";
// import { totalSalary } from "./methods.js";

// console.log(totalSalary(employees))

/*-------------Завдання №2-------------*/
// import { employees } from "./employees.js";
// import { departmentsQuantity } from "./methods.js";

// console.log(departmentsQuantity(employees))

/*-------------Завдання №3-------------*/
import employees from "./employees.js";
import * as employeesMethods from "./methods.js";

console.log(employeesMethods.totalSalary(employees))
console.log(employeesMethods.departmentsQuantity(employees))
console.log(employeesMethods.departmentsSalary(employees))