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

//condidtional statements 
// if -> using to run code based on the answer to a question
// if-else -> use to run code based on the andwer to a question
//but there is a fallback plan

//if-elseif-else -> i have multiple questions that determine 
//what code to run

//note: there is another way called a 'switch'
//but works dif

//if 

if (3 === 3){
    console.log('Orange crush if delicious!');
}

if("a" === "b") {
    console.log("this wiill never print");
}
// if-else 

if('grape' === 'banana'){
    console.log('this will never run');
} else {
    console.log('this is a backup plan'); 
}
// if-elseif-else 
//const someNumber = 100; //A 
//const someNumber = 42;  //B
const someNumber = 30    //C
if (someNumber === 100) { //A
    console.log('it is 100');
} else if(someNumber === 42) { //B
    console.log('the meaning of life');
}else { //C
    console.log('none others work');
}

//more complex questions 
// is that more than 3 and less than 10 
// if that more than 10 or less than 100 
// boolean operators: ! -> not 
//                      && -> and 
//                    || -> or 

const name = "luis";
if(name === 'luis'|| name === 'justin'){
    console.log('the name is equal to justin or luis.');
}

if(name === "luis" && name === "justin"){
    console.log('this will never run because the name will have to be luis and justin');

}
if (!(3 <= 3) ) {
     console.log('this will never run because the ! flips the true statement to false. ');

}