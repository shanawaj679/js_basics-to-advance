//normal function we all know 
function addi(a,b){
    return a+b;
}
console.log(addi(2,3))

//function expression === storing function inside variable
let add= function addition(a,b){
    return a+b;
    console.log(a+b);// this will not run we saw in c lang also when return comes the function will exit from there itself
}
console.log(add("hi","hello"), typeof add())
