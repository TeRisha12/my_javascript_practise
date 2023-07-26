setTimeout(() => {
  console.log("go to shop");
  setTimeout(() => {
    console.log("order meals");
    setTimeout(() => {
      console.log("waiter came");
      setTimeout(() => {
        console.log("order served");
        setTimeout(() => {}, 1000);
      }, 2000);
    }, 1000);
  }, 3000);
}, 4000);
