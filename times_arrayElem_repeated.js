// function countOccurrence(arr){
//     const obj={};
//     for(let j=0;j<arr.length;j++){
//         !obj.hasOwnProperty(arr[j]) ? obj[arr[j]]=1 : obj[arr[j]]++;    
//     }
//     return obj;
// }

function countOccurrence(arr) {
  const obj = {};
  arr.forEach(function (value) {
    !obj.hasOwnProperty(value) ? obj[value] = 1 : obj[value]++;
  });
  return obj;
}
console.log(countOccurrence([1, 1, 2, 3, 4, , 5, 5, 6, 7]));
