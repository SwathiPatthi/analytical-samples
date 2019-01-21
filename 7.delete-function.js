/*delete function is used only to delete object properties. If not object there will be no change in result.
delete does not delete prototype properties. It can be used to delete array element*/

var output =(function(x){
   delete x;
   return x;
})
console.log(output(1));
//output: 1

//deletes the object property
var employee = {
    firstName : 'swathi',
    lastName : 'patthi',
    age : 25
}
delete employee.age
console.log(employee);

/*try to access deleted property and check the result
here the output will be undefined as we are trying to access the deleted property.
*/
var student = {
    fullName : 'Swathi Patthi'
}

var output = function(){
    delete student.fullName;
    return student.fullName;
}
console.log(output())
//output : undefined

//delete prototype property does not delte prototype properties
var employee = {
    company: 'HCS'
}

var empObj = Object.create(employee);
delete empObj.company;
console.log(empObj);
//ouptput: HCS

//delete can be used to delete array element
var arrayList = ['c#','j#','f#','mvc','angular'];
delete arrayList[2];
console.log(arrayList);
//output: c#,j#,empty,mvc,angular

//the array length remains constant even if all array elements are deleted using delete operator
delete arrayList[3];
console.log(arrayList); //output: c#,j#,empty X 2,angular
console.log(arrayList.length);// output: 5