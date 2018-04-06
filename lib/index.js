
let linksBox = document.querySelector('.linkTab')
let snippetBox = document.querySelector('.snippetTab')
let keywordBox = document.querySelector('.keyTab')
let urlInput = document.querySelector('.linkInput')
let saveUrl = document.querySelector('.saveUrl')
let urlList = document.querySelector('.links')
let snipInput = document.querySelector('.snippetInput')
let saveSnip = document.querySelector('.saveSnippet')
let snippetList = document.querySelector('.snippets')
let keyInput = document.querySelector('.keyInput')
let saveKey = document.querySelector('.saveKey')
let keyList = document.querySelector('.keywords')

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

const showLink = () => {
  let link = document.querySelector('.link');
  link.style.display = 'block'
}

const showSnipped = () => {
  let snippet = document.querySelector('.snippet');
  snippet.style.display = 'block'
}

const showKeyword = () => {
  let keyword = document.querySelector('.keyword');
  keyword.style.display = 'block'
}

const saveLinks = () => {
  let linkValue = urlInput.value;
  urlList.append(`<li> ${linkValue} </li>`)
}

const saveSnippet = () => {
  let snippetValue = snipInput.value;
  snippetList.append(`<li> ${snippetValue} </li>`)
}

const saveKeyword = () => {
  let keyValue = keyInput.value;
  keyList.append(`<li> ${keyValue} </li>`)
}

linksBox.addEventListener('click', showLink)
snippetBox.addEventListener('click', showSnipped)
keywordBox.addEventListener('click', showKeyword)
saveUrl.addEventListener('click', saveLinks)
saveSnip.addEventListener('click', saveSnippet)
saveKey.addEventListener('click', saveKeyword)

let notes = document.querySelector('.notesBox');
notes.addEventListener('input', saveNotes)


retrieveNotes()