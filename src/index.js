module.exports = function check(str, bracketsConfig) {
  let controlSum = [];
  for (let k = 0; k < bracketsConfig.length; k++) {
      controlSum[k] = 0;
  }
  let result = true;
  for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < bracketsConfig.length; j++) {
              if (str[i] === bracketsConfig[j][0]){
                  controlSum[j] = controlSum[j] + 1;
              } else if (str[i] === bracketsConfig[j][1]){
                  controlSum[j] = controlSum[j] - 1;
                  }
              if (controlSum < 0) {
                  result = false;
              }
              }      
      }
let copyStr = str.slice(0);
for (let i = 0; i < copyStr.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
        if (copyStr[i] === bracketsConfig[j][0] && copyStr[i + 1] === bracketsConfig[j][1]) {
            let sec = `${copyStr[i]}${copyStr[i + 1]}`;
            copyStr  = copyStr.replace(sec, '');
            i = -1;
        }
    }
}
if (copyStr !=''){
    result = false;
}       
  return result;
}
