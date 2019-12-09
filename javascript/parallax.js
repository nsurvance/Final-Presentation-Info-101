const parallax = document.getElementById("parallax");


window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    let width = document.body.clientWidth;

    if (width >= 500) {
        parallax.style.backgroundPositionY = offset * -.2 + "px";
    } else {
        parallax.style.backgroundPositionY = offset * -.05 + "px";
    }

})