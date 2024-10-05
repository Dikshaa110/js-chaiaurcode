const user={
    username: "diksha",
    price: "999",
    welcomemessage: function()
    {
      console.log(`${this.username}, welcome to website`)  
    }
}
user.welcomemessage( );
user.username="sam";
user.welcomemessage( );
// function chai()
// { let username="kartik"
//   console.log(this.username);
// }
// chai()
const add= (n1,n2)=>
{return n1+n2;
}
//implicit return arrow function
const addtwo=(n1,n2)=>(n1+n2)
console.log(add(8,9));
console.log(addtwo(8,9));