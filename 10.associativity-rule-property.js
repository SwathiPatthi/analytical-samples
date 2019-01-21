var z=1, y=z=typeof y;
console.log(y);
//output: undefined

/* 
The code above will print string "undefined" as output. According 
 to associativity rule operator with the same precedence are 
 processed based on their associativity property of operator. 
 Here associativity of the assignment operator is Right to Left so 
 first typeof y will evaluate first which is string "undefined" 
 and assigned to z and then y would be assigned the value of z.
  The overall sequence will look like as shown below.

 var z;
    z=1
    var y;
    z=typeof y;
    y=z

*/