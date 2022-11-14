//CUSTOM MAP
let arr = [1, 2, 3, 4];
Array.prototype.customMap = function (callback) {
  let resultArray = [];
  for (let i = 0; i < this.length; i++) {
    resultArray.push(callback(this[i]));
  }
  return resultArray;
};

const newArray = arr.customMap((item)=> item*9);
console.log("newArray :", newArray);

//CUSTOM FILTER
let arr1 = [1, 2, 3, 4];

Array.prototype.customFilter = function (callBack) {
  let resultArray1 = [];
  for (let i = 0; i < this.length; i++) {
    const result = callBack(this[i]);
    if (result) {
      resultArray1.push(this[i]);
    }
  }
  return resultArray1;
};

const newArray1 = arr.customFilter((item) => item%3===0);
console.log("newArray1 :", newArray1);
