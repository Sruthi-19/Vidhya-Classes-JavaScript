//APPROACH 1 USING FOR LOOP
// function pushNegativeBack(arr){
//     let arrNegative=[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<0){
//             arrNegative.push(arr[i]);
//             arr.splice(i,1);
//         }
//     }
//     for(let j=0;j<arrNegative.length;j++){
//         arr.push(arrNegative[j]);
//     }
//     return arr;
// }

//APPROACH 2 USING ARRAY ITERATION METHOD
function pushNegativeBack(arr){
    const arrPositive=arr.filter(value => value>=0);
    const arrNegative=arr.filter(value => value<0);
    const arrFinal=arrPositive.concat(arrNegative);
    return arrFinal;
}


console.log(pushNegativeBack([1,-3,5,6,-9,8]));