const user = {
    name : "Evandro",
    age : "15",
    company: "github" 
}

const { age, ...rest} = user;

console.log(age);
console.log(rest);

const numbers = [1,2,3,4,5,6,7,8,9];

const [a, b, ...c]= numbers;

console.log(a);
console.log(b);
console.log(c);


function sum(...params){
    return params.reduce((total,next)=> total + next);
}

console.log(sum(a,b));
