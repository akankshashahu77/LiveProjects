// console.log("Start")
// setTimeout(function() {
//     console.log("Hey T am Good");
// }, 3000)
// console.log("END");

// Callbacks
function loadScript(srcUrl, callback) {
  var script = document.createElement("script");
//   console.log(script);
  script.src = srcUrl;
  script.onload = function () {
    console.log("Loaded script with src: " + srcUrl);
    callback(null, srcUrl);
  };
  script.onerror = function(){
    console.log("error loading with src " + srcUrl);
    callback(new Error("Src got some error"));
  }
  document.body.appendChild(script);
}

function hello (error, srcUrl){
  if(error){
    console.log(error);
    return
  }
  alert("hello world" + srcUrl)
}
function goodmorning(error, srcUrl){
  if(error){
    console.log(error);
    return
  }
  alert("Good Morning" + srcUrl)
}
loadScript(
  "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
, hello);










// setTimeout(function (){
// console.log("Timer")
// }, 5000)

// function x(y){
// console.log("x");
// y();
// }
// x( function y(){
// console.log("y")
// })