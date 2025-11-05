// const changeBgRed =()=>{
//     document.body.firstElementChild.style.background ="red"
// }

// let b= document.body;
// console.log("first child of b is: ", b.firstChild);
// console.log("first Element child of b is: ", b.firstElementChild);


// let t = document.body.firstElementChild.firstElementChild
// console.log(t);
// console.log(t.rows);
// console.log(caption);
// console.log(t.tHead);
// console.log(t.tFoot);
// console.log(t.tHead.firstElementChild);





//searching dom function

//change the card title to red
// let ctitle =document.getElementsByClassName("card-title")[0];
// console.log(ctitle);
// ctitle.style.color = "red"

// let ctitles =document.querySelectorAll(".card-title");
// ctitles[0].style.color = "red"
// ctitles[1].style.color = "blue"
// ctitles[2].style.color = "green"

// console.log(ctitles);
// document.querySelector(".this").style.color = "black";
// document.querySelector(".this").style.background ="red";


// console.log(document.querySelector(".card").getElementsByTagName("a"))


let id1 = document.getElementById("id1");
console.log(id1);
console.log(id1.matches(".class"));
console.log(id1.matches(".box"));
let sp1 =document.getElementById("sp1");
console.log(sp1.closest(".box"));
console.log(id1.contains(sp1));
console.log(sp1.contains(sp1));
console.log(sp1.contains(id1));