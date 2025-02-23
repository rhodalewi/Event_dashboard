const full_nav = document.querySelector('.full_navBar');
const collapse_nav = document.querySelector('.collapse_nav');
const collapse_icon = document.querySelector('.collapseAll');
const fullNav_active = document.querySelectorAll('.fullNav_active');
const homeNav = document.querySelector('.home');

/* TOGGLE THE FULL NAV AND COLLAPSE NAV */
function toggleNav() {
    full_nav.classList.toggle('hidden');
    collapse_nav.classList.toggle('visible');
    collapse_icon.classList.toggle('rotate')
}

/* FULL NAV ACTIVE STATE */
fullNav_active.forEach((nav, index) => {
    nav.addEventListener('click', () => {
        fullNav_active.forEach(nav => nav.classList.remove('active'));

        fullNav_active[index].classList.add('active');
    })
});

/* HOME NAV HOVER STATE */
homeNav.addEventListener('click', () => {
    homeNav.classList.toggle('focus');
    homeNav.classList.add('home_active');

    homeNav.addEventListener('mouseover', () => {
        homeNav.classList.add('home_active');
    });
   
    homeNav.addEventListener('mouseout', () => {
        homeNav.classList.remove('home_active');
    });
})

/* CAROUSAL SLIDE */
const carousals_img = document.querySelectorAll('.carousal_img');
const previousBtn = document.querySelector('.carousal_previous');
const nextBtn = document.querySelector('.carousal_next');
const carousal_indicator = document.querySelectorAll('.carousal_indicator');

let index = 0;

function showImages(index) {
    carousals_img.forEach((img, i) => {
        img.classList.remove('show');
        carousal_indicator[i].classList.remove('indicator');
    });

    carousals_img[index].classList.add('show');
    carousal_indicator[index].classList.add('indicator');
};

function previousSlide() {
    index =(index - 1 + carousals_img.length) % carousals_img.length;
    showImages(index);
};

function nextSlide() {
    index = (index + 1) % carousals_img.length;
    showImages(index);
};

previousBtn.addEventListener('click', previousSlide);
nextBtn.addEventListener('click', nextSlide);

/* INPUT PRESS */
const inputs = document.querySelectorAll('.input');
inputs.forEach((input, index) => {
    input.addEventListener('mousedown', () => {
        inputs.forEach(input => input.classList.remove('pressDown'));
        inputs[index].classList.add('pressDown');
    });
});

inputs.forEach((input) => {
    input.addEventListener('mouseup', () => {
        inputs.forEach(input => input.classList.remove('pressDown'));
    });
});

inputs.forEach((input) => {
    input.addEventListener('mouseleave', () => {
        inputs.forEach(input => input.classList.remove('pressDown'));
    });
});

/* OPEN MODEL */
const open_modal = document.querySelector('.open_modal');
const modal = document.querySelector('.modal');
const cancel_modal = document.querySelector('.cancel');
const opacity = document.querySelector('.opacity');

open_modal.addEventListener('click', () => {
    modal.style.display = "flex";
    opacity.style.display = 'block';
});

cancel_modal.addEventListener('click', () => {
    modal.style.display = 'none';
    opacity.style.display = 'none';
})