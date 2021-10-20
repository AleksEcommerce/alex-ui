import $ from '../../core';

$.prototype.accordeon = function(
    headActive = 'according-head--active', 
    contentActive = 'according-content-active'
    ) {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).on('click', () => {
            $(this[i]).toggleClass(headActive);
            $(this[i].nextElementSibling).toggleClass(contentActive);
        });
    }  
}; 

$.prototype.accordeon_ext = function(
        extended,
        activeClass = 'm-expanded'
    ) {
    
    for (let i = 0; i < this.length; i++) {
        const accordControl = this[i].querySelectorAll('[data-js-accord-control]'),
              accordItem = this[i].querySelectorAll('[data-js-accord-item]');
        let counter = 1;

        accordControl.forEach(item => {
            $(item).click((e) => {
                if (extended === 'extended') {
                    $(item).closest('[data-js-accord-item]').toggleClass(activeClass);
                } else {
                    accordItem.forEach(item => {
                        $(item).removeClass(activeClass);
                    });

                    $(item).closest('[data-js-accord-item]').addClass(activeClass);
                }
            });
        });
    }  
}; 

