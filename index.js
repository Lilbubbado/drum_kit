function playDrum(key) {
  switch (key) {
    case 'w':
        let tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
      break;
  
      case 'a':
        let tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
      break;

      case 's':
        let tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
      break;

      case 'd':
        let tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
      break;

      case 'j':
        let snare = new Audio('sounds/snare.mp3');
        snare.play();
      break;

      case 'k':
        let crash = new Audio('sounds/crash.mp3');
        crash.play();
      break;

      case 'l':
        let kickBass = new Audio('sounds/kick-bass.mp3');
        kickBass.play();
      break;

    default:
      console.log(buttonInnerHTML)
      break;
  }
}



let buttons = document.querySelectorAll('.drum');

for (i of buttons) {
  i.addEventListener('click', function() {
    let buttonInnerHTML = this.innerHTML;
    playDrum(buttonInnerHTML)
  });

  i.addEventListener("keydown", function() {
    playDrum(event.key)
  });
}





// Use keydown, not keypress.