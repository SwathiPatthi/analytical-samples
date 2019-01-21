function multiply(x){
    return function(y)
    {
        return function(z)
        {
            return x * y *z;
        }
    }
}
console.log(multiply(2)(3)(3))

//calling function inside object. 
var object  = function display() {
    return "hello";
}
console.log(typeof display())
//output: uncaught reference error display is not defined. display can't be called directly outside object.

console.log(typeof object()) 
// output: string


