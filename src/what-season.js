const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(date == null) return 'Unable to determine the time of year!';
  else if(typeof date != 	"object") return false;
  else{
    days=[31,28,31,30,31,30, 31,31,30,31,30,31];
    year = Date.prototype.getYear.call(date);;
    if(year%4==0){
      days[1]+=1;
    }
    month = Date.prototype.getMonth.call(date)
    day = Date.prototype.getDate.call(date)
    if(day<=days[month]){
      if(month <5 && month > 1){
        return "spring";
      }
      else if(month <8 && month > 4){
        return "summer";
      }
      else if(month <11 && month > 7){
        return "autumn";
      }
      else return "winter";
    }
    else throw Error;
  }
};
