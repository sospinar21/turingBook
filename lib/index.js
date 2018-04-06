


let logOutButton = document.querySelector('.logOut')
logOutButton.addEventListener('click', function(){
  alert('hi')
})



const saveNotes = () => {
  let notesText = notes.innerText;
  localStorage.setItem('notes', JSON.stringify(notesText));
}

const retrieveNotes = () => {
  let savedNotes = localStorage.getItem('notes');
  let parseNotes = ('savedNotes', JSON.parse(savedNotes));
  textBoxMaker(parseNotes)
}

const textBoxMaker = (notes) => {
  const textBox = document.createElement('div');
  textBox.className = 'notesBox';
  textBox.textContent = 'parseNotes'
  
}

let notes = document.querySelector('.notesBox');
notes.addEventListener('input', saveNotes)
