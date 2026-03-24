
let work=()=>{
    console.log("work is in progress");
}
work(); //normal arrow function stored inside a variable
(()=>{
    console.log("work is imp.");
}) (); //self invoking function and also called as iife(immediatly invoked function expression)

 
let fun=(x,...y)=>{ 
    //spread operator in functions 
    console.log(x);
      console.log(y);
};
 fun(1,2,3,4,5,6,7,26,8,46,9,10,11,12,13,14,15);

console.log("hola");