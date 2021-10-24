'use strict';

import "./lib/lib"
import $ from "./lib/lib";

$.prototype.copy = function() {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).on('click', (e) => {
            e.preventDefault();
            let modalCopied = document.createElement('div');
            let text = $(this[i]).eq(0).siblings().find('.b-element_code-code')[0];
            modalCopied.classList.add('b-notice', 'm-copied');
            modalCopied.innerHTML = 'Code copied to clipboard!';
            navigator.clipboard.writeText(text.innerHTML);
            document.body.appendChild(modalCopied);

            setTimeout(() => {
                modalCopied.remove();
            }, 1000);
        });     
    }  
}
 
$('.b-element_code .b-element_code-copy').copy(); 

$('#accordeon-first').accordeon_ext();  
$('#accordeon-second').accordeon_ext('extended'); 

$('.t-daynight').on('click', function() {
    $('html').toggleClass('m-dark-scheme');
}); 

console.log($('div').find('.more'));

$('.g-dropdown').dropdown();

$('[data-toggle="modal"]').modal();

$('[data-target="modal-3"]').click(() => $('[data-target="modal-3"]').createModal({
    text: {
        title: 'MOdal Title',
        content: 'Some Body'
    },
    btns: {
        count: 2,
        settings: [
            [
                'close',
                ['g-button', 'btn-close'],
                true
            ],
            [
                'Save changes',
                ['g-button', 'btn-send'],
                false,
                () => {
                    alert('Function')
                }
            ] 
        ]
    }
}));
