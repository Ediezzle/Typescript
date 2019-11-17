function addNumbers(a: number, b: number) {
    return a + b;
}
var sum: number = addNumbers(10, 15)
console.log('Sum of the two numbers is: ' + sum);

interface IEmployee {
    empCode: number;
    name: string;
    getSalary: (empCode: number) => number;
    getManagerName(empCode: number): string;
}

class Employee implements IEmployee {
    empCode: number;
    name: string;

    constructor(code: number, name: string) {
        this.empCode = code;
        this.name = name;
    }

    getSalary(empCode: number): number { return 20000 };

    getManagerName = (empCode: number): string => "Diezzle";
}

let emp = new Employee(1, "Steve");
console.log(emp);
console.log(emp.getSalary(1));
console.log(emp.getManagerName(1));

