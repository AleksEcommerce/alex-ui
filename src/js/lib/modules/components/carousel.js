import $ from '../../core';
 
$.prototype.carousel = function() {
    for (let i = 0; i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector('.g-carousel-wrap')).width;
        const slides = this[i].querySelectorAll('.g-carousel-item');
        const slidesField = this[i].querySelector('.g-carousel-list');
        const pagination = this[i].querySelectorAll('.g-carousel-indicators_item');
        

        slidesField.style.width = 100 * slides.length + '%';
        slidesField.style.transition = 'all ease 0.3s';
        slides.forEach(slide => {
            slide.style.width = width;
        });

        let offset = 0;
        let slideIndex = 0;

        for (let p = 0; p < slides.length; p++) {
            pagination[p].setAttribute('data-slide-n', `${p}`);
        }

        $(this[i].querySelector('[data-slide="next"]')).click((e) => {
            e.preventDefault();
            if (offset == (+width.replace(/\D/g, '') * (slides.length - 1))) {
                offset = 0;
                slideIndex= 0;
            } else {
                offset += +width.replace(/\D/g, '');
                slideIndex++;
            }
            console.log(slideIndex);

            slidesField.style.transform = `translateX(-${offset}px)`;

            pagination.forEach(item => item.classList.remove('m-active'));
            pagination[slideIndex].classList.add('m-active');
        });

        $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
            e.preventDefault();
            if (offset == 0) {
                offset = +width.replace(/\D/g, '') * (slides.length - 1);
                slideIndex = 0;
            } else {
                offset -= +width.replace(/\D/g, '');
                slideIndex++;
            }
            console.log(slideIndex);

            slidesField.style.transform = `translateX(-${offset}px)`;

            pagination.forEach(item => item.classList.remove('m-active'));
            pagination[slideIndex].classList.add('m-active');
        });

        const parentDiv = this[i].getAttribute('id');
        $(`#${parentDiv} [data-slide-n]`).click((e) => {

            const slideMove = e.target.getAttribute('data-slide-n');

            slideIndex = slideMove;
            offset = +width.replace(/\D/g, '') * slideMove;
            slidesField.style.transform = `translateX(-${offset}px)`;

            pagination.forEach(item => item.classList.remove('m-active'));
            pagination[slideIndex].classList.add('m-active');
        });
    }
};  

$('.g-carousel').carousel();
 