//sorting array in ascending order using bubble sort
var array = [34,2,22,1,43.5]
var len = array.length
array.forEach(function(value,index){
        for(var count=0;count < len-1-index;count++)
        {
            var temp;
            if(array[count] > array[count+1])
            {
                temp = array[count];
                array[count] = array[count+1];
                array[count+1] = temp;
            }
        }  
}
)
console.log(array)

//sort array in ascending order by creating array extended methods
var arrayObj = [45,62,1,34,53,6]

Array.prototype.ExtendMethodSortAsc = function() {
    var arrayObj = this;
    arrayObj.forEach(function(){
        for(var count=0;count < arrayObj.length;count++)
            {
                 var temp;
                 if(arrayObj[count] > arrayObj[count+1] )
                    {
                        temp = arrayObj[count];
                        arrayObj[count]=arrayObj[count+1];
                        arrayObj[count+1]=temp;
                    }
            }
    })
    return arrayObj;
}
console.log(Array.from(new Set(arrayObj.ExtendMethodSortAsc())));


//sort array in descending order creating array extended methods
var arrayObj = [45,62,1,34,53,6]

Array.prototype.ExtendMethodSortAsc = function() {
    var arrayObj = this;
    arrayObj.forEach(function(){
        for(var count=0;count < arrayObj.length;count++)
            {
                 var temp;
                 if(arrayObj[count] < arrayObj[count+1] )
                    {
                        temp = arrayObj[count];
                        arrayObj[count]=arrayObj[count+1];
                        arrayObj[count+1]=temp;
                    }
            }
    })
    return arrayObj;
}
console.log(Array.from(new Set(arrayObj.ExtendMethodSortAsc())));