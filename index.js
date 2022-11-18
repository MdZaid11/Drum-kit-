// document.querySelector("button").addEventListener("click",handleClick);
// function handleClick(){
//   alert('I got clicked');
// }   *** we cam write like this also by passing a function as an input .....
//  or we can do the same thing by writing a anonymous function
// *** anonymous function is a function which does not have a name......
// detecting button press
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHtml = this.innerHTML; //this means which button is got pressed....
    makeSound(buttonInnerHtml);
    makeAnimation(buttonInnerHtml);
  })
}
// detecting keypress..
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  makeAnimation(event.key);
})
//event is a property which tells what function is doing.....
/// key is passed to function makeSound()...........

function makeSound(key) {
  switch (key) {
    case "w":
      var audio1 = new Audio('sounds/tom-1.mp3');
      audio1.play();
      break;
    case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    case "l":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;


  }
}
function makeAnimation(key){
    var activeKey=document.querySelector("."+key);
    activeKey.classList.add("pressed"); //adding a class when key is pressed
    setTimeout(function(){
      activeKey.classList.remove("pressed"); // removing a class after 0.1 sec's;
    },100)

}
function myfun(){
  alert("welcome to dice game ")
}
