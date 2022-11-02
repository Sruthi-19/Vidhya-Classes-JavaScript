//APPROACH 1 - LOOP AND OBJECT
function characterOccurrence(givenString){
    if(typeof givenString !== 'string' || givenString.length==0){
        return "INVALID INPUT";
    }
    else{
        givenString=givenString.toLowerCase();
        let resultObject={};
        for(let item of givenString){
            if(resultObject.hasOwnProperty(item)){
                resultObject[item]++;
            }
            else{
                resultObject[item]=1;
            }
        }
        return resultObject;
    }
    

}

//APPROACH 2 - ARRAY REDUCE
function characterOccurrence1(givenString){
    if(typeof givenString !== 'string' || givenString.length==0){
        return "INVALID INPUT";
    }
    else{
        givenString=givenString.toLowerCase();
        const resultObject=givenString.split("").reduce((accumulatorObject,currentArrayValue)=>{
            if(accumulatorObject.hasOwnProperty(currentArrayValue)){
                accumulatorObject[currentArrayValue]++;
            }
            else{
                accumulatorObject[currentArrayValue]=1;
            }
            return accumulatorObject
        },{});
        return resultObject;
    }

}



console.log(characterOccurrence("SruthiRuth"));
console.log(characterOccurrence1("SruthiSruthi"));
