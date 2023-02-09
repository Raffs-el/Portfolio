const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('mostrar');
        } else {
            entry.target.classList.remove('mostrar');
        }

    });
});

const hiddenElements = document.querySelectorAll('.escondido');
hiddenElements.forEach((el) => observer.observe(el));


$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 100) {
            $("header").addClass("fundo2");
            $(".nav-menu").addClass("nav-menu-2");
        } else {
            $("header").removeClass("fundo2");
            $(".nav-menu").removeClass("nav-menu-2");
        }
    });
});