import $ from '../core';

// Methods for working with classes

$.prototype.addClass = function(...classes) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }
        this[i].classList.add(...classes);
    }

    return this;
};

$.prototype.removeClass = function(...classes) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }
        this[i].classList.remove(...classes);
    }

    return this; 
};

$.prototype.toggleClass = function(classes) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }
        this[i].classList.toggle(classes);
    }

    return this;
};