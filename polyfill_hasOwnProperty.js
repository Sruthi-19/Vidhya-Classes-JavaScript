// APPROACH 1

// const objWithCustomFunction={};
// objWithCustomFunction["customHasOwnProperty"]=customHasOwnProperty;

// const objToBeChecked1=Object.create(objWithCustomFunction);
// objToBeChecked1["name1"]="Sruthi";
// objToBeChecked1["age1"]="20";
// objToBeChecked1["city1"]="Coimbatore";

// const objToBeChecked2=Object.create(objWithCustomFunction);
// objToBeChecked2["name2"]="Raaghavi";
// objToBeChecked2["age2"]="25";
// objToBeChecked2["city2"]="Chennai";

// function customHasOwnProperty(key){
//     const keyArray=Object.keys(this);
//     if(keyArray.includes(key)){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(objToBeChecked2.customHasOwnProperty("name1"));

// APPROACH 2

// const obj1={
//     name1: "Sruthi",
//     age1: "20"
// }

// const obj2={
//     name2: "Hema",
//     age2: "40"
// }
// function polyFunc(){
//     console.log("HI");
// }
// const objArrays=[obj1,obj2];
// Object.defineProperty(objArrays,'polyFillProperty',{
//     value: polyFunc,

// });

// console.log(objArrays.polyFillProperty);


// APPROACH 3

const objToBeChecked1={
    name1: "Sruthi",
    age1: "20"
}

const objToBeChecked2={
    name2: "Raaghavi",
    age2: "25"
}

Object.prototype.customHasOwnProperty=function(key){
    const keyArray=Object.keys(this);
    if(keyArray.includes(key)){
        return true;
    }
    else{
        return false;
    }

}

console.log(objToBeChecked2.customHasOwnProperty("name2"));