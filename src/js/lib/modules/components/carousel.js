import $ from '../../core';
 
$.prototype.carousel = function() {
    for (let i = 0; i < this.length; i++) {
        const width = this[i].querySelector('.g-carousel-wrap').clientWidth;
        const slides = this[i].querySelectorAll('.g-carousel-item');
        const slidesField = this[i].querySelector('.g-carousel-list');
        //const pagination = this[i].querySelector('.g-carousel-indicators');
        const parent = this[i].querySelector('.g-carousel-wrap').closest('[data-component-options]');
        

        const data_options = JSON.parse(parent.getAttribute('data-component-options'));
    
        console.log(data_options.pagination);
        
        // Math.floor(width);

        slidesField.style.width = 100 * slides.length + '%';
        slidesField.style.transition = 'all ease 0.3s';
        slides.forEach(slide => {
            slide.style.width = width + 'px';
        });

        // console.log(Math.floor(533.222) + width);
        
        let offset = 0;
        let slideIndex = 0;

        // Added pagination
        if (data_options.pagination) {
            let pagination = document.createElement('ul');
            pagination.classList.add(data_options.paginationClass);
            parent.prepend(pagination);

            for (let p = 0; p < slides.length; p++) {
                let item = document.createElement('li');
                $(item).addClass('g-carousel-indicators_item');
                pagination.append(item);
                item.setAttribute('data-slide-n', `${p}`);
            }
            pagination.children[0].classList.add('m-active');

            var items = pagination.querySelectorAll('[data-slide-n]');
            const parentClass = this[i].getAttribute('class');

            $(`.${parentClass} [data-slide-n]`).click((e) => {
                const slideMove = e.target.getAttribute('data-slide-n');
    
                slideIndex = slideMove;
                offset = width * slideMove;
                slidesField.style.transform = `translateX(-${offset}px)`;
    
                items.forEach(item => item.classList.remove('m-active'));
                items[slideIndex].classList.add('m-active');
                
    
                console.log(offset);
                console.log(slideIndex);
            });
        };


        $(this[i].querySelector('[data-slide="next"]')).click((e) => {
            e.preventDefault();
            if (offset == (width * (slides.length - 1))) {
                offset = 0;
                slideIndex= 0;
            } else {
                offset += width;
                slideIndex++;
            }
            console.log(offset);
            console.log(slideIndex);

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (data_options.pagination) {
                items.forEach(item => item.classList.remove('m-active'));
                items[slideIndex].classList.add('m-active');
            }
        });

        $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
            e.preventDefault();
            if (offset == 0) {
                offset = width * (slides.length - 1);
                slideIndex = slides.length - 1;
            } else {
                offset -= width;
                slideIndex--;
            }
            console.log(offset);
            console.log(slideIndex);

            slidesField.style.transform = `translateX(-${offset}px)`;

            items.forEach(item => item.classList.remove('m-active'));
            items[slideIndex].classList.add('m-active');
        });
    }
};  

// $('.g-carousel').carousel();
 