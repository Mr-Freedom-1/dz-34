/*-------------Завдання №1-------------*/
export function totalSalary(employees){
    let result = 0;
    for(let i = 0; i < employees.length; i++){
        result += employees[i].salary
    }
    return result
}

/*-------------Завдання №2-------------*/
export function departmentsQuantity(employees){
    let departments = [];
    employees.forEach(function(employee) {
        if (!departments.includes(employee.department)) {
        departments.push(employee.department);
        }
    });
    return departments.length;
}

/*-------------Завдання №3-------------*/
export function departmentsSalary(employees){
    let result = {};
    employees.forEach(function(employee) {
        if (!result[employee.department]) {
        result[employee.department] = 0;
        }
        result[employee.department] += employee.salary;
    });
    return result;
}