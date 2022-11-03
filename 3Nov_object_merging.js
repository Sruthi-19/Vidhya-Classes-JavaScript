// APPROACH 1 - LOOPS
function mergeArray1(users, orders) {
    let finalArray = [];
    for (let i = 0; i < users.length; i++) {
      let finalObject = {
        userId: users[i].id,
        userName: users[i].name,
        orders: [],
      };
      let subArray = [];

      for (let j = 0; j < orders.length; j++) {
        if (users[i].id === orders[j].userId) {
          subArray.push(JSON.stringify(orders[j]));
        }
      }
      finalObject.orders= subArray;
      finalArray.push(finalObject);
    }

    return finalArray;
  }

//APPROACH 2 - ARRAY ITERATION REDUCE FILTER
function mergeArray2(users, orders) {
  const finalArray = users.reduce((acc, curr) => {
    const finalObject = {
      userId: curr.id,
      userName: curr.name,
      orders: orders.filter((orderItem)=>curr.id===orderItem.userId),
    };
    acc.push(finalObject);
    return acc;
  }, []);
  return finalArray
}

console.log(
  mergeArray1(
    [
      {
        id: 1,
        name: "Ankit Jain",
      },
      {
        id: 2,
        name: "Shankar Sahu",
      },
      {
        id: 3,
        name: "Akash Kushwaha",
      },
    ],
    [
      {
        orderId: 101,
        userId: 1,
        productId: 123,
        productName: "Apple iPhone 14 Pro Max",
      },
      {
        orderId: 102,
        userId: 1,
        productId: 124,
        productName: "Apple MacBook Pro",
      },
      {
        orderId: 103,
        userId: 1,
        productId: 125,
        productName: "Apple iWatch 7 series",
      },
      {
        orderId: 104,
        userId: 2,
        productId: 126,
        productName: "Samsung S22",
      },
    ]
  )
);
console.log(
    mergeArray2(
      [
        {
          id: 1,
          name: "Ankit Jain",
        },
        {
          id: 2,
          name: "Shankar Sahu",
        },
        {
          id: 3,
          name: "Akash Kushwaha",
        },
      ],
      [
        {
          orderId: 101,
          userId: 1,
          productId: 123,
          productName: "Apple iPhone 14 Pro Max",
        },
        {
          orderId: 102,
          userId: 1,
          productId: 124,
          productName: "Apple MacBook Pro",
        },
        {
          orderId: 103,
          userId: 1,
          productId: 125,
          productName: "Apple iWatch 7 series",
        },
        {
          orderId: 104,
          userId: 2,
          productId: 126,
          productName: "Samsung S22",
        },
      ]
    )
  );