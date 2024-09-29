const max = -9;
const min = -3;

let ansArray = [];

const printList = (max, min) => {
  for (let i = min; i <= max; i++) {
    ansArray.push(i);
  }
  console.log(ansArray);
};

printList(max, min);
