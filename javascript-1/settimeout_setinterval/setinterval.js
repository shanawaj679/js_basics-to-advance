let h=setInterval(() => {
    let o=(c,d)=> c/d;
    console.log(o(2,4));
},1000);

setTimeout(() => {
    clearInterval(h);
}, 3000);
