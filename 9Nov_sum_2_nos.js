var addStrings = function (num1, num2) {
  let len;
  let shortnum;
  let longnum;
  let sum = 0;
  let strsum = "";
  let carry = 0;
  if (num1.length > num2.length) {
    len = num1.length;
    shortnum = num2;
    longnum = num1;
    shortnum = shortnum.padStart(len, "0");
  } 
  else if (num2.length > num1.length) {
    len = num2.length;
    shortnum = num1;
    longnum = num2;
    shortnum=shortnum.padStart(len,'0');
  } 
  else {
    longnum = num1;
    shortnum = num2;
    len=num1.length;
    
  }
  console.log(shortnum);
  console.log(longnum);

  for (let j = len - 1; j >= 0; j--) {
    console.log(j);
    sum = +longnum[j] + +shortnum[j] + carry;
    if (j > 0) {
      if (sum > 9) {
        let x = sum % 10;
        strsum += x;
        carry = 1;
      } else {
        strsum += sum;
        carry = 0;
      }
    } else {
      let y = "";
      y += sum;
      y = y.split("").reverse().join("");
      strsum += y;
    }
  }
  strsum = strsum.split("").reverse().join("");

  console.log(strsum);
};

addStrings("31", "121");
