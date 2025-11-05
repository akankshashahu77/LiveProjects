// create a navbar and change the color of first element to red
let firstEment = document.getElementsByTagName("nav")[0];
// firstEment.style.color="red"
// firstEment.firstElementChild.style.color="green"
// firstEment.lastElementChild.style.color="green"
// console.log(firstEment);
let firstElement1 = document.getElementsByTagName("li");
Array.from(firstElement1).forEach((element) => {
    element.style.background = "cyan";
});
