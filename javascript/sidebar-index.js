function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle('active');
    document.getElementById("wrapper").classList.toggle('active');
    document.getElementById("toggle-collapse").classList.toggle('active');
    document.getElementById("topbar").classList.toggle('active');
}

function autoCollapse() {
    if (document.getElementById("wrapper").classList.contains('active')) {
        document.getElementById("wrapper").classList.toggle('active');
    }
}

var sideBarElement = document.getElementById("sidebar");

function autoOpacity() {
    if (typeof (sideBarElement) != 'undefined' && sideBarElement != null) {

        if (document.getElementById("sidebar").classList.contains('active')) {
            document.getElementById("sidebar").classList.toggle('active');
        }
    }
}

var width = document.body.clientWidth;

function headerResize() {
    width = document.body.clientWidth;
    console.log("Width: " + width);

    if (width > 883) {
        document.getElementById("Header-to-Hamburger-slot").innerHTML = document.getElementById("java-header").innerHTML;
        document.getElementById("java-footer-slot").innerHTML = document.getElementById("java-footer").innerHTML;
    } else {
        document.getElementById("Header-to-Hamburger-slot").innerHTML = document.getElementById("java-hamburger").innerHTML;
        document.getElementById("java-sidebar-slot").innerHTML = document.getElementById("java-sidebar").innerHTML;
        document.getElementById("java-footer-slot").innerHTML = document.getElementById("filler").innerHTML;
    }
}

headerResize();

window.addEventListener("resize", function (event) {
    autoCollapse();
    autoOpacity();
    headerResize();
})