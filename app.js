$submenu = false;
$submenuOpened = false;
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
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
