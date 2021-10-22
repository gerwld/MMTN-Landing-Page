

function setTranslate(yPos, el) {
    el.style.transform = `translate3d(0px, ${yPos}px, 0)`;
}

window.addEventListener('scroll', scrollLoop, false);

function scrollLoop() {
    let headerInfo = document.querySelector('.header-info');
    let windowY = isNaN(window.scrollY) ? 0 : window.scrollY;

    setTranslate(0, document.querySelector(".vg"));
    setTranslate(windowY / 2, headerInfo);
    headerInfo.style.opacity = 1 - (windowY / 800);
}







//smooth scroll

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
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
