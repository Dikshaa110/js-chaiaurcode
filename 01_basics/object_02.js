//sigleton - using constructor

const tinderuser= new Object();
tinderuser.id="123abc"
tinderuser.name="sam"
tinderuser.isloggetin=false
console.log(tinderuser);
//objects inside the objects
const regularuser={
    emial:"xxx@gmail.com",
    fullname:{
        userfullname:{
            firstname:"diksha",
            lastname:"Arora"
        }
    }
}
console.log(regularuser.fullname.userfullname)
 const obj1={1:"a",2:"b"}
 const obj2={3:"a",4:"b"}

//const obj3= Object.assign(obj1,obj2)
const obj3={...obj1 , ...obj2};
console.log(obj3);

//destructuring of object
const course=
{
    coursename: "js",
    price:"999",
    courseinstructor:"hitesh"
}
const{price,courseinstructor}=course;
console.log(price)
//api- json format(java script object notation)
