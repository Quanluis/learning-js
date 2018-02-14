class vehicle {
    constructor(color ='red', stank = 'used car'){
        this.color = color;
        this.stank = stank;
    }
    drive(){
        console.log('VROOOOM!!')
    }
}
const v = new vehicle();
const v2 = new vehicle('blue', 'old car');
console.log(v);
console.log(v2);
v.drive();

//create a object assigned to a variable using syntax
//similar to the circle but you are making a vehicle
//consider the prop the vehicle has 

const vLiteral = {
    color:'red',
    stank: 'new car',
};
console.log(vLiteral);

class Truck extends vehicle {
    constructor(color = 'red', stank = 'coal stank', hasLiftKit = true){
        super(color, stank);
        this.hasLiftKit = hasLiftKit;
    }
    goMudding(){
        console.log('suuuuuuuuuuyyy!');
    }
    drive(){
        console.log('BHHHAHHHAHAHHH!!');
    }
}
  const t = new Truck ();
  t.drive();
  t.goMudding();
  console.log(t);

//create a car class that is-a vehicle
//car should drive fast 
//car should have a miliage property 
//these are in addition to the vehicle and methods
//that the car will have

class Mustang extends vehicle {
    constructor(color = 'black', stank = 'new car', mileage = 0){
        super()
    }
    driveFast(){
        console.log('FASSSST!')
    }
  }  

const m = new Mustang ();
  m.drive();
  m.driveFast();
  console.log(m);
