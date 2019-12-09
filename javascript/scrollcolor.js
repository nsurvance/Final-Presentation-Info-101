var scrollDistance = window.pageYOffset;

console.log(scrollDistance);

document.getElementById("header").style.backgroundColor = "#fff";

window.addEventListener("scroll", function scrollChange() {
    scrollDistance = window.pageYOffset;
    console.log(scrollDistance);

    if (scrollDistance >= 1) {
        document.getElementById("header").style.backgroundColor = "white";
    }
    // } else {
    //     document.getElementById("header").style.backgroundColor = "#000";
    // }
});