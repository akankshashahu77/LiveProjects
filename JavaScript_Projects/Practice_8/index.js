// document.getElementById("google").addEventListener("click", function() {
//  var url = "https://google.com";
//  window.location.href=url;
// })


// Wrtie a javascript program to keep fetching contenents of a websit (every 5sec)
// const fetchContent = async (url) => {
//     con = await  fetch(url);
//     let a = await con.json();
//     return a;

// }
// setInterval(async function(){
//     let url ="https://jsonplaceholder.typicode.com/todos/1"
//     console.log(await fetchContent(url))
// }, 3000)


// Create a glowing bulb effect using classlist toogle metho in js
setInterval( async function () {
    document.querySelector("#buld").classList.toggle("buld")
}, 300)

