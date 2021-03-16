const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine{
  constructor(type){
      this.type = type
  }
  encrypt(message, key) {
        if(message == null || key == null) throw new Error;
    else {
      let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let result = '';
      let count=0;
      message = message.toUpperCase();
      key = key.toUpperCase();
      for (let j = 0; j < message.length; j++){
       key += key[j];
      }
      for(let i=0; i < message.length; i++){
        var num_mes = -1;
        for(let j=0; j < alphabet.length; j++){
          if(message[i] == alphabet[j])num_mes=j;
          if(key[count]==alphabet[j])var num_key=j; 
        }
        if(num_mes==-1){
          result += message[i];
          count--;
          }
        else if(num_mes+num_key > alphabet.length) result += alphabet[num_mes+num_key-alphabet.length];
        else result+=alphabet[num_mes+num_key];
        count++;
      }
      if (this.type != false) return result
      else  result.reverse();
    }
  }    
  decrypt(message, key) {
    if(message == null || key == null) throw new Error;
    else {
      let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let result = '';
      let count=0;
      message = message.toUpperCase();
      key = key.toUpperCase();
      for (let j = 0; j < message.length; j++){
       key += key[j];
      }
      for(let i=0; i < message.length; i++){
        var num_mes = -1;
        for(let j=0; j < alphabet.length; j++){
          if(message[i] == alphabet[j])num_mes=j;
          if(key[count]==alphabet[j])var num_key=j; 
        }
        if(num_mes==-1){
          result += message[i];
          count--;
          }
        else if(num_mes-num_key < 0) result += alphabet[num_mes-num_key+alphabet.length];
        else result+=alphabet[num_mes-num_key];
        count++;
      }
      if (this.type != false) return result
      else  result.reverse();
    }
  }
}

module.exports = VigenereCipheringMachine;
