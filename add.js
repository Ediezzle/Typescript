var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    ;
    return Employee;
}());
var emp = new Employee(1, "Steve");
console.log(emp);
console.log(emp.getSalary(1));
console.log(emp.getManagerName(1));
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
    }
    Car.prototype.run = function (speed) {
        if (speed === void 0) { speed = 0; }
        console.log("A " + this.name + " is moving at " + speed + " mph!");
    };
    return Car;
}());
var Mercedes = /** @class */ (function (_super) {
    __extends(Mercedes, _super);
    function Mercedes(name) {
        return _super.call(this, name) || this;
    }
    Mercedes.prototype.run = function (speed) {
        if (speed === void 0) { speed = 150; }
        console.log('A Mercedes started');
        _super.prototype.run.call(this, speed);
    };
    return Mercedes;
}(Car));
var Honda = /** @class */ (function (_super) {
    __extends(Honda, _super);
    function Honda(name) {
        return _super.call(this, name) || this;
    }
    Honda.prototype.run = function (speed) {
        if (speed === void 0) { speed = 100; }
        console.log('A Honda started');
        _super.prototype.run.call(this, speed);
    };
    return Honda;
}(Car));
var mercObj = new Mercedes("Mercedes-Benz GLA");
var hondaObj = new Honda("Honda City");
console.log(mercObj.run()); // A Mercedes started A Mercedes-Benz GLA is moving at 150 mph!
console.log(hondaObj.run()); // A Honda started A Honda City is moving at 100 mph!
