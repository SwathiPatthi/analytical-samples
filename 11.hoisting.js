
/*
In the code presented, you might be expecting salary to 
 retain it values from outer scope until the point that salary 
 was re-declared in the inner scope. But due to hoisting salary 
 value was undefined instead. To understand it better have a look 
 of the following code, here salary variable is hoisted and declared 
 at the top in function scope. When we print its value using console.
 log the result is undefined. Afterwards the variable is redeclared 
 and the new value 30000 is assigned to it.

*/

var salary=20000;
var obj = (function(){
    console.log(salary);
    var salary=30000;
    console.log(salary);
})
obj();
//output: undefined, 30000