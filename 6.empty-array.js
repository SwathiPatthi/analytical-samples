//empty the array in below ways
var arrayObj = [1,2,3,4,5,6];
//Method 1 : 
arrayObj = [];
console.log(arrayObj);

//Method 2:
arrayObj.length=0
console.log(arrayObj);

//Method 3:
arrayObj.splice(0,arrayObj.length);
console.log(arrayObj);

//Method 4:
while (arrayObj.length){
    arrayObj.pop();
}
console.log(arrayObj);


