function addNumbers(a, b) {
    return a + b;
}
var sum = addNumbers(10, 15);
console.log('Sum of the two numbers is: ' + sum);

var Employee = /** @class */ (function () {
    function Employee(code, name) {
        this.getManagerName = function (empCode) { return "Diezzle"; };
        this.empCode = code;
        this.name = name;
    }
    Employee.prototype.getSalary = function (empCode) { return 20000; };
    
    return Employee;
}());
var emp = new Employee(1, "Steve");
console.log(emp);
console.log(emp.getSalary(1));
console.log(emp.getManagerName(1));
