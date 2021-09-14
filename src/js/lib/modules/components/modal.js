import $ from '../../core';

$.prototype.modal = function(created) {
    for (let i = 0; i < this.length; i++) {
        const target = this[i].getAttribute('data-target');

        $(this[i]).click((e) => {
              
            e.preventDefault();   
            // e.stopPropagation(); 
            $(`[data-modal-id='${target}']`).fadeIn(500);
            document.body.style.overflow = 'hidden';
        }); 
 

        const closeElements = document.querySelectorAll(`[data-modal-id='${target}'] [data-modal-close]`);
        // console.log(closeElements);
        closeElements.forEach(elem => {
            $(elem).click(() => {
                $(`[data-modal-id='${target}']`).fadeOut(500);
                
                document.body.style.overflow = '';
                
                if (created) {
                    setTimeout(() => {
                        document.querySelector(`[data-modal-id='${target}']`).remove();
                    }, 500);
                }
            });
        });
    
        $(`[data-modal-id='${target}']`).click(e => {
            if (e.target.classList.contains('l-popup')) {
                $(`[data-modal-id='${target}']`).fadeOut(500);
                document.body.style.overflow = '';

                if (created) {
                    setTimeout(() => {
                        document.querySelector(`[data-modal-id='${target}']`).remove();
                    }, 500);
                }
            }
        });
    }
}; 

$.prototype.createModal = function({text, btns} = {}) {
    for (let i = 0; i < this.length; i++) {
        let modal = document.createElement('div');
        modal.classList.add('l-popup');  
        console.log(this[i].getAttribute('data-target'));
        modal.setAttribute('data-modal-id', this[i].getAttribute('data-target'));

        // btns = {count, settings: [[text, classNames=[], close, callback]]}
        const buttons = [];
        for (let k = 0; k < btns.count; k++) {
            let btn = document.createElement('button');
            btn.textContent = btns.settings[k][0];
            btn.classList.add('g-button', ...btns.settings[k][1]);
            if (btns.settings[k][2]) {
                btn.setAttribute('data-modal-close', 'true');
            }
            if (btns.settings[k][3] && typeof(btns.settings[k][3] === 'function')) {
                btn.addEventListener('click', btns.settings[k][3]);
            }

            buttons.push(btn);
        }

        modal.innerHTML = `
            <div class="l-popup-container">
                <div class="l-popup-content">
                    <h3>${text.title}</h3>
                    <p>${text.content}</p>  
                </div>
                <div class="l-popup-footer">
                
                </div>
            </div>
        `;

        modal.querySelector('.l-popup-footer').append(...buttons);
        document.body.appendChild(modal);

        $(this[i]).modal(true); 

        $(modal).fadeIn(500);

    }
};
  