const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(mass) {
  if(mass!=null){
    text_arr=[];
    str='';
         for(i=0; i<mass.length; i++){
         if(typeof mass[i]==='string'){
           mass[i]=mass[i].trim();
             char = mass[i].charAt(0).toUpperCase();
                 text_arr.push(char);
         }
     };
    text_arr.sort();
    for(j=0; j<text_arr.length; j++){
        str+=text_arr[j];
    }
    if(str!= '') return str;
  }
  return false;
};
