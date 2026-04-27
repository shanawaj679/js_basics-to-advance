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

function t1(){
console.log("t1 is called");
t2();
}
function t2(){
console.log("t2 is called")
}
t1();

function t3(task4){
    console.log("t3 is called");
    task4();
}
function t4(){
    console.log("t4 is called");
}
t3(t4);//callback function 