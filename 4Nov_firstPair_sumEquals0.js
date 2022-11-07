// // var start = window.performance.now();
function firstPairSum(givenArray) {
  let finalObject = {};
  for (let i = 0; i < givenArray.length; i++) {
    let negativeVal = givenArray[i] - givenArray[i] * 2;
    if (givenArray.includes(negativeVal)) {
      finalObject[i] = givenArray[i];
      finalObject[givenArray.indexOf(negativeVal)] = negativeVal;
      break;
    }
  }
  return finalObject;
}

function findPairSum(givenArray){
    
}


console.log(firstPairSum([1, 2, 3, 4, -2, 19, -1]));
// var end = window.performance.now();
// console.log(`Execution time: ${end - start} ms`);
