
import Typed from 'typed.js';


let signUpButton = document.querySelector('.signUp')
signUpButton.addEventListener('cick', function(){
  alert('hi')
})




var options = {
  strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
  typeSpeed: 40
}

var typed = new Typed(".element", options);

