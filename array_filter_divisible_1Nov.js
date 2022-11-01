function isDivisible(arr){
    const newArr=arr.filter((item)=>item%3 ===0 && item%5===0);
    return newArr;
}
console.log(isDivisible([10,2,3,4,5,6,6,33,1,5,5,5,66]));