//find length of associative object using Object.key method
var person={
    firstname: 'swathi',
    lastName: 'patthi'
}
person["age"]=22;
console.log(Object.keys(person).length)


//find length of associative object using 
console.log(Object.getOwnPropertyNames(person).length)