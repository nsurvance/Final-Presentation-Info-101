var width = document.body.clientWidth;


function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle('active');
}


function headerResize() {
  width = document.body.clientWidth;
  console.log("Width: " + width);

  if (width > 783) {
    document.getElementById("change").innerHTML = document.getElementById("JavaHeader").innerHTML;
  } else {
    document.getElementById("change").innerHTML = document.getElementById("JavaBar").innerHTML;
  }
}

headerResize();

window.addEventListener("resize", function (event) {

  headerResize();

})


