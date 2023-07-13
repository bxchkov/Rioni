let modals = document.querySelector('.modals');
let modalReservation = document.querySelector('.modal-reservation');
let modalSuccess = document.querySelector('.modal-success');

//open toggle1 modal
document.addEventListener("click", e => {

    if (!e.target.closest('.header__button')) {
        if (!e.target.closest('.footer-contacts2__button')) {
            return;
        }
    }
    openModalReservation();
})

//modalReservation to modalReservation
document.addEventListener("click", e => {
    if (!e.target.closest('.modal-reservation__button')) {
        return;
    }
    modalReservation.classList.remove("active");
    modalSuccess.classList.add("active");
})

//close button modals
document.addEventListener("click", e => {
    if (!e.target.closest('.modal__close')){
        return;
    }
    closeModals();
})

const openModalReservation = () => {
    modals.classList.add("active");
    modalReservation.classList.add("active");
    toggleBody();
}


//toggle all modals
const toggleModals = () => {
    if (modalReservation.classList.contains("active")
        && modalReservation.classList.contains("active")){
        modalReservation.classList.remove("active");
        modals.classList.remove("active");
    } else {
        modalReservation.classList.add("active");
        modals.classList.add("active");
    }
    toggleBody();
}

//close all modals
const closeModals = () => {
    modalReservation.classList.remove("active");
    modalReservation.classList.remove("active");
    modals.classList.remove("active");
    toggleBody();
}

//toggle body scrollbar (overflow)
const toggleBody = () => {
    let html =  document.querySelector("html");
    if (modals.classList.contains("active")){
       html.classList.add("hidden");
    } else {
        html.classList.remove("hidden");
    }
}




//self toggle
const activeToggle = (obj)=> {
    if (obj.classList.contains("active")) {
        obj.classList.remove("active");
    } else {
        obj.classList.add("active");
    }
}