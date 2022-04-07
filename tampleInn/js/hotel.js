// dynamic date in footer

const date = document.getElementById("date");

date.innerHTML = new Date().getFullYear();

// setting navBar toogler

const linkContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const toggler = document.querySelector(".nav-toggle");

toggler.addEventListener("click", function() {
    //   linkContainer.classList.toggle("show-links");
    const containerHeight = linkContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if (containerHeight === 0) {
        linkContainer.style.height = `${linksHeight}px`;
    } else {
        linkContainer.style.height = 0;
    }
});

// fixed navBar

const navBar = document.getElementById("nav");
const aboutSec = document.getElementById("about");
const topLink = document.querySelector(".top-link");
// const showTopLink = document.querySelector(".show-links");

window.addEventListener("scroll", function() {
    const scrolling = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;
    const aboutSecHeight = aboutSec.getBoundingClientRect().height;

    if (scrolling > navHeight) {
        navBar.classList.add("fixed-nav");
    } else {
        navBar.classList.remove("fixed-nav");
    }
    if (scrolling > aboutSecHeight) {
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }
});

// scrolling exactly to sections

const scrollingSections = document.querySelectorAll(".scroll-link");

scrollingSections.forEach(function(lin) {
    lin.addEventListener("click", function(e) {
        e.preventDefault();
        const linAtt = e.currentTarget.getAttribute("href").slice(1);
        const elementId = document.getElementById(linAtt);

        const navHeight = navBar.getBoundingClientRect().height;
        const containerHeight = linkContainer.getBoundingClientRect().height;

        const fixedNav = navBar.classList.contains("fixed-nav");
        let position = elementId.offsetTop - navHeight;

        if (navHeight > 82) {
            position += containerHeight;
        }

        if (!fixedNav) {
            position -= navHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });
        linkContainer.style.height = 0;
    });
});