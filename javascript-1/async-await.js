// async function name() {
//      const res=await fetch("url");
//      if(!res.ok){
//         throw new Error("error is fetching status 404/500");
//      }
//      const data = await res.json();
//      return data;
// }
async function apple(){
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        if(!res.ok){
            throw new Error(`fetching error check status ${res.status}`);
        }

        const data = await res.json();
       console.log(data);
        const required=data.forEach((item)=>console.log(`${item.id}\n ${item.name}\n ${item.username}\n${item.email}\n${item.email}\n${item.address}\n${item.address.street}\n${item.address.suite}\n${item.address.city}\n${item.address.zipcode}\n${item.address.geo}\n${item.phone}\n${item.website}\n${item.company}\n${item.company.name}\n${item.company.catchPhrase}\n${item.company.bs}`));
       const imp=data.map(item=>item.id)
       console.log(imp);
       console.log(`${imp.filter(item=>item>5)},\n${imp.filter(item=>item<=5)}`)
    } catch(error){
        console.log(error);
    }

}

apple();
