
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
let link = document.querySelector('.link');
let snippet = document.querySelector('.snippet');
let keyword = document.querySelector('.keyword');
let mod1 = document.querySelector('.mod1')


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
  link.style.display = 'block'
  snippet.style.display = 'none'
  keyword.style.display = 'none'
}

const showSnipped = () => {
  snippet.style.display = 'block'
  link.style.display = 'none'
  keyword.style.display = 'none'
}

const showKeyword = () => {
  keyword.style.display = 'block'
  link.style.display = 'none'
  snippet.style.display = 'none'
}

const saveLinks = () => {
  let linkValue = urlInput.value;
  var createListItem =  document.createElement("li");
  createListItem.innerHTML = linkValue;
  urlList.append(createListItem)
  clearInput()
}

const saveSnippet = () => {
  let snippetValue = snipInput.value;
  snippetList.append(`<li> ${snippetValue} </li>`)
  clearInput()
}

const saveKeyword = () => {
  let keyValue = keyInput.value;
  keyList.append(`<li> ${keyValue} </li>`)
  clearInput()
}

const clearInput = () => {
  urlInput.value = '';
  snipInput.value = '';
  keyInput.value = '';
}

const goToNotes = () => {
   keyword.style.display = 'none'
  link.style.display = 'none'
  snippet.style.display = 'none'
}

mod1.addEventListener('click', goToNotes)
linksBox.addEventListener('click', showLink)
snippetBox.addEventListener('click', showSnipped)
keywordBox.addEventListener('click', showKeyword)
saveUrl.addEventListener('click', saveLinks)
saveSnip.addEventListener('click', saveSnippet)
saveKey.addEventListener('click', saveKeyword)

let notes = document.querySelector('.notesBox');
notes.addEventListener('input', saveNotes)


retrieveNotes()