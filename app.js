'use strict';

const interruptor = document.querySelector('.btn');

interruptor.addEventListener('click' , function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light"
    }
    console.log('nome da classe atual: ' + className);
});

