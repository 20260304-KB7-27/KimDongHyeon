const yesPizza = true;
const pizza = new Promise((resolve, reject) => {
  if (!yesPizza) {
    reject(`피자를 주문하지 않았습니다.`);
    return;
  }
  resolve(`피자를 주문했습니다.`);
});

pizza.then((resulte) => console.log(resulte)).catch((err) => console.log(err));
