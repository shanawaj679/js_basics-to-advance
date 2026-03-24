  setTimeout(() => {
    let mul = (a,b)=>a*b;
console.log(mul(2,3))
}, 1000);

let b=setTimeout(() => {
    console.log("timeout");
}, 100000);
 clearTimeout(b);