import $ from '../../core';

$.prototype.dropdown = function() {
    for (let i = 0; i < this.length; i++) {

        const trigger = this[i].querySelector('[data-dropdown-control]');
        const menu = this[i].querySelector('[data-dropdown-menu]');
        const body = document.querySelector('body');
        let counter = 1;

        $(trigger).click((e) => {
            e.stopPropagation();
            if (counter % 2 == 0) {
                $(menu).fadeOut(200);
                counter++;
            } else {
                $(menu).fadeIn(200);
                counter++;
            }
        });

        $(body).click((e) => {
            if (counter % 2 == 0 && e.target !== menu) {
                console.log(e.target);
                $(menu).fadeOut(200);
                counter++;
            }
        });
    }
}
 