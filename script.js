const btn = document.querySelector('.add-button');
const modal = document.querySelector('.modal');
const closeSpan = document.querySelector('#close')

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

btnAdd();
closeBtn();
windowCloseModal();