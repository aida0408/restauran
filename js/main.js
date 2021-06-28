$(document).ready(function(){
    $(".events-slider").owlCarousel({
        loop: true,
        items: 3,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992:{
                items: 3
            }
        }
    });
});
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 6,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items:3
            },
            992:{
                items: 4
            },
            1024:{
                items: 5
            }
        }
    });
});
const menu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

mobileMenu.addEventListener('click',() => {
    menu.classList.toggle('show-menu')
})

const menuLinks = document.querySelectorAll('.menu li a')
menuLinks.forEach(element => element.addEventListener('click' ,() => {
    menu.classList.remove('show-menu')
}))
