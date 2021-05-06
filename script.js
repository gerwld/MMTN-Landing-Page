
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

//smooth scroll

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1200);
});

//smooth scroll iOS Safari

(function() {
    scrollTo();
})();

function scrollTo() {
    const links = document.querySelectorAll('.scroll');
    links.forEach(each => (each.onclick = scrollAnchors));
}

function scrollAnchors(e, respond = null) {
    const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
    e.preventDefault();
    var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
    const targetAnchor = document.querySelector(targetID);
    if (!targetAnchor) return;
    const originalTop = distanceToTop(targetAnchor);
    window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
    const checkIfDone = setInterval(function() {
        const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
        if (distanceToTop(targetAnchor) === 0 || atBottom) {
            targetAnchor.tabIndex = '-1';
            targetAnchor.focus();
            window.history.pushState('', '', targetID);
            clearInterval(checkIfDone);
        }
    }, 1000);
}
