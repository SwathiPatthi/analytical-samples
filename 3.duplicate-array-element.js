//using indexOf method. indexOf returns -1 if the item is not found. 
//It returns position if the element is found more than once
//var array = [2,2,3,34,2,45,3,1,3];
var array = ['swathi','uma','jagrav','swathi'];
var tempArray=[];
array.forEach(function(value,index){   
       if(tempArray.indexOf(value) === -1)
        {
            tempArray.push(array[index])
        } 
}
)
console.info(tempArray);

//second Method: using Array.from - converts string to an array
//               using new Set() - creates empty object\
var array1 = ['rama','rama','rama','hari'];
var uniqueArray = Array.from(new Set(array1));
console.info(uniqueArray);