// Create a digital seconds clock using setInterval and date object in javascript 
// the date object can be used to get the date time hours and seconds which can be 
// updated using set interval try to keep the UI good looking l

function updateClock(){
let a = new Date();
let h= a.getHours();
let m = a.getMinutes();
let s= a.getSeconds();
let d =a.getDate();
console.log(a)
console.log(h,m,s,d);
const currentTime =`${h}:${m}:${s}`;
document.getElementById("clock").textContent = currentTime;
}
updateClock();
setInterval(updateClock, 1000)


