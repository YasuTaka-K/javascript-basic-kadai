const date = new Date();
console.log(date.toString());

let year = date.getFullYear();
let month = date.getMonth() + 1;
// console.log(month);
let dates = date.getDate();

console.log(`${year}年${month}月${dates}日`);