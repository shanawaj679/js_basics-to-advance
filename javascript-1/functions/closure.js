let a=()=>{
    let g=10;
    let b=()=>{
        let result=0;
        let c=20;
        result=g+c;
        console.log(result);   // closure goes back to parent function to fetch some data 
    }
    b();
}
a();