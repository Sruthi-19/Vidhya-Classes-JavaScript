// DESTRUCTURING
const obj1={
    name1: "Sruthi",
    age1:"20",
    city1:"Coimbatore",
    optional1: "nothing 1"
}

const {name1, age1, city1, optional1}=obj1;
console.log(`${name1} ${age1} ${city1} ${optional1}`);

// CREATING COPY

// METHOD 1 Object.assign

const obj2={
    name2: "Raaghavi",
    age2:"25",
    city2:"Tiruppur",
    optional2: "nothing 2"
}

const newObj1=Object.assign({},obj2);
console.log(newObj1);

// METHOD 2 {....} SPREAD

const newObj2={...obj2};
console.log(newObj2)

// REST OPERATOR 

const {optional2,...restOtherKeys}=obj2; //other than optional1 rest key value pairs 
//are stored in restOtherKeys which is an object. 
console.log(restOtherKeys);

// ALIASING and DEFAULT
const obj3={
    name3: "Hema",
    age3:"40",
    city3:"Chennai",
    optional3: "nothing 3",
    // country3:"India"
}

const {name3, age3, city3 ,optional3:newOptional, country3: countryName="Not in object"}=obj3;
console.log(countryName);//country3 key not in object. So here if we try to access the key
// using countryName variable not in object is returned as default. 
//If key present then respective value is printed.
console.log(newOptional); //newOptional is the variable name assigned to optional2 key