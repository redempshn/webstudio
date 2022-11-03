'use strict';

let body = document.body;

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
        body.classList.toggle("no-scroll");
    }); 
}
toggleNavigation();

// portfolio sort items
const portfolioItems = [
    {
        id: 1,
        img: "./img/portfolio/portfolio-img-1.jpg",
        desc: "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.",
        title: "Технокряк",
        category: "Веб-сайт"
    },
    {
        id: 2,
        img: "./img/portfolio/portfolio-img-2.jpg",
        desc: "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.",
        title: "Постер New Orlean vs Golden Star",
        category: "Дизайн"
    },
    {
        id: 3,
        img: "./img/portfolio/portfolio-img-3.jpg",
        desc: "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.",
        title: "Ресторан Seafood",
        category: "Додаток"
    },
    {
        id: 4,
        img: "./img/portfolio/portfolio-img-4.jpg",
        desc: "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.",
        title: "Проєкт Prime",
        category: "Маркетинг"
    },
    {
        id: 5,
        img: "./img/portfolio/portfolio-img-5.jpg",
        desc: "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.",
        title: "Проєкт Boxes",
        category: "Додаток"
    },
    {
        id: 6,
        img: "./img/portfolio/portfolio-img-6.jpg",
        desc: "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.",
        title: "Inspiration has no Borders",
        category: "Веб-сайт"
    },
    {
        id: 7,
        img: "./img/portfolio/portfolio-img-7.jpg",
        desc: "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.",
        title: "Видання Limited Edition",
        category: "Дизайн"
    },
    {
        id: 8,
        img: "./img/portfolio/portfolio-img-8.jpg",
        desc: "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.",
        title: "Проєкт LAB",
        category: "Маркетинг"
    },
    {
        id: 9,
        img: "./img/portfolio/portfolio-img-9.jpg",
        desc: "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.",
        title: "Growing Business",
        category: "Додаток"
    },
]

const portfolioContent = document.querySelector(".portfolio-content");
const filterBtns = document.querySelectorAll(".btn-portfolio");

filterBtns.forEach(function(btn){
    btn.addEventListener("click", (e) => {
        const category = e.currentTarget.dataset.id;

        const portfolioCategory = portfolioItems.filter(function(portfolioItem){
            if(portfolioItem.category === category){
                return portfolioItem;
            }
        })

        if(category === "Усі"){
            displayPortfolioItems(portfolioItems);
        } else {
            displayPortfolioItems(portfolioCategory);
        }
    });
});

// load items
window.addEventListener("DOMContentLoaded", function () {
    displayPortfolioItems(portfolioItems);
});

function displayPortfolioItems(items){
    let displayItems = items.map((item) => {
        return `
        <li class="portfolio-item">
            <div class="portfolio-item-label">
                <img src="${item.img}" alt="image" class="portfolio-img">
                <div class="portfolio-label-content">
                    <p class="portfolio-label-text">
                        ${item.desc}
                    </p>
                </div>
            </div>
            <h3 class="portfolio-item-title">${item.title}</h3>
            <p class="portfolio-item-category">${item.category}</p>
        </li>
        `;
    });

    displayItems = displayItems.join('');
    portfolioContent.innerHTML = displayItems;
};


