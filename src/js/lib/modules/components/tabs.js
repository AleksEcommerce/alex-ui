import $ from '../../core';

$.prototype.tab = function(activeClass = 'm-active') {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).on('click', () => {
            $(this[i]).addClass(activeClass)
                    .siblings()
                    .removeClass(activeClass)
                    .closest('[data-tab-container]')
                    .find('[data-tab-content]')
                    .removeClass(activeClass)
                    .eq($(this[i]).index())
                    .addClass(activeClass);
        });
    }  
};

$('[data-tab-navigation] [data-tab-item]').tab(); 
