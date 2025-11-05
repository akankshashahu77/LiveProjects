// const nameq = "Akanksha";
// console.log(nameq.length);
// console.log(nameq.toUpperCase());
// console.log(nameq.toLowerCase());
// console.log(nameq.slice(2,8));
// console.log(nameq.slice(2));
// console.log(nameq.replace("Aka", "h"));

// let friend="Naman";
// console.log(nameq.concat("is a friend of ",friend))

// let friend2 ="        Meena   " ;
// console.log(friend2)
// console.log(friend2.trim());


// let friend3="shivika";
// console.log(friend3[0]);

//Use a for loop to print a string

// for(let i =0; i< friend3.length; i++){
//     console.log(friend3[i]);
// }


// Explore includes startWith and endsWith functions of a string 

const sentnece="The quick brown fox jumps over the lazy dog.";
const word="fox";
console.log(sentnece.includes(word));
console.log(`The Word "${word}" ${sentnece.includes(word) ? 'is' : 'is noy'} in the sentence`)
console.log(sentnece.toLowerCase());

let str2 = "Please give RS 1000";
let  amount =Number.parseInt(str2.slice("Please give RS ".length));
console.log(typeof(amount) , amount);
