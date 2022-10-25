var obj = {
  a: {
    b: {
      c: 12,
      j: false,
    },
    k: null,
  },
};

// APPROACH 1
// const findPath = function(object, path){
//     const arr=path.split(".");
//     const indexVar=arr[0];
//     if(!object.hasOwnProperty(indexVar)){
//         console.log("UNDEFINED");
//     }
//     else{
//         const obj1=object[indexVar];
//         if(typeof obj1==="object"){
//             arr.shift();
//             if(arr.length==0){
//                 console.log(obj1);
//             }
//             else{
//                 let str1;
//                 if(arr.length==1){
//                     str1=arr.toString();
//                 }
//                 else{
//                     str1=arr.join(".");
//                 }
//                 findPath(obj1,str1);
//             }
//         }
//         else{
//             arr.shift();
//             if(arr.length==0){
//                 console.log(obj1);
//             }
//             else{
//                 let str1;
//                 if(arr.length==1){
//                     str1=arr.toString();
//                 }
//                 else{
//                     str1=arr.join(".");
//                 }
//                 findPath(obj1,str1);
//             }
//         }
//     }

// };


// APPROACH 2
// const findPath = function(object, path){
//     const arr=path.split(".");
//     const indexVar=arr[0];
//     if(!object.hasOwnProperty(indexVar)){
//         console.log("UNDEFINED");
//     }
//     else{
//         const obj1=object[indexVar];
//         arr.shift();
//         if(arr.length==0){
//                 console.log(obj1);
//         }
//         else{
//             let str1;
//             str1=arr.join(".");
//             findPath(obj1,str1);
//         }

//     }

// };


//APPROACH 3
const findPath = (object, path) => {
  const arr = path.split(".");

  const indexVar = arr[0];
  

  if (!object.hasOwnProperty(indexVar)) {
    console.log("UNDEFINED");
  } else {
    const obj1 = object[indexVar];

    arr.shift();

    let str;
    arr.length == 0
      ? console.log(obj1)
      : ((str = arr.join(".")), findPath(obj1, str));
  }
};

findPath(obj, "a.b.c"); // 12
findPath(obj, "a.b"); // {c: 12, j: false}
findPath(obj, "a.b.d"); // undefined
findPath(obj, "a.c"); // undefined
findPath(obj, "a.b.c.d.e"); // undefined
findPath(obj, "a.b.j"); //false
findPath(obj, "a.b.j.k"); //undefined
findPath(obj, "a.k"); //null
