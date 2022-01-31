var btn = document.querySelectorAll(".drum").length;

// for (i = 0; i < btn; i++) {
//   document.querySelectorAll(".drum")[0].addEventListisner("click", (e) => {
//     e.preventDefault();
//     console.log(e);
//   });
// }

for (var i = 0; i < btn; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var keyText = this.innerHTML;
    playSound(keyText);
    animateButton(keyText);
  })
}

document.addEventListener("keypress", function(e) {
  playSound(e.key);
  animateButton(e.key);
})

function playSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    default: console.log(keyText);
  }
}

function animateButton(currentKey) {
  var activeKey = document.querySelector("." + currentKey);
  activeKey.classList.add("pressed");

  setTimeout(function() {
    activeKey.classList.remove("pressed");
  }, 200);
}
