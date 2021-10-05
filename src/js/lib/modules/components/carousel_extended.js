import $ from '../../core';
 
$.prototype.carouselExt = function() {
    for (let i = 0; i < this.length; i++) {
        const width = this[i].querySelector('.g-carousel-wrap').clientWidth;
        const slides = this[i].querySelectorAll('.g-carousel-item');
        const slidesField = this[i].querySelector('.g-carousel-list');
        const parent = this[i].querySelector('.g-carousel-wrap').closest('[data-component-options]');
        const data_options = JSON.parse(parent.getAttribute('data-component-options'));
        
        const carouselColumns = (data_options.columns) ? data_options.columns : 1;
        const widthSlides = width / carouselColumns;

        slidesField.style.width = (100 * (slides.length / carouselColumns) + '%');
        slidesField.style.transition = 'all ease 0.3s';
        slides.forEach(slide => {
            slide.style.width = widthSlides + 'px';
        });
        
        let offset = 0;
        let slideIndex = 0;

        function nextSlide() {
            if (offset == (widthSlides * (slides.length - carouselColumns))) {
                offset = 0;
                slideIndex= 0;
            } else {
                offset += widthSlides;
                slideIndex++;
            }
            slidesField.style.transform = `translateX(-${offset}px)`;
        };

        function prevSlide() {
            if (offset == 0 || slideIndex <= 0) {
                offset = widthSlides * (slides.length - carouselColumns);
                slideIndex = slides.length - carouselColumns;
            } else {
                offset -= widthSlides;
                slideIndex--;
            }
            slidesField.style.transform = `translateX(-${offset}px)`;
        }

        function movePagination() {
            if (data_options.pagination && carouselColumns === 1) {
                items.forEach(item => item.classList.remove('m-active'));
                items[slideIndex].classList.add('m-active');
            }
        }

        $(this[i].querySelector('[data-slide="next"]')).click((e) => {
            e.preventDefault();

            nextSlide();
            movePagination();
        });

        $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
            e.preventDefault();

            prevSlide();
            movePagination();
        });

        // Added pagination
        if (data_options.pagination && carouselColumns === 1) {
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
            });
        };
    }
};   

$('.g-carousel').carouselExt();
 