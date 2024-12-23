document.addEventListener('DOMContentLoaded', function () {
    const navBar = document.getElementById('navBar');
    const navList = document.querySelector('.navList');
    const burger = document.querySelector('.burger');

    burger.addEventListener('click', function () {
      navList.classList.toggle('nav-active');
      burger.classList.toggle('toggle');
    });
  });
  /* JavaScript to handle the scroll event */
window.addEventListener('scroll', function() {
    const navBar = document.getElementById('navBar');
    if (window.scrollY > 100) {
        navBar.style.top = '0';
    } else {
        navBar.style.top = '-100px';
    }
});
//Get the button
var mybutton = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.onclick = function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}