let result_array=[];
function flatArray(given_array){
    for(let i=0;i<given_array.length;i++){
        if(Array.isArray(given_array[i])){
            flatArray(given_array[i]);
        }
        else{
            result_array.push(given_array[i]);
        }

    }
    return result_array;

}

console.log(
  flatArray([
    1,
    2,
    [3, 4, [3, 4, [3, 4], [3, 4]]],
    5,
    [6, 7, 8, [3, 4], 9],
    6,
    [3, 4, [3, 4, [3, 4, [3, 4]]]],
  ])
);