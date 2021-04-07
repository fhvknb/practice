function Car() {
  this.name = "Audi";

  this.price = "$1000";
}

Car.prototype.speedTest = function (speed) {
  console.log(this.name + " speed is " + speed);
};

function BWM(name) {
  this.isOld = false;
  this.name = name;
}
BWM.prototype = Object.create(Car.prototype);
BWM.prototype.constructor = BWM;

let bwm1 = new BWM("BWM1");
bwm1.speedTest("3600");
console.log(bwm1);
