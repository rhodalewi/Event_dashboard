const collapse_icon = document.querySelectorAll('.collapseNav_icon');
const fullNav_active = document.querySelectorAll('.fullNav_active');
const homeNav = document.querySelector('.home');
const navBar = document.querySelector('.navBar');

/* TOGGLE THE FULL NAV AND COLLAPSE NAV */
function toggleNav() {
    navBar.classList.toggle('collapsed');
    collapse_icon.forEach(icon => icon.classList.toggle('rotate'));
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
    if (window.innerWidth <= 768) {
        homeNav.classList.toggle('focus');
        homeNav.classList.add('home_active');
    
        homeNav.addEventListener('mouseover', () => {
            homeNav.classList.add('home_active');
        });
       
        homeNav.addEventListener('mouseout', () => {
            homeNav.classList.remove('home_active');
        });
        
    } else {
        homeNav.classList.toggle('focus');
        homeNav.classList.remove('home_active');
    
        homeNav.addEventListener('mouseover', () => {
            homeNav.classList.remove('home_active');
        });
       
        homeNav.addEventListener('mouseout', () => {
            homeNav.classList.add('home_active');
        });
    }
   
});

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
const opacity = document.querySelector('.opacity');

open_modal.addEventListener('click', () => {
    modal.style.display = "flex";
    opacity.style.display = 'block'; 
});

function cancelButton() {
    modal.style.display = 'none';
    opacity.style.display = 'none';
}

//MOBILE DUNCTIONALITIES
/* Open and close the navbar */
const menuIcon = document.getElementById('menu_icon');
const cancelIcon = document.querySelector('.cancelIcon');
const allNav = document.querySelector('.allNav');
const main_content = document.querySelector('.main_content');

function openNav() {
    allNav.style.display = 'flex';
    cancelIcon.style.display = 'block';
    menuIcon.style.display = 'none';
    main_content.style.display = 'none';
}

function closeNav() { 
    allNav.style.display = 'none';
    cancelIcon.style.display = 'none';
    menuIcon.style.display = 'block';
    main_content.style.display = 'block';
}

window.addEventListener("resize", function () {
    if (window.innerWidth < 768) {
        openNav();
        closeNav();
    }
})

window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
        allNav.style.display = "flex";
    } else {
        allNav.style.display = "none";
    }
});


//Data table functionality
const dataTable = document.querySelectorAll('.accordion_header');
const dataDropdown = document.querySelectorAll('.dataDropdown');
const dataIcon = document.querySelectorAll('.dataIcon');

dataTable.forEach((data, index) => {
    data.addEventListener('click', () => {
        dataDropdown[index].classList.toggle('dropdownShow');
        dataIcon[index].classList.toggle('dropArrow');
    });
});


//TOGGLE DARK MODE
const body = document.querySelector('body');
const toggleMode = document.querySelector('.toggleMode');

toggleMode.addEventListener('click', () => {
    toggleMode.classList.toggle('switch');

    body.classList.toggle('switchMode');
})