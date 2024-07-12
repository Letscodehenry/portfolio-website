ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400});

ScrollReveal().reveal('.about_title, .works_title, .contact_title', { delay: 500, origin:'top' });
ScrollReveal().reveal('#greeting_con, .image_2', { delay: 500, origin:'left' });
ScrollReveal().reveal('.info2, .info3', { delay: 500, origin:'right' });
ScrollReveal().reveal('#greet_con', { delay: 500, origin:'right' });
ScrollReveal().reveal('.image_1', { delay: 500, origin:'bottom' });
ScrollReveal().reveal('.info-icon i', { delay: 500, origin:'right',interval:'200' });
ScrollReveal().reveal('.proj1, .proj2, .proj3, .proj_title1, .proj_title2, .proj_title3, .contact1, .contact2, .contact3, .footer_info p', { delay: 500, origin:'bottom' });
ScrollReveal().reveal('.proj1_1 p, .proj2_2 p, .proj3_3 p, .proj_title1_1 p, .proj_title2_2 p, .proj_title3_3 p', { delay: 700, origin:'bottom' });
ScrollReveal().reveal('.contact1_info p, .contact2_info, .contact3_info', { delay: 800, origin:'bottom' });


const toggleBtn = document.querySelector('.toggle_button')
const toggleBtnIcon = document.querySelector('.toggle_button i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function (){
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}
