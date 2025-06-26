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

const addModal = document.querySelector("#addBook");
const addShow = document.querySelector(".addButton");
const addClose = document.querySelector(".addClose");
addShow.addEventListener("click", () => {
  addModal.showModal();
});
addClose.addEventListener("click", () => {
  addModal.close();
});



const deleteModal = document.querySelector("#deleteBook");
const deleteShow = document.querySelector(".deleteButton");
const deleteClose = document.querySelector(".deleteClose");
deleteShow.addEventListener("click", () => {
  deleteModal.showModal();
});
deleteClose.addEventListener("click", () => {
  deleteModal.close();
});


const infoModal = document.querySelector("#bookInfo");
const infoShow = document.querySelector(".book");
const infoClose = document.querySelector(".infoClose");
infoShow.addEventListener("click", () => {
  infoModal.showModal();
});
infoClose.addEventListener("click", () => {
  infoModal.close();
});
