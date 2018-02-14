class vehicle {
    constructor(color ='red', stank = 'used car'){
        this.color = color;
        this.stank = stank;
    }
}
const v = new vehicle();
const v2 = new vehicle('blue', 'old car');
console.log(v);
console.log(v2);

//create a object assigned to a variable using syntax
//similar to the circle but you are making a vehicle
//consider the prop the vehicle has 

const vLiteral = {
    color:'red',
    stank: 'new car',
};
console.log(vLiteral);