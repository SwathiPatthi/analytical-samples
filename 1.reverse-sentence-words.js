//First Method: without using in-built functions
var str = "this is swathi"
var array = str.split(" ")
array.forEach(function(value,count){
    var index=0,temp;
    var charArray = value.split('')
    var len = charArray.length
    while(index < len)
    {
        temp = charArray[len-1];
        charArray[len-1]=charArray[index];
        charArray[index] = temp;
        index++;
        len--;
    }
    array[count] = charArray.join("") + ' '
})
console.log(array.join(""));
//Output: siht si ihtaws

//Second Method: using in-built functions
function reverseString(){
    var value = "This is Javascript"
    return value.split("").reverse().join("");
}
console.log(reverseString())
//Output: tpircsavaJ si sihT

//Third Method: using for loop
function reverse(){
    var value = "this is for testing"
    var resultStr=""
    for(var count=value.length-1;count>=0;count--)
        {
            resultStr+=value[count];
        }
    return resultStr
}
console.log(reverse());

//Fourth Method: using substring and chatAt
function revString(str) {
    if (str === "") {
        return "";
    } else {
        revString(str.substring(1)) + str.charAt(0)
    }
}
var reverseMessage = revString("my name is Jagrav")
console.log(reverseMessage)
