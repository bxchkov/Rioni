// Close button modal
let modal = document.querySelector('.modal');
let modalReservation = document.querySelector('.modal-reservation');
let modalGratitude = document.querySelector('.modal-gratitude');
document.addEventListener("click", e => {
    let closeButton = e.target.closest('.modal__close');
    if (!closeButton)
        return
    modalCloseAll();
})

//modalReservation-modalGratitude
document.addEventListener("click", e => {
    if (!e.target.closest('.button')){
        return;
    }
    let closeButton = e.target.closest('.button');
    if (closeButton.innerText !== "Забронировать столик")
        return
    modalToggleAll();
})

// //modalReservation-modalGratitude
// document.addEventListener("click", e => {
//     let closeButton = e.target.closest('.button');
//     if (closeButton.innerText !== "Забронировать столик")
//         return
//     modalToggleAll();
// })

const modalCloseAll = () => {
    modalReservation.classList.remove("active");
    modalGratitude.classList.remove("active");
    modal.classList.remove("active");
    bodyToggle();
}

const modalToggleAll = () => {
    if (modalReservation.classList.contains("active")
        && modalReservation.classList.contains("active")){
        modalReservation.classList.remove("active");
        modal.classList.remove("active");
    } else {
        modalReservation.classList.add("active");
        modal.classList.add("active");
    }
    bodyToggle();
}

//bodyToggle
const bodyToggle = () => {
    let html =  document.querySelector("html");
    if (modal.classList.contains("active")){
       html.classList.add("hidden");
    } else {
        html.classList.remove("hidden");
    }
}

// self toggle
const activeToggle = (obj)=> {
    if (obj.classList.contains("active")) {
        obj.classList.remove("active");
    } else {
        obj.classList.add("active");
    }
}