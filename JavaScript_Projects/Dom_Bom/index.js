// write a program using prompt function to
//take input of age as value from the user 
//  and use alert to tell i=him if he can driv or not
//Question 2 in QA1 use confirm to ask the user if he wants to see the prompt again
//question3 in the previous question use console.error to log
// the error if the age entered is negativ


// let runAgain = true;
// const canDrive = (age) => {
//   return age >= 18 ? true : false;
// };


// while (runAgain) {
//   let age = prompt(" ENter your age ");
//   age = Number.parseInt(age);
//   if (age<0){
//     console.error("please enter the valid age");
//     break;
    
//   }
//   if (canDrive(age)) {
//     alert("you can drive");
//   }
//    else {
//     alert("you can not drive");
//   }
//   runAgain= confirm("do yo want to play again");
// }



// Question 4 write a program to change the
//url to google.com (redirection ) if
//user enters a number greate than 4

// let userNum = prompt("enter a number");
// userNum = Number.parseInt(userNum);
// if (userNum > 4){
//  location.href = "https://google.com"
// }  




//  change the background of the page to yellow,
// red or any other color based on user input through prompt
// let backGround_color = prompt("Enter the color of you choices")
// document.body.style.background =backGround_color ;



console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes);
