let a=[];
a.push(10);
console.log(a);
console.log(typeof a);
a.push(20,30,40,50,60,70,80,90,100,bg={name:"js",version:"ES6+",usage:"web language"});
a.splice(2,3);
for(let i=0;i<a.length;i++){
    console.log(a[i])
}
let b=a.indexOf(bg);
console.log(b);
a[7].name="javascript";
console.log(a[7]);


