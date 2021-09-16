import $ from '../../core';

$.prototype.accordeon = function(headActive = 'according-head--active', contentActive = 'according-content-active') {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).on('click', () => {
            $(this[i]).toggleClass(headActive);
            $(this[i].nextElementSibling).toggleClass(contentActive);
        });
    }  
};

$('.accordion-head').accordeon();