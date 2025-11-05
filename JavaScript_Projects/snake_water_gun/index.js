//use javascript to create a game of snake water abd gun the game should ask you to enter
// s,w,or G .The computer should be able to randomly generate s, w or G and decalre win or loss using
//slert use confrim and prompt wherever required
let user = prompt("ENter S, W or G");
let cpuI =  Math.floor(Math.random() * 3);
let cpu = ["S", "W", "G"][cpuI];
const match =()=>{
    if(cpu === user){
        return "Nobody"
    }
    else if(cpu === "S" && user === "W"){
        return "cpu"
    }
    else if(cpu === "S" && user === "G"){
        return "user"
    }
    else if(cpu === "G" && user === "W"){
        return "user"
    }
    else if(cpu === "G" && user === "S"){
        return "cpu"
    }
    else if(cpu === "W" && user === "S"){
        return "user"
    }
    else if(cpu === "W" && user === "G"){
        return "cpu"
    }
}

let result = match(cpu,user);
document.write(`CPU : ${cpu} <br> User: ${result} <br>The winner is : ${result.toUpperCase()}`);