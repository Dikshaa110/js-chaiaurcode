// for of loop used when u have lot of objects inside an array
//[{},{},{}]
const arr=[1,2,3,4,5]
for (const num of arr) {
  console.log(num);  
}
const greetings= "hello world"
for(const greet of greetings)
{   if(greet==" ")
{
    continue;
}
    console.log(`each char is ${greet}`)
}
//maps- only stores unique values
const map=new Map()
map.set('IN',"India")
map.set('USA',"United states of america")
console.log(map);
for(const [key,value] of map)
{
    console.log(key, ':-', value)
}

const myobj= {
    'game1': 'NFS',
    'game2': 'spiderman'
}

// for(const [key,value] of myobj)
// {
//     console.log() // will not be working under objects
// }

// forin loop used in objects
for(const key in myobj)
{
   console.log(myobj[key]) 
}
const program=['js','ruby','cpp','java']
for(const key in program)
{
    console.log(program[key])
}
// for each loop
const programming=['js','ruby','cpp','java']
programming.forEach(function (item){
    console.log(item);
})

function printme(item)
{
    console.log(item)
}
programming.forEach(printme)// refrence of function
// what the for each loops accepts
programming.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})