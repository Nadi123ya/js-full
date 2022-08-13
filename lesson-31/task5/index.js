export const delay = (period) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, period);
  });

delay(3000).then(() => console.log("Done"));
