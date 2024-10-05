const array1 = ["marvel","naruto","anime"," comics"];
const array2=["KKKG", "RRR", "DDLJ"];
console.log(array1.push(array2));
console.log(array1.concat(array2));
//spreading operator
const new_array=[...array1, ...array2];
console.log(new_array);
const another_array=[1,2,3,[7,8,9],4,5,6, ];
const next_array= another_array.flat(Infinity);
console.log(next_array);
let score1=100;
let score2=200;
let score3= 300;
console.log(Array.of(score1,score2,score3));
