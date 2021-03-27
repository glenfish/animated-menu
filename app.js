document.addEventListener("DOMContentLoaded", theDomHasLoaded, false);
window.addEventListener("load", pageFullyLoaded, false);

function theDomHasLoaded(e) {
    
    function myFunction(x) {
        if (x.matches) { // If media query matches
            $desktop = false;
        } else {
            $desktop = true;
        }
      }
      
      var x = window.matchMedia("(max-width: 768px)")
      myFunction(x) // Call listener function at run time
      x.addListener(myFunction) // Attach listener function on state changes

}

function pageFullyLoaded(e) {
    // do something again
}




$submenu = false;
$submenuOpened = false;
$mobile = false;
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const aboutLink = document.querySelector(".nav-links li.about a");
const aboutLinks = document.querySelector(".about-links");
const aboutLinksLi = document.querySelector(".about-links li");
const links = document.querySelectorAll(".nav-links li");
const about = document.querySelector('.nav-links li.about');

hamburger.addEventListener("click", () => {
    if ($submenu === false) { 
        if ($submenuOpened === true) {
            aboutLinks.classList.toggle("open");
            // navLinks.classList.toggle("open");
            $submenuOpened = false;
        }
        navLinks.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle("fade");
        });
    } else {
        
        navLinks.classList.toggle("open");
        aboutLinks.classList.toggle("open");
        $submenuOpened = false;
        $submenu = false;
    }
    

});

about.addEventListener("click", () => {
    // alert("hey!");
    ($submenu === false ) ? $submenu = true : $submenu = false;
    $submenuOpened = true;
    navLinks.classList.toggle("open");
    aboutLinks.classList.toggle("open");
})

aboutLink.addEventListener("click", () => {
    if ($desktop === true) {
    window.location.href = "./about.html";
    }
})
