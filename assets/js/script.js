// Modals //
    let html = document.querySelector("html");
    let background = document.querySelector('.background');
    let modalReservation = document.querySelector('.modal-reservation');
    let modalGratitude = document.querySelector('.modal-gratitude');

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

    //open Modal Gratitude
    document.addEventListener("click", e => {
        if (!e.target.closest('.reservation-form__button')) {
            return;
        }
        openModalGratitude();
    })

    //close modals / toMain button
    document.addEventListener("click", e => {
        if (!e.target.closest('.modal-gratitude__button')) {
            if (!e.target.closest('.modal__close-button')) {
                return;
            }
        }
        closeModals();
    })

    const openModalReservation = () => {
        background.classList.add("active");
        modalReservation.classList.add("active");
        html.classList.toggle("hidden");
    }
    const openModalGratitude = () => {

        if (!background.classList.contains("active")){
            background.classList.add("active");
        }
        modalReservation.classList.remove("active");
        modalGratitude.classList.add("active");
        if (!html.classList.contains("hidden")){
            html.classList.add("hidden");
        }
    }
    const closeModals = () => {
        modalReservation.classList.remove("active");
        modalGratitude.classList.remove("active");
        background.classList.remove("active");
        html.classList.toggle("hidden");
    }

// header menu //
    document.addEventListener("click", e => {
        if (!e.target.closest(".header-menu")) {
            return
        }
        let menuButton = e.target.closest(".header-menu");
        html.classList.toggle("hidden");
        menuButton.classList.toggle("active");
    })

// input-list //
    document.addEventListener("click", e => {
        if (!e.target.closest(".list")) {
            return;
        }
        let list = e.target.closest(".list");
        if (e.target.closest(".list.active")) {
            selectItem(e.target);
            list.classList.toggle("active");
            return;
        }
        document.querySelectorAll(".list.active").forEach(item => {
            if (item !== list)
                item.classList.remove("active");
        })
        list.classList.toggle("active");
    })

    const selectItem = (target) => {
        const listItem = target.closest(".list__item");
        if (!listItem) {
            return;
        }
        const list = target.closest(".list.active");
        const input = list.querySelector(".list__input")
        if (input) {
            input.value = listItem.innerText;
            input.dispatchEvent(new Event("change", {bubbles: true}));
        }
    }
    document.addEventListener("change", e => {
        const input = e.target.closest(".list.active .list__input");
        console.log(input)
        if (!input) {
            return;
        }
        const list = input.closest(".list.active");
        const title = list.querySelector(".list__title");
        title.innerText = input.value;
    })

// reservation form checkbox //
    document.addEventListener("click", e => {
        if (!e.target.closest(".reservation-form-consent__checkbox")) {
            return
        }
        let checkbox = e.target.closest(".reservation-form-consent");
        checkboxToggle(checkbox);
    })

    const checkboxToggle = (checkbox) => {
        // console.log(checkbox);
        if (!checkbox.classList.contains("active")) {
            checkbox.classList.add("active");
        } else {
            checkbox.classList.remove("active");
        }
    }

// products about //
    let products = document.querySelectorAll(".product-card");

    //add active class
    document.addEventListener("click", e => {
        if (!e.target.closest(".product-card__button")) {
            return;
        }
        let product = e.target.closest(".product-card");
        console.log('a');
        productToggle(product);
    })

    //close button
    document.addEventListener("click", e => {
        if (!e.target.closest(".product-card__close-icon")) {
            return;
        }
        let product = e.target.closest(".product-card");
        product.classList.remove("active");
    })

    let prevProduct;
    const productToggle = (product) => {
        if (prevProduct) {
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


