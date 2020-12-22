/**
 * NodeList.prototype.forEach() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Polyfill
 */
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}












/*

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

*/

/* показать доп 3 карточки объектов */ 
let addCardsBtn = document.querySelector('.add-cards-btn')
let cardHidden = document.querySelectorAll('.card-link.hidden');

addCardsBtn.addEventListener('click', function(){ 
   cardHidden.forEach( function(item){
      item.classList.remove('hidden')
   })
});
/* показа/скрыть 3 доп.опции фильтра */
let filterOptionsAddBtn = document.querySelector('.filter-options-add-btn');
let hiddenOptions = document.querySelector('.filter-options-add.hidden');

filterOptionsAddBtn.addEventListener('click', function(){
   hiddenOptions.classList.toggle('hidden');
   if (filterOptionsAddBtn.innerHTML == "Показать ещё") {
      filterOptionsAddBtn.innerHTML = "Скрыть"
   } else {filterOptionsAddBtn.innerHTML = "Показать ещё"}
});

/* скрыть/показать фильтр по клику на заголовок   */
let filterName = document.querySelectorAll('.filter__name');
filterName.forEach( function(item){
   item.addEventListener('click', function(){
      item.nextElementSibling.classList.toggle('hidden');
      item.classList.toggle('rotate');
   })
});

/* обработка нажатий на фильтр Метро */
let filterMetroAny = document.querySelector('#filter-metro-any');
let filterMetroRow = document.querySelectorAll('.filter-metro__row > input');


//--  кнопка "Любая" при нажатии всегда активна и сбрасывает остальные --
filterMetroAny.addEventListener('click', function(){
   filterMetroAny.checked = true;
   filterMetroRow.forEach ( function(item){ item.checked = false } );
});
//--  остальные кнопки фильтра Метро --
filterMetroRow.forEach( function(item){
   item.addEventListener('click', function(){
      let arrayFilterMetroRow = Array.prototype.slice.call(filterMetroRow);
      //-- если у фильтра есть хоть один элемент cheked, то выкл кнопку Любая
      if ( arrayFilterMetroRow.some(function(i){return i.checked}) ){
         filterMetroAny.checked = false;
      } else {
      //--  если нет других элементов cheked, то вкл кнопку Любая
         filterMetroAny.checked = true;
      }
   });
});
 /* ----- */   

let mFilterBtn = document.querySelector('.mFilterBtn');
let mFilter = document.querySelector('form.filter');

mFilterBtn.addEventListener('click', function(){
   mFilterBtn.classList.toggle('active');
   mFilter.classList.toggle('active');
   document.querySelector('body').classList.toggle('lockScroll');

});
