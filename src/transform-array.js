const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(Array.isArray(arr)==true || arr == null){
    arr_new=[];
    for(i=0;i<arr.length;i++){
      if(arr[i]=='--discard-next'){
        if(i!=arr.length-1) i++;
      }
      else if(arr[i]=='--discard-prev'){
        if(i!=0 && arr[i-2]!='--discard-next') arr_new.pop();
      } 
      else if(arr[i]=='--double-next'){
        if(i!=arr.length-1) arr_new.push(arr[i+1]);
      } 
      else if(arr[i]=='--double-prev'){
        if(i!=0 && arr[i-2]!='--discard-next') arr_new.push(arr[i-1]);
      } 
      else{
        arr_new.push(arr[i]);
      }
    }
    return arr_new;
  }
  else return Error;
};
