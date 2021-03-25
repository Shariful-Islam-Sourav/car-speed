'use strict';

const Car = function (make,speed){
    this.make = make;
    this.speed = speed;

}

Car.prototype.accelerate = function (){
    console.log(this.make + ` is going at ` + (this.speed + 10) + ` Kmph`);
}
Car.prototype.brake = function (){
    console.log(this.make + ` is going at ` + (this.speed - 5) + ` Kmph`);
}

const car1 = new Car(`BMW`,120)
const car2 = new Car(`Mercedes`,95)

car1.accelerate();
car1.brake();
car2.brake();
car2.accelerate();
