const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

if (hamburger && navLinks) {

    hamburger.addEventListener("click", () => {

        const expanded = hamburger.getAttribute("aria-expanded") === "true";

        hamburger.setAttribute("aria-expanded", !expanded);
        navLinks.classList.toggle("active");

    });

    navItems.forEach(link => {
        link.addEventListener("click", () => {

            navLinks.classList.remove("active");
            hamburger.setAttribute("aria-expanded", "false");

        });
    });

}