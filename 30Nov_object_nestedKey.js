let obj1={
    name1: "Sruthi",
    address1:{
        state1: "Tamil Nadu",
        location1:{
            city1: "Coimbatore",
            pin1:"641103"
        }
    }
}

let obj2={
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    }

function nestedKey(given_object,given_key){
    let result;
    if(given_object.hasOwnProperty(given_key)){
        result=given_object[given_key];
    }
    else{
        let value_array=Object.values(given_object);
        for(let i of value_array){
            if(typeof i=="object"){
                return nestedKey(i,given_key);
            }
            else{
                continue;
            }
        }
    }
    return result;
}
console.log(nestedKey(obj1,"city1"));
console.log(nestedKey(obj2,"lng"));
