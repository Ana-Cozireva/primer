
const button = document.querySelector('.section__button');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
const modalDisplay = document.querySelector('.modal__display');
const body = document.body;
button.addEventListener("click", () => {
    modal.classList.add('active');
    body.classList.add('lock');
});
modalClose.addEventListener("click", () => {
    modal.classList.remove('active');
    body.classList.remove('lock');
});
modalDisplay.addEventListener('click' , (event) => {
    if(!event.target.classList.contains('modal__absolute')){
        modal.classList.remove('active');
        body.classList.remove('lock');
    }
    console.log(event.target);
});
