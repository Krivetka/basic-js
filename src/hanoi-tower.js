const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  var Hanoi = new Object();
  count =3;
  for(i=1; i < disksNumber-1; i++){
    count=count*2+1;
  }
  Hanoi.turns = count;
  Hanoi.seconds = Math.floor((3600/turnsSpeed)*count);
  return Hanoi;
};
