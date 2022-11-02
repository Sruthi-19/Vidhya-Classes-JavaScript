//APPROACH 1 - LOOP AND ARRAY PUSH
function filterSalary(givenList) {
  let filteredList = [];
  for (let item of givenList) {
    if (item.salary > 60000) {
      filteredList.push(item);
    }
  }
  return filteredList;
}

// APPROACH 2 - FILTER ARRAY
function filterSalary1(givenList) {
  const filteredList = givenList.filter((item) => item.salary > 60000);
  return filteredList;
}

console.log(
  filterSalary([
    {
      id: 11,
      name: "Abhinav",
      salary: 75000,
    },
    {
      id: 2131,
      name: "Raj",
      salary: 61000,
    },
    {
      id: 3012,
      name: "Raj",
      salary: 32000,
    },
  ])
);

console.log(
  filterSalary1([
    {
      id: 11,
      name: "Abhinav",
      salary: 75000,
    },
    {
      id: 2131,
      name: "Raj",
      salary: 60000,
    },
    {
      id: 3012,
      name: "Raj",
      salary: 32000,
    },
  ])
);
