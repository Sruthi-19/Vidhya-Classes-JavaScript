//APPROACH 1 - LOOP
function characterSeqOccurrence1(givenString){
    let resultString="";
    let count=1;
    for(let i=0;i<givenString.length;i++){
        if(givenString[i]===givenString[i+1]){
            count=count+1;
        }
        else{
            resultString+=`${givenString[i]}${count}`;
            count=1;
        }
    }
    return resultString;

}


//APPROACH 2 - ARRAY MAP
function characterSeqOccurrence2(givenString) {
  let givenArray = givenString.split("");
  let count = 1;
  let resultString="";
  givenArray.map((item, index) => {
    if (item === givenArray[index+1]) {
      count = count + 1;
    } else {
      resultString+=`${item}${count}`;
      count = 1;
    }
  });
  return resultString;
}

console.log(characterSeqOccurrence1("AAAABBBCCDAABB"));
console.log(characterSeqOccurrence2("ADCDDDDBNNNA"));
