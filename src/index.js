module.exports = function check(str, bracketsConfig) {
  const arr = str.split("");
  let stack = [];
  const openBrackets = [];
  const closingBrackets = [];

  if (arr.length % 2 === 0){
    for (let i=0; i<bracketsConfig.length; i++){
      let allowedConfig = bracketsConfig[i];
      openBrackets.push(allowedConfig[0]);
      closingBrackets.push(allowedConfig[1]);
    }
    if (openBrackets.indexOf(arr[0]) === -1){
      return false;
    }
    for (let j=0; j<arr.length; j++){
      let z = arr[j];
      if ((openBrackets.indexOf(z)+1) && (openBrackets.indexOf(z) === closingBrackets.indexOf(z))){ // condition when open and closing brackets are equal
          if (stack.indexOf(z)+1){
            stack.pop(z);} else {stack.push(z);}
      } else {
      if (openBrackets.indexOf(z)+1){ // condition for pushing or removing in the rest situations
        stack.push(z);
      }
      if (closingBrackets.indexOf(z)+1){ 
        if (openBrackets.indexOf(stack[stack.length - 1]) === closingBrackets.indexOf(z)){          
        stack.pop(z);
        }
      }}}
    if (stack.length === 0){
      return true;
    }}

  return false;
}


