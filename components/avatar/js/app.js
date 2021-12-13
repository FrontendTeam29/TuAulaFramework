'use strict';

let buttons = document.querySelectorAll('#buttonNav');
let divs = document.querySelector('#divNav');

buttons.forEach(button => {
    button.addEventListener('click', function(){
        //button.classList.toggle("pt-7");

        if(this.classList.contains('pt-7')) {
            this.classList.remove('pt-7');
        }
        else {
            this.classList.add('pt-7');
        }
    });
});

