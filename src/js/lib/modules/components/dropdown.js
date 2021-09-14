import $ from '../../core';
 
$.prototype.dropdown = function() {
    for (let i = 0; i < this.length; i++) {
        const id = this[i].getAttribute('id');

        $(this[i]).click(() => {
            $(`[data-dropdown-id='${id}']`).toggleClass('m-opened');
        });
    }
}

$.prototype.dropdown_attribute = function() {
    for (let i = 0; i < this.length; i++) {

        const trigger = this[i].querySelector('[data-dropdown-control]');
        const menu = this[i].querySelector('[data-dropdown-menu]');

        $(trigger).click(() => {
            $(this[i]).toggleClass('m-opened');
        });
    }
}
 