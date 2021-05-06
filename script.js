
// обьявил элементы
var vg = document.querySelector(".vg");
var mg = document.querySelector(".mg");
var hg = document.querySelector(".hg");
var headerInfo = document.querySelector('.header-info');

//функция для транслейт 3д
function setTranslate(xPos, yPos, el) {
    el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}

// создал ивент при загрузке дом выполнять скруллуп функцию
window.addEventListener("DOMContentLoaded", scrollLoop, false);
//обьявил переменные для хранения скрол позиции
var xScrollPosition;
var yScrollPosition;

// функция сохраняющая значения в переменные и запускающая себя во время requestAnimationFrame
function scrollLoop() {
    xScrollPosition = window.scrollX;
    yScrollPosition = window.scrollY;

    setTranslate(0, yScrollPosition * -0.1, vg);
    setTranslate(0, yScrollPosition * -0.4, mg);
    setTranslate(0, yScrollPosition * -1.0, hg);
    setTranslate(0, yScrollPosition * 0.5, headerInfo);
    headerInfo.style.opacity = 1 - (yScrollPosition / 800);

    requestAnimationFrame(scrollLoop);
}
