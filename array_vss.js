// CREATING ARRAY

const arr1=[1,2,3,4,5];
const arr2=new Array('a','b','c','d','e'); 

const arr3=[];
arr3[0]="Sruthi";
arr3[1]="Coimbatore"

console.log(arr1);
console.log(arr2);
console.log(arr3);

// READ
console.log(arr1[3])//Using index array values can be read
console.log(arr1[arr1.length-1])//arr.length-1 refers to last index of array

// UPDATE AND DELETE 
arr1.push(6);//value 6 is added to end of array
arr1.push(7);//value 7 is added to end of array
arr1.unshift(19);//value is added to start of array
console.log(arr1);
arr1.pop(); // Last value is removed
arr1.shift();//First value is removed;
console.log(arr1);
