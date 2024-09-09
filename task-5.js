/**
 * FOR EACH EMPLOYEE THEIR CURRENT SALARY IS CALCULATED BY MULTIPLYING YEARLY INCREMENT WITH EXPERIENCE THEN ADDING THE RESULT TO THE STARTING SALARY. NOW CALCULATE IS THE TOTAL SALARY HAS TO BE PROVIDED BY THE COMPANY IN A MONTH.
 *  const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];
    EXPERIENCE * INCREMENT + STARTING
 */

    const employees = [
        { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
        { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
        { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
        { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
    ];
function calculateTotalMonthlySalary(employees){
    let totalMonthlySalary = 0;

    employees.forEach(employee => {
        const currentSalary = employee.starting + (employee.increment * employee.experience);

        totalMonthlySalary += currentSalary;
    });
    return totalMonthlySalary;
}
console.log(calculateTotalMonthlySalary(employees));