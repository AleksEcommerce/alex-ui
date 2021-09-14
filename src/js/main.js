'use strict';

import "./lib/lib"
import $ from "./lib/lib";

// $('.g-btn').on('click', function () { 
//     $('div').eq(2).toggleClass('active');
// });

// $('div').click(function() {
//     console.log($(this).index());
// });

// $('.some').eq(1).html('Only 1');


// console.log($('div').find('.more'));
//console.log($('.some').closest('.finddiv').addClass('testclass'));
// console.log($('.more').eq(0).siblings().addClass('testclass'));

// $('.more').fadeIn(2000);

// $('.g-dropdown-control').dropdown();

$('.g-dropdown').dropdown_attribute();

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
                ['g-button', 'close-modal'],
                true
            ],
            [
                'Save changes',
                ['g-button', 'btn-send'],
                false,
                () => {
                    alert('Data Saved')
                }
            ]
        ]
    }
}));
