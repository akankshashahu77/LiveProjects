let decreaseBtn = document.getElementById("decreaseBtn");
let resetBtn = document.getElementById("resetBtn");
let increaseBtn = document.getElementById("increaseBtn");
let countLabel = document.getElementById("count");

let count = 0 ;

 function increment(){
    count++;
    countLabel.textContent =count
}
 function decrement(){
    count--;
    countLabel.textContent =count
}
function reset(){
    count =0 ;
    countLabel.textContent = count
}