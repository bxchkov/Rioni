// Modals //

let modals = document.querySelector('.modals');
let modalReservation = document.querySelector('.modal-reservation');
let modalSuccess = document.querySelector('.modal-success');

//open Modal Reservation
document.addEventListener("click", e => {

    if (!e.target.closest('.header__button')) {
        if (!e.target.closest('.footer-contacts2__button')) {
            if (!e.target.closest('.banner__button')) {
                return;
            }
        }
    }
    openModalReservation();
})

//modalReservation to modalSuccess
document.addEventListener("click", e => {
    if (!e.target.closest('.modal-reservation__button')) {
        return;
    }
    modalReservation.classList.remove("active");
    modalSuccess.classList.add("active");
})

//close/toMain button
document.addEventListener("click", e => {
    if (!e.target.closest('.modal__close-button')){
        if (!e.target.closest('.modal-gratitude__button')){
            return;
        }
    }
    closeModals();
})

const openModalReservation = () => {
    modals.classList.add("active");
    modalReservation.classList.add("active");
    toggleBody();
}

//close all modals
const closeModals = () => {
    modalReservation.classList.remove("active");
    modalSuccess.classList.remove("active");
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

// products about //

let products = document.querySelectorAll(".product-card");

//add active class
document.addEventListener("click", e=>{
    if (!e.target.closest(".product-card__more")) {
        return;
    }
    let product = e.target.closest(".product-card");
    productToggle(product);
})

//close button
document.addEventListener("click", e=>{
    if (!e.target.closest(".product-card__close-icon")) {
        return;
    }
    let product = e.target.closest(".product-card");
    product.classList.remove("active");
})

let prevProduct;
const productToggle = (product) => {
    if (prevProduct){
        if (prevProduct !== product) {
            prevProduct.classList.remove("active");
        }
    }
    if (!product.classList.contains("active")) {
        product.classList.add("active");
        prevProduct = product;
    } else {
        product.classList.remove("active");
    }
}

// input-list //

document.addEventListener("click", e=> {
    if (!e.target.closest(".list")){
        return;
    }
    let list = e.target.closest(".list");
    listToggle(list);
})

document.addEventListener("click", e=> {
    if (!e.target.closest(".list__item")){
        return;
    }
    let listItem = e.target.closest(".list__item");
    let listTitle = listItem.closest(".list").querySelector(".list__title");
    listChooseItem(listTitle, listItem);
})

const listToggle = (list) => {
    if (!list.classList.contains("active")) {
        list.classList.add("active");
    } else {
        list.classList.remove("active");
    }
}

const listChooseItem = (listTitle, listItem) => {
    listTitle.innerHTML = listItem.innerHTML;
}

// reservation form checkbox //

document.addEventListener("click", e=>{
    console.log(e.target);
    if (!e.target.closest(".reservation-form-consent__checkbox")){
        return
    }
    let checkbox = e.target.closest(".reservation-form-consent");
    checkboxToggle(checkbox);
})

const checkboxToggle = (checkbox) => {
    // console.log(checkbox);
    if (!checkbox.classList.contains("active")){
        checkbox.classList.add("active");
    } else {
        checkbox.classList.remove("active");
    }
}


