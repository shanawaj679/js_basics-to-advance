let a=[1,2,3,4,5,6,7,8,9.0,10,20,395,7859,2938,985,73,48202,579,729,2859,5729,85,2567,8353,1,77,484,2878,26,3879,952,65]
a.forEach( cv => console.log(cv));
let beta= a.filter(bg => bg%2===0);
console.log(beta);
a.filter(bh => {return bh%2===0})
let hua=a.map(ui=>ui%2);
console.log(hua);
let y=a.forEach(bh=> bh*2);
console.log(y);
