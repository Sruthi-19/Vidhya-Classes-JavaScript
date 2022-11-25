// function add(...arr){
//     let result = arr.reduce((acc, cur) => {
//       return acc+=cur;
//     }, 0);
//     return result;
// }
function add() {
  let values_array = Object.values(arguments);
  let result=0;
  if (values_array.length === 0) {
    result = "EMPTY";
  } 
  else {
    for (let i of values_array) {
      if (typeof i != "number") {
        result = "WRONG";
        break;
      }
      else{
        result+=i;
      }
    }
  }

  return result;
}

console.log(add(1,2,3,4));
