let readButton;

const addModal = document.querySelector("#addBook");
const addShow = document.querySelector(".addButton");
const addClose = document.querySelector(".addClose");
addShow.addEventListener("click", () => {
  addModal.showModal();
});
addClose.addEventListener("click", () => {
  addModal.close();
});

const library = document.querySelector('.library');
let myLibrary= [ ];

function Book(title, author, pages, genre, read, image){
  this.id = crypto.randomUUID();
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.genre = genre,
  this.read = read==='true',
  this.image = image
};

function addToLibrary(title, author, pages, genre, read, image){
  myLibrary.push(new Book(title, author, pages, genre, read, image));
  let bookID= myLibrary[myLibrary.length - 1].id;

  let bookDiv=document.createElement('div');
  bookDiv.setAttribute('id', bookID);
  bookDiv.classList.add('bookDiv');

  let book=document.createElement('div');
  book.classList.add('book');
  book.setAttribute('style',`background-image:url(${image});`);
  book.setAttribute('data-parentID',`${bookID}`);
  
  let bookTitle=document.createElement('div');
  bookTitle.classList.add('bookTitle');
  bookTitle.textContent= `${title}`;
  
  let bookRead=document.createElement('button');
  bookRead.classList.add('bookRead');
  bookRead.setAttribute('data-parentID',`${bookID}`);
  bookRead.innerHTML = bookReadIcon(read==='true');

  let deleteButton=document.createElement('button');
  deleteButton.classList.add('deleteButton');
  deleteButton.setAttribute('data-parentID',`${bookID}`);
  deleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <title>Delete Book</title>
                        <path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" />
                    </svg>`;

  book.appendChild(bookTitle);
  bookDiv.appendChild(book);
  bookDiv.appendChild(bookRead);
  bookDiv.appendChild(deleteButton);
  library.appendChild(bookDiv);

}

function bookReadIcon(read){
  let readIcon;
  if(read==true){
    readIcon= `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>Read :D</title>
                <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" />
                </svg>`;
  }
  else{
    readIcon=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>Not Read... yet :)</title>
                <path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                </svg>`;
  }
  return readIcon
}

addToLibrary('Percy Jackson and the Lightning Thief', 'Rick Riordan', '416', 'fic', 'true', 'https://m.media-amazon.com/images/I/51LdV0opNvL._SY445_SX342_.jpg');
addToLibrary('Percy Jackson and the Sea of Monsters', 'Rick Riordan', '320', 'fic', 'true', 'https://m.media-amazon.com/images/I/516i14qMwUL._SY445_SX342_.jpg');
addToLibrary("Percy Jackson and the Titan's Curse", 'Rick Riordan', '352', 'fic', 'true', 'https://m.media-amazon.com/images/I/51aWjGY4ViL._SY445_SX342_.jpg');
addToLibrary("Percy Jackson and the Battle of the Labyrinth", 'Rick Riordan', '361', 'fic', 'false', 'https://m.media-amazon.com/images/I/51GbhN5MShL._SY445_SX342_.jpg');
addToLibrary("Percy Jackson and the Last Olympian", 'Rick Riordan', '432', 'fic', 'false', 'https://m.media-amazon.com/images/I/516kzSxA9XL._SY445_SX342_.jpg');

const addForm = document.querySelector(".addForm");
addForm.addEventListener("submit", function(event){
  event.preventDefault();
  const formData = new FormData(this);

  const title = formData.get('title');
  const author = formData.get('author');
  const pages = formData.get('pages');
  const genre = formData.get('genre');
  const read = formData.get('read');
  const image = formData.get('image');

  addToLibrary(title, author, pages, genre, read, image);
  addModal.close();
});


let deleteModal = document.querySelector("#deleteBook");
const deleteClose = document.querySelector(".deleteClose");
let deleteID;
library.addEventListener("click", (event) => {
  if(event.target.closest(".deleteButton")){
    const btn = event.target.closest(".deleteButton");
    deleteModal.showModal();
    deleteID = btn.getAttribute('data-parentID');
  }
});
deleteClose.addEventListener("click", () => {
  deleteModal.close();
});
const deleteCANCEL = document.querySelector(".deleteCANCEL");
const deleteYES = document.querySelector(".deleteYES");
deleteCANCEL.addEventListener("click", () => {
  deleteModal.close();
});
deleteYES.addEventListener("click", () => {
  deleteModal.close();
  document.getElementById(`${deleteID}`).remove();
  let myLibrary2= [ ];
  for(let bookObj of myLibrary){
    if(bookObj.id!=deleteID){
      myLibrary2.push(bookObj);
    }
  }
  myLibrary=myLibrary2;
  deleteModal=undefined;
});


const infoModal = document.querySelector("#bookInfo");
const infoClose = document.querySelector(".infoClose");
const infoReadButton = document.querySelector('.infoReadButton');
const infoReadText = document.querySelector('.infoReadText');
let idread, idtitle, idauthor, idpages, idgenre, idPic, infoID;
library.addEventListener("click", (event) => {
  if(event.target.closest(".book")){
    const button = event.target.closest(".book");
    infoModal.showModal();
    infoID = button.getAttribute('data-parentID');
      for(let bookObj of myLibrary){
        if(bookObj.id==infoID){
          idread=bookObj.read;
          idtitle=bookObj.title;
          idauthor=bookObj.author;
          idpages=bookObj.pages;
          idgenre=bookObj.genre;
          idPic=bookObj.image;
        }
    }
    infoReadButton.innerHTML = bookReadIcon(idread);
    if(idread==true){
      infoReadText.textContent = 'Read :D';
    }
    else{
      infoReadText.textContent = 'Not read... yet :)';
    }

    const infoTitle = document.querySelector('.infoTitle');
    infoTitle.textContent=idtitle;

    const infoAuthor = document.querySelector('.infoAuthor');
    infoAuthor.textContent=idauthor;

    const infoPages = document.querySelector('.infoPages');
    infoPages.textContent=idpages;

    const infoGenre = document.querySelector('.infoGenre');
    infoGenre.textContent=idgenre;

    const infoPic = document.querySelector('.infoPic');
    infoPic.setAttribute('style',`background-image:url(${idPic});`);
  }
});
infoClose.addEventListener("click", () => {
  infoModal.close();

});
infoModal.addEventListener("click", (event) => {
  if(event.target.closest(".infoReadButton")){
      for(let bookObj of myLibrary){
        if(bookObj.id==infoID){
          idread=!(bookObj.read);
          bookObj.read = idread;
          break;
        }
      }
      
    infoReadButton.innerHTML = bookReadIcon(idread);
    if(idread==true){
      infoReadText.textContent = 'Read :D';
      
    }
    else{
      infoReadText.textContent = 'Not Read... yet :)';
    }
  }
});