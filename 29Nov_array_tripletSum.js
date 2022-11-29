function tripletSum(given_array, sum_target) {
  let result_array = [];

  for (let i = 0; i < given_array.length; i++) {
    let val1 = given_array[i];

    for (let j = i + 1; j < given_array.length; j++) {
      let val2 = given_array[j];

      let two_number_sum = val1 + val2;

      let needed_elem = sum_target - two_number_sum;

      if (two_number_sum < sum_target) {

        let rest_array = [val1, val2, ...given_array];
        
        if (rest_array.includes(needed_elem)) {
          result_array.push(val1);
          result_array.push(val2);
          result_array.push(needed_elem);
          break;
        }
      }
      if (result_array.length > 0) {
        break;
      }
    }
    if (result_array.length > 0) {
      break;
    }
  }

  return result_array;
}

console.log(tripletSum([12, 12, 1, 1, 3, 4, 1, 6, 9], 24));
