'use strict';

//modal window
function foo(){
    let modalBtn = document.querySelectorAll(".modal-btn");
    let modalLayout = document.getElementById("modal-window");
    let modalClose = document.querySelector(".modal-close");

    let body = document.body;

    modalBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            modalLayout.classList.add("active");
            body.classList.add("no-scroll");
        });
    })

    modalClose.addEventListener("click", () => {
        modalLayout.classList.remove("active");
        body.classList.remove("no-scroll");
    });
    modalLayout.addEventListener("click", (e) => {
        e.target.classList.remove("active");
        body.classList.remove("no-scroll");
    });

}
foo();


// burger
function toggleNavigation() {
    let burgerBtn = document.querySelector(".burger");
    let header = document.querySelector(".header");

    burgerBtn.addEventListener("click", () => {
        burgerBtn.classList.toggle("active");
        header.classList.toggle("active");
    }); 
}
toggleNavigation();