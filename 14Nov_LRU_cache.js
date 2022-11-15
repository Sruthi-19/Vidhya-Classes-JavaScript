// const productList = [];
const limit = 4;

let resultArray=[];
function addElement(item){
    if(resultArray.length===0){
        resultArray.push(item);
    }
    else if(resultArray.length===limit){
        if (resultArray.includes(item)) {
          resultArray.splice(resultArray.indexOf(item), 1);
          resultArray.push(item);
        }
        else{
            resultArray.shift();
            resultArray.push(item);
        }
        
    }
    else{
        if(resultArray.includes(item)){
            resultArray.splice(resultArray.indexOf(item),1);
            resultArray.push(item);
        }
        else{
            resultArray.push(item);
        }
    }
    console.log(resultArray);
    return resultArray;
    
}

addElement("samsung");
addElement("google");
addElement("apple");
addElement("mi");
addElement("vivo");





// add add apple : ["apple"]
// add add samsung : ["apple", "samsung"]
// add add lg : ["apple", "samsung", "lg"]
// add add apple : [ "samsung", "lg", "apple"]
// add add mi : [ "samsung", "lg", "apple", "mi"]
// add add google : [ "lg", "apple", "mi", "google"]
