const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options){
  if(typeof options.repeatTimes != 'number') options.repeatTimes = 1;
  if(typeof options.additionRepeatTimes  != 'number') options.additionRepeatTimes = 1;
  if(options.separator === undefined) options.separator = '+';
  if(options.additionSeparator === undefined) options.additionSeparator = '|';
  if(options.addition === undefined) options.addition = '';
  str = String(str);
  options.addition = String(options.addition);
  var res='';
  for(i=0; i<options.repeatTimes; i++){
    res+=str;
    for(j=0; j<options.additionRepeatTimes; j++){
      res+=options.addition;
      if(j < options.additionRepeatTimes-1) res+=options.additionSeparator
    }
    if(i < options.repeatTimes-1) res+=options.separator;
  }
  return res;
}; 
