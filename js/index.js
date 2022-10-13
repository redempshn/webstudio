'use strict';

//modal window
function foo(){
    let modalBtn = document.querySelector(".modal-btn");
    let modalLayout = document.getElementById("modal-window");
    let modalClose = document.querySelector(".modal-close");

    let body = document.body;

    modalBtn.addEventListener("click", () => {
        modalLayout.classList.add("active");
        body.classList.add("no-scroll");
    });
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
