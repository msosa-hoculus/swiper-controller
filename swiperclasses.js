class connectedSwiper extends HTMLElement {
    constructor() {
        super();
        this.settings = JSON.parse(this.dataset.settings);
    }

    connectedCallback() {
        let controller;
        const swiper = new Swiper(this, this.settings);

        if (this.dataset.controller !== undefined) {
            controller = document.querySelector(this.dataset.controller)
            console.log(controller.swiper + swiper);
            swiper.controller.control = controller.swiper;
            this.swiper = swiper;
        }

    }
}

customElements.define("connected-swiper", connectedSwiper);

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
    dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
    dialog.close();
});
