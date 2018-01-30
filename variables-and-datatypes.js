// sing line comment 
/** this is a multi-line 
 * comment 
 */ 
 
 //Variables 
 var name = "Luis"; //old school js (dont use this)
 const fruit = "banana"; // contant binding (lock it in the cup)
 let veggie = "Carrot"; //similar to var, but some other differences...
 console.log("name: ", name); //print
 console.log("fruit: ", fruit);
 console.log("veggie: ", veggie);

 //simple data types 
 //strings 
 const aString = "things and stuff";
 //a String => space and variable names are....BAD!! 
 // so we remove the space and capitalize all words but the first 
 // this is called camel casing CONVENTION! 
const anotherString = 'some other things and stuff'; // this is a single quotes
const stringWithNumbers = '1234.03'; 
console.log("aString: ", aString); 
console.log('anotherString: ', anotherString); 
console.log("stringWithNumbers: ",stringWithNumbers);
console.log("what is the type of aString? ", typeof aString); 
// strings will come back up 
//numbers 
const aNumber = 1;
const anotherNumber = 2.5 
console.log("aNumber: ", aNumber);
console.log("anotherNumber: ", anotherNumber); 
console.log("Type of aNumber: ", typeof aNumber);
console.log("Type of anotherNumber: ", typeof anotherNumber);
//numbers will come back up, 
//Arrays 
const anArray = [1,2,3,4]; //array of numbers
const aStringArray = ["cheese", "bacon", "eggs"]; // an array of strings 
console.log("anArray: ", anArray);
console.log("aStringArray: ",aStringArray);
console.log("How many elements are in aArray? ", anArray.length);
//the "." after the anArray(the VARIABLE) accesses the property "length"
// of the Array
console.log("what is the type of anArray?", typeof anArray);
console.log('what is the index 1 element of anArray?: ',anArray[1]);
// we are def not finished with Arrays, these are everwhere. 
//objects 
const anObject = {
    'color': 'red', //key: value => key is 'color' the value is 'red'
    size: 500, //keys are strings but the quotes are implied
    'toppings': ['perpperoni', 'cheese', 'jalapenos'],
    radius: 500,
    
};
console.log('anObject: ', anObject);
console.log('Type of anObject? ', typeof anObject);
console.log('what is the color of the object?: ', anObject.color);
console.log('what is the size of the object?: ', anObject.size);
console.log('what is the topping of the object?: ', anObject['toppings']);

// objects are everywhere, we shall return!
//Booleans 
const yes = true ;
const no = false; 
// const true = 3; // bad! cannot use a reserverd word for a variable 
