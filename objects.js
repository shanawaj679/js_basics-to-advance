let a={
    name:{
        first_name:"vinay",
        last_name:"v"
    },
    age:21,
    dob:{
        date:21,
        month:4,
        year:2005
    },
    hobbies:["coding","gambling","gaming"],
    address:{
        city:"chintamani",
        road:'main road',
        state:"karnataka",
        country:"india",
    },
}
// console.log(a);
console.log(a.name.first_name);
console.log(a.dob.month , a.hobbies.length , a.hobbies[1] );
a.address.pincode=563125;
console.log(a.address);
a.is_alive={
    value:true,
}
console.log(a);

