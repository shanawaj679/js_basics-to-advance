
function reverse(str){
   let reversed=str.trim().split(/\s+/).reverse().join(" ");
     console.log(`${reversed}`);
}

function reversed(str){
    let reversed=str.trim().split("").reverse().join("");
    console.log(`${reversed}`);
}
reverse("hello world");
reversed("hello world");