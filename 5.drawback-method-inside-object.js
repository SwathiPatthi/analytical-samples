function Employee(name, company, salary)
{
    this.name = name,
    this.company = company,
    this.salary = salary,
    this.newSalary = function(){
        return this.salary + 5000;
    }
}
//The below each objects have a new copy of private method newSalary
var firstEmployee = new Employee("swathi","HCS",10000);
var secondEmployee = new Employee("uma","EF",20000);
console.log(firstEmployee.newSalary());
console.log(firstEmployee);
console.log(secondEmployee);


/* We will re-write the example using prototype.
Prototype which would create only single copy. 
*/
function employeeProto(name,company,salary)
{
    this.name = name,
    this.company= company,
    this.salary = salary    
}
employeeProto.prototype.totalSalary = function(){
    return this.salary + 100;
}
var emp1 = new employeeProto("swathi","HCS",10000);
var emp2 = new employeeProto("uma","EF",20000);
console.log(emp1.totalSalary());
console.log(emp1);
console.log(emp2);

