let obj = {
  name: "Pratima",
  age: 22,
  address: "Dang Tulsipur",
};
let StringfieldObj = JSON.stringify(obj);
console.log(stringfieldObj);
let normalObj = JSON.parse(strinfieldObj);
console.log(normalObj);
