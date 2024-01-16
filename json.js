const user = { id: 1, name: "ali", job: "actor" };
// const stringify = JSON.stringify(user);
// console.log(stringify);
// console.log(user);

const shop = {
  onwer: "ali",
  address: {
    street: "kochu khet vuter goli",
    city: "ranbir",
    country: "BD",
  },
  product: ["laptop", "mic", "keybord", "monitar"],
  revenew: 450000,
  isOpen: true,
  isNew: false,
};

const stringify = JSON.stringify(shop);
console.log(stringify);
