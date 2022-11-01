//APPROACH 1 - OBJECTS
function longestWord(str){
    const wordArr=str.split(" ");
    let obj={};
    for(let i=0;i<wordArr.length;i++){
        obj[wordArr[i].length]=wordArr[i];
    }
    const keysArr=Object.keys(obj);
    keysArr.sort();
    return obj[keysArr[keysArr.length-1]];
}

//APPROACH 2 - REDUCE
function longestWord1(str){
    const wordArr=str.split(" ");
    const longestString=wordArr.reduce((acc,curr)=> {
        if(curr.length>=acc.length){
            acc=curr;
        }
        return acc;
    },"")
    return longestString;
}
console.log(longestWord("Hello my name is Ankit Jain & i'm from Morena"));
console.log(longestWord1("Hello World . Hi"));