function scrollTo(element) {
   element.scrollIntoView({block: "start", behavior: "smooth"});
}


let elementPage2 = document.getElementById("page2");
let btn = document.querySelector('.btn-down');
btn.addEventListener('click', () => scrollTo(elementPage2));

elementMain = document.querySelector('.main');
let btnSelect = document.querySelector('.btn-select');

btnSelect.addEventListener('click', () => scrollTo(elementMain));


let mMenuBurger = document.querySelector('.m-menu-burger');
let mMenu = document.querySelector('.m-menu');
let mBody = document.querySelector('body');

mMenuBurger.addEventListener('click', () => {
   mMenu.classList.toggle('active');
   mMenuBurger.classList.toggle('active');
   mBody.classList.toggle('lock');
});

