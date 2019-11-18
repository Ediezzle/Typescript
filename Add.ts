function addNumbers(a: number, b: number) {
    return a + b;
}
var sum: number = addNumbers(10, 15)
console.log('Sum of the two numbers is: ' + sum);

interface IEmployee {
    empCode: number;
    name: string;
    getSalary: (empCode: number)  => number;
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

class Car {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    run(speed: number = 0) {
        console.log("A " + this.name + " is moving at " + speed + " mph!");
    }
}

class Mercedes extends Car {
    constructor(name: string) {
        super(name);
    }

    run(speed = 150) {
        console.log('A Mercedes started')
        super.run(speed);
    }
}

class Honda extends Car {

    constructor(name: string) {
        super(name);
    }

    run(speed = 100) {
        console.log('A Honda started')
        super.run(speed);
    }
}

let mercObj = new Mercedes("Mercedes-Benz GLA");
let hondaObj = new Honda("Honda City")

console.log(mercObj.run());  // A Mercedes started A Mercedes-Benz GLA is moving at 150 mph!
console.log(hondaObj.run()); // A Honda started A Honda City is moving at 100 mph!