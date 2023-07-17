// Modals //

let modals = document.querySelector('.modals');
let modalReservation = document.querySelector('.modal-reservation');
let modalSuccess = document.querySelector('.modal-gratitude');

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
    if (!e.target.closest(".product-card__button")) {
        return;
    }
    let product = e.target.closest(".product-card");
    console.log('a');
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
    if (!e.target.closest(".list") || e.target.closest(".list.active")){
        return;
    }
    document.querySelectorAll(".list.active").forEach(item=>{
        item.classList.remove("active");
    })
    let list = e.target.closest(".list");
    list.classList.toggle("active");
})

document.addEventListener("click", e=> {
    const listItem = e.target.closest(".list.active .list__item");
    if (!listItem){
        return;
    }
    const list = e.target.closest(".list.active");
    const input = list.querySelector(".list__input")
    if(input){
        input.value = listItem.innerText;
        input.dispatchEvent(new Event("change",{bubbles:true}));
    }
})
document.addEventListener("change",e=>{
    const input = e.target.closest(".list.active .list__input");
    console.log(input)
    if(!input){
        return;
    }
    const list = input.closest(".list.active");
    const title = list.querySelector(".list__title");
    title.innerText = input.value;
    list.classList.remove("active");
})
// reservation form checkbox //

document.addEventListener("click", e=>{
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

// header menu

document.addEventListener("click", e=> {
    if (!e.target.closest(".header")){
        return
    }
    let menuButton = e.target.closest(".header-menu");
    let backgroundMenu = e.target.closest(".header-menu").querySelector(".header-menu__background");
    backgroundMenu.classList.toggle("active");
    menuButton.classList.toggle("active");
})


