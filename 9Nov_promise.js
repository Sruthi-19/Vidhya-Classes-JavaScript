const promise1 = () =>
  new Promise((resolve, reject) => {
    resolve(1);
  });

const promise2 = () =>
  new Promise((resolve, reject) => {
    reject(2);
  });

const promise3 = () =>
  new Promise((resolve, reject) => {
    resolve(3);
  });

const promiseArr = [promise1(), promise2(), promise3()];
//PROMISE ALL 
Promise.all(promiseArr).then(
  (data) => {
    console.log("ALL");
  },
  (err) => {
    console.log("NOT ALL");
  }
);
//PROMISE ANY
Promise.any(promiseArr).then(
  (data) => {
    console.log("ALL");
  },
  (err) => {
    console.log("NOT ALL");
  }
);
//PROMISE ALL SETTLED
Promise.allSettled(promiseArr).then(
  (data) => {
    console.log("ALL");
  },
  (err) => {
    console.log("NOT ALL");
  }
);

//PROMISE APPROACH USING THEN
promise1()
  .then((data) => {
    console.log(data);

    promise2()
      .then((data) => {
        console.log(data);

        promise3()
          .then((data) => {
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });

// ASYNC AWAIT

const p1 = async () =>
  new Promise((resolve, reject) => {
    resolve(1);
  });

const p2 = async () =>
  new Promise((resolve, reject) => {
    reject(2);
  });

const p3 = async () =>
  new Promise((resolve, reject) => {
    resolve(3);
  });

// promiseAsync();
const runPromise = async () => {
  const p1Result = await p1().catch((err) => null);
  console.log(p1Result);
  if (!p1Result) {
    return "p1 failed";
  }

  const p2Result = await p2().catch((err) => null);
  if (!p2Result) {
    return "p2 failed";
  }

  const p3Result = await p3().catch((err) => null);
  if (!p3Result) {
    return "p3 failed";
  }

  return "Done";
};

runPromise();

