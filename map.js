let a=[1,10,3,4,8,6,7,2,9,5];
let c=a.map((n)=>n*2);
// let d=a.map((n,z) =>n*2 + z+1) map returns values 
let d=a.map((n,z) =>{return n*2 + z+1})
console.log(d);
console.log(c);
a.forEach(n=>console.log(n*2));
console.log(a);

