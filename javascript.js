// const myLibrary= [ ];

// function Book(title, author, pages, read){
//     this.title = title,
//     this.author = author,
//     this.pages = pages,
//     this.read = read
// };

// function addToLibrary(form){
//     let
//     myLibrary.push()
// }

// addToLibrary()

const infoModal = document.querySelector(".bookInfo");
const infoShow = document.querySelector(".book");
const infoClose = document.querySelector(".infoClose");
infoShow.addEventListener("click", () => {
  infoModal.showModal();
});
infoClose.addEventListener("click", () => {
  infoModal.close();
});

const addModal = document.querySelector(".addBook");
const addShow = document.querySelector(".add");
const addClose = document.querySelector(".addClose");
addShow.addEventListener("click", () => {
  addModal.showModal();
});
addClose.addEventListener("click", () => {
  addModal.close();
});