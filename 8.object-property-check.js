var student={
    firstName:'swathi',
    lastName:'patthi',
    grade:'pass'
}

console.log('student name','firstName' in student); // output: student name true
console.log('student grade','class' in student);    // output: student grade false

console.log(student.hasOwnProperty('firstName')); // true
console.log(student.hasOwnProperty('class'));     // false

