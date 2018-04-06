

let logOutButton = document.querySelector('.logOut')
logOutButton.addEventListener('click', function(){
  alert('hi')
})



const saveNotes = () => {
  let notesText = notes.innerHTML;
  localStorage.setItem('notes', JSON.stringify(notesText));
}

const retrieveNotes = () => {
  let savedNotes = localStorage.getItem('notes');
  let parseNotes = ('savedNotes', JSON.parse(savedNotes));
  textBoxMaker(parseNotes)
}

const textBoxMaker = (notes) => {
  let notesBox = document.querySelector('.notesBox');
  notesBox.innerHTML = notes;
}

const removePlaceholder = () => {
  let placeholder = document.querySelector('.placeholder')
  placeholder.style.display = 'none'
}

let notes = document.querySelector('.notesBox');
notes.addEventListener('input', saveNotes)
notes.addEventListener('focus', removePlaceholder)

retrieveNotes()