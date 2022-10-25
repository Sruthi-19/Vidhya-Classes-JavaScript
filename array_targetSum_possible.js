// APPROACH 1

// function ifSumPossible(arr){
//     let arr1= arr;
//     console.log(arr1);
//     arr.forEach(function(value,index){
//         arr1.forEach(function(value1,index1){
//             if(index!==index1){
//                 if(value+value1===9){
//                     console.log("YAY");
//                 }
//             }

//         })

//     })

// }

// APPROACH 2

// function ifSumPossible(arr){
//     let target=9;
//     let txt;
//     for(let i=0;i<arr.length;i++){
//         if(arr.includes(target-arr[i])){
//             txt="POSSIBLE";
//             break;
//         }
//         else{
//             txt="NOT POSSIBLE"
//         }
//     }
//     return txt;

// }

// APPROACH 3
// function ifSumPossible(arr){
//     let target=9;
//     let txt;
//     const obj={};
//     for(let i=0;i<arr.length;i++){
//         if(obj.hasOwnProperty(target-arr[i])){
//             txt=true;
//         }
//         else{
//             obj[arr[i]]=arr[i];
//             txt=false;
//         }
//     }
//     return txt;

// }

// APPROACH 3 TERNARY
function ifSumPossible(arr){
    let target=9;
    let txt;
    const obj={};
    for(let i=0;i<arr.length;i++){
        obj.hasOwnProperty(target-arr[i]) ? txt="POSSIBLE" : (obj[arr[i]]=arr[i] ,txt="NOT POSSIBLE");
    }
    return txt;

}

console.log(ifSumPossible([1,2,5,7,4]));