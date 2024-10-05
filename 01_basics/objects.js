//sigleton
//object.create-used for creating objects using constructors
//object literals
const mysym= Symbol("key1");
const jsuser={
    "full name":"Diksha Arora",
    age: 20,
    email:"diksha110@gmail.com",
    //syntax of defining a symbol
    [mysym]: "mykey1",
    greeting:"hello",
    isloggedin: false,
    lastlogindays:["monaday","saturday"]
}
//two ways of acessing the object elements
//. & []
// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser["full name"]);//can only be acessed using square brackets
// console.log(jsuser[mysym])
// //over write
// jsuser.email="lco22395@ccet.ac.in";
//lock or freeze a value
//Object.freeze(jsuser);

//function
jsuser.greeting= function()
{
    console.log("hello js user");
}
jsuser.greetingtwo=function()
{
    console.log("hello js user ,${this.name}")
    console.log(jsuser.greeting)
}


