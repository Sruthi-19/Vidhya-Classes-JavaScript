// //APPROACH 1 - USING RECURSION
// var i=1;
// function firstMissPos(arr){
//     // arr=arr.sort();
//     if(arr.includes(i)){
//         i=i+1;
//         firstMissPos(arr);
//     }
//     else{
//         console.log(i)
//     }
    
// }
//APPROACH 2 - OBJECTS

function firstMissPos(arr){
    const obj={};
    for(let i=0;i<arr.length;i++){
        obj[arr[i]]=arr[i];
    }
    for(let j=1;j<Infinity;j++){
        if(!obj.hasOwnProperty(j)){
            console.log(j);
            break;
        }
    }
}

firstMissPos([1,2,0]);
firstMissPos([3,4,-1,1]);
firstMissPos([7,8,9,11,12]);



