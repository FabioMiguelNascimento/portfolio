window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var btn = document.getElementById("back-to-top-btn");
  if (window.pageYOffset > 20) {
    btn.style.opacity = "1";
    btn.style.visibility = "visible";
  } else {
    btn.style.opacity = "0";
    btn.style.visibility = "hidden";
  }
}

document.getElementById('back-to-top-btn').addEventListener('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
});