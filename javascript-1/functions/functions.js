function addi(a,b){
    return a+b;
}
console.log(addi(2,3))

let add= function addition(a,b){
    return a+b;
    console.log(a+b);
}
console.log(add("hi","hello"), typeof add())


 let h=setInterval(() => {
    let o=(c,d)=> c/d;
    console.log(o(2,4));
},1000);
 setTimeout(() => {
    let mul = (a,b)=>a*b;
console.log(mul(2,3))
}, 1000);
setTimeout(() => {
    clearInterval(h);
}, 3000);

let fun=(x,...y)=>{
    console.log(x);
      console.log(y);
};
 fun(1,2,3,4,5,6,7,26,8,46,9,10,11,12,13,14,15);

console.log("hola");