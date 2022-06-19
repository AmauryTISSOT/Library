const btn = document.querySelector('.add-button');
const modal = document.querySelector('.modal');
const closeSpan = document.querySelector('#close');
const divBookList = document.querySelector('.book-list');
const trash = document.querySelector('.trash-icon');
const form = document.querySelector('form');
const submit = document.querySelector('.submit');
const getTitle = document.querySelector('#get-title');
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
    const divClone = divBookList.cloneNode(true);
    divClone.id = newId;
    document.body.appendChild(divClone);
    divBookList.style.display = "grid";
    divClone.style.display = "grid";
}

// Function who delete the new book-list

const deleteBookList = () => {
    trash.addEventListener('click', () => {
        divBookList.style.display = "none";
        divClone.style.display= "none";
})};


// Function listener submit button

const submitBtn = () =>{
    submit.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(getTitle.value)})
};


// Main function

const main = () => {
    btnAdd();
    closeBtn();
    windowCloseModal();
    deleteBookList();
    submitBtn();
    //newBookDisplay(1);
}

main();