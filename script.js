// =============================
// MENU MOBILE
// =============================

function toggleMenu() {

    const navbar = document.getElementById("navbar");

    navbar.classList.toggle("active");

}


// =============================
// ANNÉE AUTOMATIQUE
// =============================

document.getElementById("year").textContent =
    new Date().getFullYear();


// =============================
// FERMER LE MENU APRÈS UN CLIC
// =============================

const links = document.querySelectorAll("#navbar a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .getElementById("navbar")
            .classList.remove("active");

    });

});
