// QuerySelector variables

const btn = document.querySelector('.add-button');
const modal = document.querySelector('.modal');
const closeSpan = document.querySelector('#close');
const divBookList = document.querySelector('.book-list');
const form = document.querySelector('form');
const submit = document.querySelector('.submit');
const getTitle = document.querySelector('#get-title');
const getAuthor = document.querySelector('#get-author');
const getNumberOfPages = document.querySelector('#get-pages');
const getReading = document.querySelector('#get-read');
let divClone = divBookList.cloneNode(true);

// Data variables

let titleInfo;
let authorInfo;
let numberOfPagesInfo;
let readingInfo;
let idNumber = 0;
let idDelete;

// Array

let myLibrary = []

// Function who open the modal popup

const btnAdd = () => {
    btn.addEventListener('click', () => modal.style.display = 'block');
}

// Function who close the modal popup when the user click on <span> (x), close the modal

const closeBtn = () => {
    closeSpan.addEventListener('click', () => modal.style.display = "none");
}

// Function who close the modal popup when the user click on the window

const windowCloseModal = () => {
    window.addEventListener('click', () => {
        if (event.target == modal) {
              modal.style.display = "none";
    }
})};


// Function who show the book-list class and create a new div

const newBookDisplay = (newId) => {
    let divClone = divBookList.cloneNode(true);
    divClone.id = `A${newId}`;
    divClone.querySelector('.title-display').textContent = titleInfo;
    divClone.querySelector('.author-display').textContent = authorInfo;
    divClone.querySelector('.number-of-pages-display').textContent = numberOfPagesInfo;
    divClone.querySelector('.reading-status-display').textContent = readingInfo;
    divClone.querySelector('.trash-png').id = newId;
    document.body.appendChild(divClone);
    //divBookList.style.display = "grid";
    divClone.style.display = "grid";
}

// Function who delete the new book-list

const deleteBookList = () => {
    window.addEventListener('click', (event) => {
    let classClicked = event.target.classList.value
    if (classClicked === 'trash-png') {
        document.body.appendChild(divClone)
        document.querySelector(`#${idDelete}`).remove();
    }
    })

};

// Function to get the ID of the clicked element

const getID = () => {
    window.addEventListener('click', (event) => { 
    idDelete = `A${event.target.id}`;
    console.log(idDelete)})

}


// Function listener submit button + get form value

const submitBtn = () =>{
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        titleInfo = getTitle.value;
        authorInfo = getAuthor.value;
        numberOfPagesInfo = getNumberOfPages.value;
        readingInfo = getReading.value;
        //console.log(titleInfo + authorInfo + numberOfPagesInfo + readingInfo)
        addBookToLibrary();
        console.table(myLibrary);
        modal.style.display = "none";
        cleanFormInput();
        newBookDisplay(idNumber);
        idNumber ++;
        deleteBookList();

    })};

// Function to validate form

const validateForm = () => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log('azerty');
    })
}



// Book list constructor

function Book(title, author, numberOfPages, readingStatus) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.readingStatus = readingStatus;
}

// Function who add book info to the library array

function addBookToLibrary () {
    let newBook = new Book(titleInfo, authorInfo, numberOfPagesInfo, readingInfo);
    myLibrary.push(newBook);
}

// Function who "clean" the form input;

function cleanFormInput () {
    getTitle.value = '';
    getAuthor.value = '';
    getNumberOfPages.value = '';
}


// Main function

const main = () => {
    btnAdd();
    closeBtn();
    windowCloseModal();
    getID();
    deleteBookList();
    submitBtn();
}

main();

