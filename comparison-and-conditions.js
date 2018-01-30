// comparison 
// things that we compare must be comparable
// comparable means that i use the followig operators 
// <, <= , >, >=, ===, !== (full disclosure, there are more....,
// but sometimes they cause problems in the begging)
const aString = 'abc'; 
const anotherString = "abcd";
const aNumber = 123; 
const anotherNumber = 123.2;

console.log('aString === anotherString: ', aString === anotherString);
console.log('aString !== anotherString: ', aString !== anotherString);
console.log('aString <= anotherString: ', aString <= anotherString);
console.log('aString >= anotherString: ', aString >= anotherString);
console.log('aString > anotherString: ', aString > anotherString);
console.log('aString < anotherString: ', aString < anotherString);


console.log('aNumber: === anotherNumber', aNumber === anotherNumber);
console.log('aNumber: !== anotherNumber', aNumber !== anotherNumber);
console.log('aNumber: < anotherNumber', aNumber < anotherNumber);
console.log('aNumber: > anotherNumber', aNumber > anotherNumber);
console.log('aNumber: >== anotherNumber', aNumber >= anotherNumber);
console.log('aNumber: <== anotherNumber', aNumber <= anotherNumber);
