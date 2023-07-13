let modals = document.querySelector('.modals');
let modal1 = document.querySelector('.modal1');
let modal2 = document.querySelector('.modal2');

//open toggle1 modal
document.addEventListener("click", e => {

    if (!e.target.closest('.header__button')) {
        if (!e.target.closest('.footer-contacts2__button')) {
            return;
        }
    }
    openModal1();
})

//modal1 to modal2
document.addEventListener("click", e => {
    if (!e.target.closest('.modal-reservation__button')) {
        return;
    }
    modal1.classList.remove("active");
    modal2.classList.add("active");
})

//close button modals
document.addEventListener("click", e => {
    if (!e.target.closest('.modal__close')){
        return;
    }
    closeModals();
})

const openModal1 = () => {
    modals.classList.add("active");
    modal1.classList.add("active");
    toggleBody();
}


//toggle all modals
const toggleModals = () => {
    if (modal1.classList.contains("active")
        && modal1.classList.contains("active")){
        modal1.classList.remove("active");
        modals.classList.remove("active");
    } else {
        modal1.classList.add("active");
        modals.classList.add("active");
    }
    toggleBody();
}

//close all modals
const closeModals = () => {
    modal1.classList.remove("active");
    modal2.classList.remove("active");
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