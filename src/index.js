module.exports = function check(str, bracketsConfig) {
  let stack = [];
  
  let getClosingBracket = (strPosition) => {
    for(let i = 0; i < bracketsConfig.length; ++i)
      if(str[strPosition] === bracketsConfig[i][0])
        return bracketsConfig[i][1];
    return -1;
  }
  
  let isClosingBracket = (strPosition) => {
    for(let i = 0; i < bracketsConfig.length; ++i)
      if(str[strPosition] === bracketsConfig[i][0])
        return false;
    return true;
  }
  
  for(let cursor = 0; cursor < str.length; ++cursor) {
    if(stack.length && str[cursor] === getClosingBracket(stack[stack.length - 1])  ) {
      stack.pop();
    } else {
      if(isClosingBracket(cursor)) {
        return false;
      } else {
        stack.push(cursor);
      }
    }
  }
  
  if(stack.length)
    //haven't got a pair for bracket
    return false;
     
  return true;
}
