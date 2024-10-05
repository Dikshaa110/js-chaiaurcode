function saymyname()
{
    console.log("diksha")
}
saymyname()
function addtwonos(number1,number2)
{
    return(number1+number2)
}
const result = addtwonos(3,4)
console.log(result);

function loginusermessage(username)
{  if(username===undefined)
 {    console.log("please enter username")
 }
    return `${username} just logged in`;
}
console.log(loginusermessage("diksha"))

function calculatecartprice(num1)
{
    return num1
}
//using rest operator

function calculatecartprice(...num1)
{
    return num1;
}
console.log(calculatecartprice(200,400,500,2000));
const user={
    username: "diksha",
    price: 199
}

function handleobject(anyobject)
{
console.log(`username is ${anyobject.username} and price is${anyobject.price}`)
}

handleobject(user);

const mynewarr=[200,400,100,600]
function secondvalue(getarray)
{
    return getarray[2];
}

console.log(secondvalue(mynewarr));